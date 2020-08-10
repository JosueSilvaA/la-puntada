import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Providers from '../Pages/Providers';

const PrivateProviders = ({ Auth }) => {
  return (
    <Route
      exact
      path="/providers"
      render={() => (Auth ? <Providers /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateProviders;
