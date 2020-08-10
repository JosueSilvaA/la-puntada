import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Catalogue from '../Pages/Catalogue';

const PrivateCatalogue = ({ Auth }) => {
  return <Route render={() => (Auth ? <Catalogue /> : <Redirect to="/login" />)} />;
};

export default PrivateCatalogue;
