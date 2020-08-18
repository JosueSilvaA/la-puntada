import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProviderInvoice from '../Components/ProviderInvoice';

const PrivateProviderInvoice = ({ Auth, Permission }) => {
  return (
    <Route
      exact
      path="/providerInvoice"
      render={() => (Auth && Permission ? <ProviderInvoice /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateProviderInvoice;
