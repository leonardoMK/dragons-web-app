import { LOGIN_LOADING, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './actions';

const INITIAL_STATE = {
  isLoading: false,
  sessionToken: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        sessionToken: action.sessionToken,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        sessionToken: INITIAL_STATE.sessionToken,
      };
    default:
      return state;
  }
};
