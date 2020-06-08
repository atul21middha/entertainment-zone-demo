import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, GET_SERIES_LIST} from "../constants/AppConstants";

export const getSeriesList = () => {
  return (dispatch) => {
    try {
      dispatch({type: FETCH_START});
      setTimeout(() => {
        dispatch({type: GET_SERIES_LIST});
        dispatch({type: FETCH_SUCCESS})
      }, 1000)
    } catch {
      dispatch({type: FETCH_ERROR, payload: 'Oops, something went wrong.'})
    }
  }
};
