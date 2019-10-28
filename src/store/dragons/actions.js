import ServiceDragons from '../../services/Dragons';

export const FETCHING_DRAGONS = 'FETCHING_DRAGONS';
export const FETCH_DRAGONS_SUCCESS = 'FETCH_DRAGONS_SUCCESS';
export const FETCH_DRAGONS_FAILURE = 'FETCH_DRAGONS_FAILURE';
export const REMOVING_DRAGON = 'REMOVING_DRAGON';
export const REMOVE_DRAGON_SUCCESS = 'REMOVE_DRAGON_SUCCESS';
export const REMOVE_DRAGON_FAILURE = 'REMOVE_DRAGON_FAILURE';
export const SUBMITTING_DRAGON = 'SUBMITTING_DRAGON';
export const SUBMIT_DRAGON_SUCCESS = 'SUBMIT_DRAGON_SUCCESS';
export const SUBMIT_DRAGON_FAILURE = 'SUBMIT_DRAGON_FAILURE';
export const UPDATING_DRAGON = 'UPDATING_DRAGON';
export const UPDATE_DRAGON_SUCCESS = 'UPDATE_DRAGON_SUCCESS';
export const UPDATE_DRAGON_FAILURE = 'UPDATE_DRAGON_FAILURE';
export const FETCHING_DRAGON_BY_ID = 'FETCHING_DRAGON_BY_ID';
export const FETCH_DRAGON_SUCCESS = 'FETCH_DRAGON_SUCCESS';
export const FETCH_DRAGON_FAILURE = 'FETCH_DRAGON_FAILURE';

export const getDragons = () => {
  const DragonsService = new ServiceDragons();
  return async dispatch => {
    dispatch({
      type: FETCHING_DRAGONS,
    });
    try {
      const response = await DragonsService.getDragons();
      dispatch({
        type: FETCH_DRAGONS_SUCCESS,
        dragons: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DRAGONS_FAILURE,
        error: 'Erro ao buscar dragões da api',
      });
    }
  };
};

export const deleteDragon = id => {
  const DragonsService = new ServiceDragons();
  return async dispatch => {
    dispatch({
      type: REMOVING_DRAGON,
    });
    try {
      await DragonsService.deleteDragon(id);
      dispatch({
        type: REMOVE_DRAGON_SUCCESS,
        idRemoved: id,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_DRAGON_FAILURE,
      });
      return 'Erro ao deletar dragão';
    }
  };
};

export const createDragon = dragon => {
  const DragonsService = new ServiceDragons();
  return async dispatch => {
    dispatch({
      type: SUBMITTING_DRAGON,
    });
    try {
      const response = await DragonsService.createDragon(dragon);
      dispatch({
        type: SUBMIT_DRAGON_SUCCESS,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: SUBMIT_DRAGON_FAILURE,
        error: 'Erro ao criar dragão',
      });

      return false;
    }
  };
};

export const editDragon = dragon => {
  const DragonsService = new ServiceDragons();
  return async dispatch => {
    dispatch({
      type: UPDATING_DRAGON,
    });
    try {
      const response = await DragonsService.updateDragon(dragon);
      dispatch({
        type: UPDATE_DRAGON_SUCCESS,
        dragon: response.data,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: UPDATE_DRAGON_FAILURE,
        error: 'Erro ao criar dragão',
      });

      return false;
    }
  };
};

export const getDragon = id => {
  const DragonsService = new ServiceDragons();
  return async dispatch => {
    dispatch({
      type: FETCHING_DRAGON_BY_ID,
    });
    try {
      const response = await DragonsService.getDragonById(id);
      dispatch({
        type: FETCH_DRAGON_SUCCESS,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: FETCH_DRAGON_FAILURE,
        error: 'Erro ao buscar dragões da api',
      });
      return null;
    }
  };
};
