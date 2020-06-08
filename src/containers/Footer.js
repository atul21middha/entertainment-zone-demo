import React from 'react';
import {Link} from "react-router-dom";

const footerLinks = [
  {name: 'Home', url: '#'},
  {name: 'Terms and Conditions', url: '#'},
  {name: 'Privacy Policy', url: '#'},
  {name: 'Collection Statement', url: '#'},
  {name: 'Help', url: '#'},
  {name: 'Manage Account', url: '#'},
];

const copyRightText = "Copyright @ 2020 DEMO Streaming. All rights reserved";

const Footer = () => {
  return (
    <div className="homePage titleBarBgColor">
      <ul className="pl-0">
        {footerLinks.map((item, index) => {
          return <li key={index}
                     className="d-inline mr-2 pr-2 border-right">
            <Link to={item.url} className="text-white text-decoration-none">{item.name}</Link>
          </li>
        })}
      </ul>
      <div className="text-white mb-4">{copyRightText}</div>
      <div className="d-flex flex-row">
        <ul className="pl-0">
          <li className="d-inline mr-3 cursorPointer">
            <img src={require('../assests/images/facebook.png')} alt="facebook"/>
          </li>

          <li className="d-inline mr-3 cursorPointer">
            <img src={require('../assests/images/twitter.png')} alt="twitter"/>
          </li>

          <li className="d-inline cursorPointer">
            <img src={require('../assests/images/instagram.png')} alt="instagram"/>
          </li>
        </ul>
        <ul className="ml-auto">
          <li className="d-inline mr-3 cursorPointer">
            <img src={require('../assests/images/appstore.png')} alt="appstore"/>
          </li>

          <li className="d-inline mr-3 cursorPointer">
            <img src={require('../assests/images/googlestore.png')} alt="googlestore"/>
          </li>

          <li className="d-inline cursorPointer">
            <img src={require('../assests/images/microsoftstore.png')} alt="microsoftstore"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
