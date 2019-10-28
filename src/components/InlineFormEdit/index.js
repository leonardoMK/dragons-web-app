import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import * as styles from './style';
import { createDragonSchema } from '../../helpers/schemas';
import { Form, Formik, Field } from 'formik';

const InlineFormEdit = ({ dragon, onSubmit, isLoadingEdit }) => {
  return (
    <Formik
      initialValues={dragon}
      validationSchema={createDragonSchema}
      onSubmit={onSubmit}
    >
      {props => {
        const { isSubmitting, handleSubmit } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <styles.FieldsContent>
              <Field name="name">
                {({ field, meta }) => (
                  <TextField
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
                    id="inp-type"
                    name="type"
                    label="Tipo do dragão"
                    {...field}
                    error={meta.touched && !!meta.error}
                    margin="normal"
                  />
                )}
              </Field>
            </styles.FieldsContent>
            <Box>
              <Button
                disabled={isSubmitting || isLoadingEdit}
                variant="contained"
                type="submit"
                color="primary"
              >
                Salvar
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InlineFormEdit;
