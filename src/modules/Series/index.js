import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSeriesList} from "../../redux/actions/Series";
import ListItem from "../Movies/ListItem";
import {getSortedData} from "../../helper/helperFunctions";

const Series = () => {
  const dispatch = useDispatch();

  const {seriesList} = useSelector(({series}) => series);
  const {loading, errorMessage} = useSelector(({common}) => common);

  useEffect(() => {
      dispatch(getSeriesList())
  }, [dispatch]);

  const data = getSortedData(seriesList);

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

export default Series;
