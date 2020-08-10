import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../Pages/Main';

const PrivateMain = ({ Auth }) => {
  return <Route render={() => (Auth ? <Main /> : <Redirect to="/login" />)} />;
};

export default PrivateMain;
