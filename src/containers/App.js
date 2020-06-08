import React from 'react';
import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import Modules from "../modules";
import Footer from "./Footer";

function App(props) {
  const {match} = props;
  return (
    <div className="app ">
      <Header/>
      <Switch>
        <Route path={`${match.url}`} component={Modules}/>
        {/*<Route*/}
        {/*  component={asyncComponent(() => import('components/Error404'))}/>*/}
      </Switch>
      <div className="mt-auto">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
