import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import User from '../Pages/User';

const PrivateUser = ({ Auth }) => {
  return (
    <Route exact path="/user/:idUser" render={() => (Auth ? <User /> : <Redirect to="/login" />)} />
  );
};

export default PrivateUser;
