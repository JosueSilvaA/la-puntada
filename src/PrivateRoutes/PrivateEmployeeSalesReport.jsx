import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import EmployeeSalesReport from '../Pages/EmployeeSalesReport';

const PrivateEmployeeSalesReport = ({ Auth }) => {
  return (
    <Route
      exact
      path="/employeeSalesReport"
      render={() => (Auth ? <EmployeeSalesReport /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateEmployeeSalesReport;
