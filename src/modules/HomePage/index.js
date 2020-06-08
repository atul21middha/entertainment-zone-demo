import React from 'react';
import {useHistory} from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const goToMoviesList = () => {
    history.push('/movies')
  };

  const goToSeriesList = () => {
    history.push('/series')
  };

  return (
    <div className="homePage d-flex flex-row">
      <div>
        <div className='position-relative cursorPointer' onClick={goToSeriesList}>
          <img width={150} height={200} src={require('../../assests/images/action.png')}
               style={{backgroundColor: 'black'}} alt="series"/>
          <div className="position-absolute  h5 homeImageText text-white">Series</div>
        </div>
        <div className="mt-1">Popular Series</div>
      </div>
      <div style={{marginLeft: 20}}>
        <div className='position-relative cursorPointer' onClick={goToMoviesList}>
          <img width={150} height={200} src={require('../../assests/images/action.png')}
               style={{backgroundColor: 'black'}} alt="movies"/>
          <div className="position-absolute  h5 homeImageText text-white">Movies</div>
        </div>
        <div className="mt-1">Popular Movies</div>
      </div>
    </div>
  );
};

export default HomePage;
