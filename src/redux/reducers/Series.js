import data from '../../helper/data';
import {GET_SERIES_LIST} from "../constants/AppConstants";

const initialState = {
  seriesList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_LIST: {
      return {
        ...state,
        seriesList: data.entries.filter(item => item.programType === "series")
      }
    }
    default:
      return state;
  }
}
