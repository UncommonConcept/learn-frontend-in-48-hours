import React from 'react';
import { Link } from 'react-router-dom';
import TimeComponent from '../TimeComponent';
import logoReddit from '../assets/logo-reddit.png';

const HeaderMenu = (props) => {
  return (
    <div className='App-Header-Menu container-fluid'>
      <div className='col-md-4 no-padding'>
        <Link to='/'><img src={logoReddit} alt='' /></Link>
      </div>
      <div className='col-md-8 no-padding'>
        <TimeComponent />
      </div>
    </div>
  );
}

export default HeaderMenu;