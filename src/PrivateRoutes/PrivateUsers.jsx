import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Users from '../Pages/Users';

const PrivateUsers = ({ Auth, Permission }) => {
  return <Route render={() => (Auth && Permission ? <Users /> : <Redirect to="/login" />)} />;
};

export default PrivateUsers;
