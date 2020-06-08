import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesList} from "../../redux/actions/Movies";
import ListItem from "./ListItem";
import {getSortedData} from "../../helper/helperFunctions";

const Movies = () => {
  const dispatch = useDispatch();

  const {moviesList} = useSelector(({movies}) => movies);
  const {loading, errorMessage} = useSelector(({common}) => common);

  useEffect(() => {
    dispatch(getMoviesList())
  }, [dispatch]);

  const data = getSortedData(moviesList);

  return (
    <div className="homePage">
      {!loading ?
        errorMessage ?
          <div>{errorMessage}</div> :
          <div className="d-flex flex-row flex-wrap">
            {data.map((item, index) => {
              return <ListItem item={item} key={index}/>
            })}
          </div>
        : <div>Loading...</div>
      }
    </div>
  );
};

export default Movies;
