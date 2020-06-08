import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS} from "../constants/AppConstants";

const initialState = {
  loading: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        loading: true
      }
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: ''
      }
    }

    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }
    }
    default:
      return state;
  }
}
