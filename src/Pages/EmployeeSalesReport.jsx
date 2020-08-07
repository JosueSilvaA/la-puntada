import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import ReactPDF, { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Grid } from '@material-ui/core';
// import swal from 'sweetalert';
import SearchUser from '../Components/SearchUSer';
import NavBar from '../Components/Navbar';

const EmployeeSalesReport = () => {
  const [Report, setReport] = useState({ value: false, reports: [], user: {} });
  const history = useHistory();

  const selectUser = (user) => {
    setReport((prevState) => {
      return {
        ...prevState,
        user,
      };
    });
  };

  const onClick = () => {
    // eslint-disable-next-line no-underscore-dangle
    history.push(`/employeeSalesReport/${Report.user._id}`);
  };

  return (
    <>
      <NavBar goBack pageName="Reporte de ventas" />
      <SearchUser selectUser={selectUser} />
      <Grid container>
        <Button onClick={onClick} color="secondary" variant="contained" className="mx-auto mt-4">
          Mostrar Reporte
        </Button>
      </Grid>
    </>
  );
};

export default EmployeeSalesReport;
