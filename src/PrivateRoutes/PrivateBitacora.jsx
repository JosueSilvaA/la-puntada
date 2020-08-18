import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Bitacora from '../Pages/Bitacora';

const PrivateBitacora = ({ Auth, Permission }) => {
  return <Route render={() => (Auth && Permission ? <Bitacora /> : <Redirect to="/login" />)} />;
};

export default PrivateBitacora;
