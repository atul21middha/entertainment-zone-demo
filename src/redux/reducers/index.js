import Movies from "./Movies";
import Series from "./Series";
import {combineReducers} from "redux";
import Common from "./Common";

const reducer = combineReducers({
  movies: Movies,
  series: Series,
  common: Common
});

export default reducer;
