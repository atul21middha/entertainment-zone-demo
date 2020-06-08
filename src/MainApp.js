import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./containers/App";
import {Provider} from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const MainApp = () => (
   <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
   </Provider>
);


export default MainApp;
