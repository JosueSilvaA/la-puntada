import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import SearchUser from '../Components/SearchUSer';

const EmployeeSalesReport = () => {
  const [ImgReport, setImgReport] = useState('k');
  const [UserSelected, setUserSelected] = useState({ value: false, user: {} });

  const captureDiv = () => {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      const imge = canvas.toDataURL('image/jpeg', 0.9);
      setImgReport(imge);
      console.log(imge);
    });
  };

  const selectUser = (user) => {
    setUserSelected({ value: true, user });
    console.log(user._id);
  };

  return (
    <>
      <h2>employee sales Report</h2>
      <SearchUser selectUser={selectUser} />
      <Grid id="capture" container alignItems="center" className="border border-danger">
        <Grid item xl={12}>
          <Grid item lg={5} className="bg-dark">
            <h1>hola</h1>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} className="mx-auto">
          <TableContainer aria-label="customized table">
            <TableHead>
              <TableRow className="bg-secondary">
                <TableCell>Fecha</TableCell>
                <TableCell>Empleado</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>hjkalhf adkjl</TableCell>
                <TableCell>hjkalhf adkjl</TableCell>
                <TableCell>hjkalhf adkjl</TableCell>
                <TableCell>hjkalhf adkjl</TableCell>
                <TableCell>hjkalhf adkjl</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Grid>
      </Grid>
      <Button color="secondary" onClick={captureDiv}>
        IMG
      </Button>
      <a href={ImgReport} download="my-file.jpeg">
        Download
      </a>
    </>
  );
};

export default EmployeeSalesReport;
