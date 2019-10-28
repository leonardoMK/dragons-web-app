import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as styles from './style';
import { createDragonSchema } from '../../helpers/schemas';
import { createDragon } from '../../store/dragons/actions';
import PageContainer from '../../components/PageContainer';

const initialLoginState = {
  name: '',
  type: '',
};

const CreateDragon = ({ history }) => {
  const { error, isLoading } = useSelector(state => state.dragons);
  const dispatch = useDispatch();
  const onCreateDragon = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const createdData = await dispatch(createDragon(values));
    if (createdData) {
      history.push('/');
    }
    setSubmitting(false);
  };

  return (
    <PageContainer centerContent>
      <styles.Container>
        <Formik
          initialValues={initialLoginState}
          validationSchema={createDragonSchema}
          onSubmit={onCreateDragon}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props;
            return (
              <Form onSubmit={handleSubmit}>
                <styles.FieldsContent>
                  <Typography variant="h3" gutterBottom>
                    Cadastro de dragão
                  </Typography>
                  <Field name="name">
                    {({ field, meta }) => (
                      <TextField
                        fullWidth
                        id="inp-name"
                        name="name"
                        label="Nome do dragão"
                        {...field}
                        error={meta.touched && !!meta.error}
                        margin="normal"
                      />
                    )}
                  </Field>
                  <Field name="type">
                    {({ field, meta }) => (
                      <TextField
                        fullWidth
                        id="inp-type"
                        name="type"
                        label="Tipo do dragão"
                        {...field}
                        error={meta.touched && !!meta.error}
                        margin="normal"
                      />
                    )}
                  </Field>
                  {error && (
                    <Typography variant="h6" gutterBottom color="error">
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
                      Cadastrar Dragão
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

export default CreateDragon;
