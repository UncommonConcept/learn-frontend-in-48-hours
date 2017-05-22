import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="MainLayout">
        <Header {...matchProps} />
          <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};

export default DefaultLayout;