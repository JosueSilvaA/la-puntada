import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientInvoice from '../Components/ClientInvoice';

const PrivateClientInvoice = ({ Auth }) => {
  return (
    <Route
      exact
      path="/clientInvoice"
      render={() => (Auth ? <ClientInvoice /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateClientInvoice;
