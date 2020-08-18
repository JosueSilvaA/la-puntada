import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainInventory from '../Pages/maininventory';

const PrivateMainInventory = ({ Auth, Permission }) => {
  return (
    <Route render={() => (Auth && Permission ? <MainInventory /> : <Redirect to="/login" />)} />
  );
};

export default PrivateMainInventory;
