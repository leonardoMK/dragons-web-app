import * as Yup from 'yup';

export const signInValidation = Yup.object().shape({
  username: Yup.string()
   .max(20, 'Por favor, insira no máximo 20 caracteres')
   .required( 'Por favor, insira o seu usuário' ),
  password: Yup.string()
    .min(3, 'Senha com no mínimo 3 caracteres')
   .required('Por favor, insira a senha'),
 });

 export const createDragonSchema = Yup.object().shape({
  name: Yup.string()
   .max(20, 'Por favor, insira no máximo 20 caracteres')
   .required( 'Por favor, insira o nome do seu dragão' ),
  type: Yup.string()
    .min(3, 'Senha com no mínimo 3 caracteres')
   .required('Por favor, o tipo do seu dragão'),
 });