import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MostSellsProducts from '../Reports/MostSellsProducts';

const PrivateMostSellsProducts = ({ Auth, Permission }) => {
  return (
    <Route render={() => (Auth && Permission ? <MostSellsProducts /> : <Redirect to="/login" />)} />
  );
};

export default PrivateMostSellsProducts;
