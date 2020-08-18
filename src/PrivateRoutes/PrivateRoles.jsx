import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Roles from '../Pages/Role';

const PrivateRoles = ({ Auth, Permission }) => {
  return <Route render={() => (Auth && Permission ? <Roles /> : <Redirect to="/login" />)} />;
};

export default PrivateRoles;
