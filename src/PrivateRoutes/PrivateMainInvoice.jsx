import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainInvoice from '../Pages/MainInvoice';

const PrivateMainInvoice = ({ Auth, Permission }) => {
  return (
    <Route
      exact
      path="/mainInvoice"
      render={() => (Auth && Permission ? <MainInvoice /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateMainInvoice;
