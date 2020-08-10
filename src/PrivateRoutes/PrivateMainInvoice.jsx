import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainInvoice from '../Pages/MainInvoice';

const PrivateMainInvoice = ({ Auth }) => {
  return (
    <Route
      exact
      path="/mainInvoice"
      render={() => (Auth ? <MainInvoice /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateMainInvoice;
