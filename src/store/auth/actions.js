import { userAuth } from '../../helpers/constants';
import { saveSessionToken, logoutSession } from '../../helpers/auth';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const loadingLogin = () => ({
  type: LOGIN_LOADING,
});

export const login = user => {
  return async dispatch => {
    dispatch(loadingLogin());
    // Simular carregamento do login
    return await new Promise(((resolve) => {
      setTimeout(() => {
        if (
          userAuth.LOGIN === user.username &&
          userAuth.PASSWORD === user.password
        ) {
          const token = saveSessionToken();
          dispatch({
            type: LOGIN_SUCCESS,
            sessionToken: token,
          });

          resolve(token);
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            error: 'Usuário incorreto ou senha inválida',
          });
          resolve(null);
        }
      }, 2000);
    }));
  };
};

export const logout = () => {
  return dispatch => {
    logoutSession();
    dispatch({
      type: LOGOUT,
    });
    window.location.href = '/';
  }
}
