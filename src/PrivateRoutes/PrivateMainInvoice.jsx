import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainInvoice from '../Pages/MainInvoice';

const PrivateMainInvoice = ({ Auth, Permission, SecondPermission }) => {
  return (
    <Route
      exact
      path="/mainInvoice"
      render={() =>
        (Auth && Permission) || (Auth && SecondPermission) ? (
          <MainInvoice />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateMainInvoice;
