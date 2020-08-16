import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar';
import { Grid, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'No', label: 'No', minWidth: 170 },
  { id: 'Usuario', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'Fecha',
    label: 'Fecha',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Hora',
    label: 'Hora',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Actividad',
    label: 'Actividad',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Descripcion',
    label: 'Descripcion',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
];

function createData(No, Usuario, Fecha, Hora, Actividad, Descripcion) {
 
  return { No, Usuario, Fecha, Hora, Actividad, Descripcion };
}

const rows = [
  createData('1', 'Silva', '18-08-2020', '06:00 a.m','Registro de factura',''),
  createData('2', 'Josue', '18-08-2020', '06:00 a.m', 'Registro de factura',''),
  createData('3', 'ITa', '18-08-2020', '06:00 a.m', 'Registro de factura',''),
  createData('4', 'Angela', '18-08-2020', '06:00 a.m', 'Registro de factura',''),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <> 
    <NavBar pageName="La Puntada - Bitacora" goBack/>
    <Grid style={{padding:'30px'}}>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
    </Grid>
    </>
  );
}
