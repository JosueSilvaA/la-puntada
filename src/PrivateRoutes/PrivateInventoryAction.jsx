import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Inventory from '../Pages/Inventory';

const PrivateInventoryAction = ({ Auth, Permission }) => {
  return (
    <Route
      exact
      path="/inventory/:action"
      render={() => (Auth && Permission ? <Inventory /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateInventoryAction;
