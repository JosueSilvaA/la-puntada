import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainInventory from '../Pages/maininventory';

const PrivateMainInventory = ({ Auth }) => {
  return <Route render={() => (Auth ? <MainInventory /> : <Redirect to="/login" />)} />;
};

export default PrivateMainInventory;
