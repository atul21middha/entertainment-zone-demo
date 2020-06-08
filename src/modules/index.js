import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import Series from "./Series";
import Movies from "./Movies";

const Modules = (props) => {
  const {match} = props;
  return (
    <main className="app-main-container">
      <Switch>
        <Route path={`${match.url}/`}
               component={HomePage}/>
        <Route path={`${match.url}Series`}
               component={Series}/>
        <Route path={`${match.url}Movies`}
               component={Movies}/>

      </Switch>
    </main>
  );
};

export default Modules;
