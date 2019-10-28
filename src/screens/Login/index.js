import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as styles from './style';
import { signInValidation } from '../../helpers/schemas';
import { login } from '../../store/auth/actions';
import PageContainer from '../../components/PageContainer';

const initialLoginState = {
  username: '',
  password: '',
};

const Login = ({ auth, login, history }) => {
  const { error, isLoading } = auth;
  const doLogin = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const session = await login(values);

    if (session) {
      window.location.reload();
    }
    setSubmitting(false);
  };

  return (
    <PageContainer centerContent>
      <styles.Container>
        <Formik
          initialValues={initialLoginState}
          validationSchema={signInValidation}
          onSubmit={doLogin}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props;
            return (
              <Form onSubmit={handleSubmit}>
                <styles.FieldsContent>
                  <Typography variant="h3" gutterBottom>
                    Login
                  </Typography>
                  <Field name="username">
                    {({ field, meta }) => (
                      <TextField
                        fullWidth
                        id="inp-username"
                        name="username"
                        label="Usuário"
                        {...field}
                        error={meta.touched && !!meta.error}
                        margin="normal"
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <TextField
                        fullWidth
                        id="inp-username"
                        type="password"
                        name="password"
                        label="Senha"
                        {...field}
                        error={meta.touched && !!meta.error}
                        margin="normal"
                      />
                    )}
                  </Field>
                  {error && (
                    <Typography variant="p" gutterBottom color="error">
                      {error}
                    </Typography>
                  )}
                  <Box p={3}>
                    <Button
                      disabled={isSubmitting || isLoading}
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      Fazer Login
                    </Button>
                  </Box>
                </styles.FieldsContent>
              </Form>
            );
          }}
        </Formik>
      </styles.Container>
    </PageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
