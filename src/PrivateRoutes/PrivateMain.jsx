import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../Pages/Main';

const PrivateMain = ({ Auth, Permissions }) => {
  return (
    <Route render={() => (Auth ? <Main Permissions={Permissions} /> : <Redirect to="/login" />)} />
  );
};

export default PrivateMain;
