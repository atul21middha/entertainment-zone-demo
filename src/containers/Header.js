import React, {Fragment} from 'react';
import {useLocation} from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation();

  const getTitle = () => {
    if(pathname.includes('movies')){
      return "Popular Movies"
    } else if(pathname.includes('series')){
      return "Popular Series"
    } else {
      return "Popular Titles"
    }
  };

  return (
    <Fragment>
      <div className="content d-flex flex-row headerColor">
        <h3 className="text-white my-auto">DEMO Streaming</h3>
        <div className="d-flex flex-row align-items-center ml-auto my-auto">
          <div className=" mr-5 text-white cursorPointer">Log in</div>
          <button type="button" className="btn btn-dark btn-sm">Start Your Free Trial</button>
        </div>

      </div>
      <div className="titleBarBgColor content">
        <h4 className="text-white">{getTitle()}</h4>
      </div>
    </Fragment>
  );
};

export default Header;
