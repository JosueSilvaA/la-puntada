import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import InvoiceList from '../Pages/invoiceList';

const PrivateInvoiceList = ({ Auth, Permission }) => {
  return (
    <Route
      exact
      path="/invoiceList"
      render={() => (Auth && Permission ? <InvoiceList /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateInvoiceList;
