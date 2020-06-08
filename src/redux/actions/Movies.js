import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, GET_MOVIES_LIST} from "../constants/AppConstants";

export const getMoviesList = () => {
  return (dispatch) => {
    try {
      dispatch({type: FETCH_START});
      setTimeout(() => {
        dispatch({type: GET_MOVIES_LIST});
        dispatch({type: FETCH_SUCCESS})
      }, 1000)
    } catch {
      dispatch({type: FETCH_ERROR, payload: 'Oops, something went wrong.'})
    }
  }
};
