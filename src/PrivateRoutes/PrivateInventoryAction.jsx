import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Inventory from '../Pages/Inventory';

const PrivateInventoryAction = ({ Auth }) => {
  return <Route render={() => (Auth ? <Inventory /> : <Redirect to="/login" />)} />;
};

export default PrivateInventoryAction;
