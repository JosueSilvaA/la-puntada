import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Users from '../Pages/Users';

const PrivateUsers = ({ Auth }) => {
  return <Route render={() => (Auth ? <Users /> : <Redirect to="/login" />)} />;
};

export default PrivateUsers;
