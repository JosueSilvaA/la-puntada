import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Providers from '../Pages/Providers';

const PrivateProviders = ({ Auth, Permission }) => {
  return (
    <Route
      exact
      path="/providers"
      render={() => (Auth && Permission ? <Providers /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateProviders;
