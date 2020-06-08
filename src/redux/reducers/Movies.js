import data from '../../helper/data';
import {GET_MOVIES_LIST} from "../constants/AppConstants";

const initialState = {
  moviesList: []
};

export default ( state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST: {
      return {
        ...state,
        moviesList: data.entries.filter(item => item.programType === "movie")
      }
    }
    default:
      return state;
  }
}
