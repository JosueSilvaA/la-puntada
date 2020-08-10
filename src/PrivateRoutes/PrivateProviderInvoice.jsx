import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProviderInvoice from '../Components/ProviderInvoice';

const PrivateProviderInvoice = ({ Auth }) => {
  return (
    <Route
      exact
      path="/providerInvoice"
      render={() => (Auth ? <ProviderInvoice /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateProviderInvoice;
