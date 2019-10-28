import {
  FETCHING_DRAGONS,
  FETCH_DRAGONS_SUCCESS,
  FETCH_DRAGONS_FAILURE,
  REMOVE_DRAGON_SUCCESS,
  REMOVING_DRAGON,
  REMOVE_DRAGON_FAILURE,
  SUBMITTING_DRAGON,
  SUBMIT_DRAGON_SUCCESS,
  SUBMIT_DRAGON_FAILURE,
  FETCHING_DRAGON_BY_ID,
  FETCH_DRAGON_SUCCESS,
  FETCH_DRAGON_FAILURE,
  UPDATING_DRAGON,
  UPDATE_DRAGON_SUCCESS,
  UPDATE_DRAGON_FAILURE,
} from './actions';

const INITIAL_STATE = {
  isLoading: false,
  isLoadingDelete: false,
  list: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_DRAGONS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DRAGONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.dragons.sort(
          (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
        ),
        error: INITIAL_STATE.error,
      };
    case FETCH_DRAGONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case REMOVE_DRAGON_SUCCESS:
      return {
        ...state,
        list: state.list.filter(d => d.id !== action.idRemoved),
        isLoadingDelete: false,
      };
    case REMOVE_DRAGON_FAILURE:
      return {
        ...state,
        isLoadingDelete: false,
      };
    case REMOVING_DRAGON:
      return {
        ...state,
        isLoadingDelete: true,
      };
    case SUBMITTING_DRAGON:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_DRAGON_SUCCESS:
      return {
        ...state,
        error: INITIAL_STATE.error,
        isLoading: false,
      };
    case SUBMIT_DRAGON_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case UPDATING_DRAGON:
      return {
        ...state,
        isLoadingEdit: true,
      };
    case UPDATE_DRAGON_SUCCESS:
      return {
        ...state,
        error: INITIAL_STATE.error,
        list: state.list.map(d =>
          d.id === action.dragon.id ? action.dragon : d
        ),
        isLoadingEdit: false,
      };
    case UPDATE_DRAGON_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoadingEdit: false,
      };
    case FETCHING_DRAGON_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DRAGON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: INITIAL_STATE.error,
      };
    case FETCH_DRAGON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
