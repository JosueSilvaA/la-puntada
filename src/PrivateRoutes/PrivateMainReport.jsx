import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainReport from '../Pages/MainReport';

const PrivateMainReport = ({ Auth }) => {
  return (
    <Route
      exact
      path="/mainReport"
      render={() => (Auth ? <MainReport /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateMainReport;
