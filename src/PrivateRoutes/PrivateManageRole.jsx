import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ManageRole from '../Pages/ManageRole';

const PrivateManageRole = ({ Auth, Permission }) => {
  return <Route render={() => (Auth && Permission ? <ManageRole /> : <Redirect to="/login" />)} />;
};

export default PrivateManageRole;
