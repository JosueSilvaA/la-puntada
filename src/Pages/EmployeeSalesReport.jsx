import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import ReactPDF, { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Grid, TextField } from '@material-ui/core';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import SearchUser from '../Components/SearchUSer';
import NavBar from '../Components/Navbar';

const EmployeeSalesReport = () => {
  const [Report, setReport] = useState({ value: false, user: {} });
  const [Filter, setFilter] = useState(false);
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const selectUser = (user) => {
    setReport({ value: true, user });
  };

  const onClick = () => {
    if (!Report.value) {
      swal('Error', 'Debes seleccionar un empleado!.', 'warning');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      history.push(`/employeeSalesReport/${Report.user._id}`);
    }
  };

  const onClickFilter = () => {
    setFilter(true);
  };

  const onSubmitFilter = (data) => {
    if (data.fechaInicial === '' || data.fechaFinal === '') {
      swal({
        title: 'No has seleccionado las fechas!',
        text: 'Deseas ver el reporte de ventas general para este usuario.',
        icon: 'warning',
        // buttons: true,
        buttons: ['Cancelar', 'Continuar'],
        dangerMode: true,
      }).then((result) => {
        if (result) {
          onClick();
        }
      });
    } else if (!Report.value) {
      swal('Error', 'Debes seleccionar un empleado!.', 'warning');
    } else {
      const date = moment(data.fechaFinal).isAfter(data.fechaInicial);
      if (!date) {
        swal('Error', 'Debes seleccionar un parametro de fechas correcto', 'error');
      } else {
        history.push(
          `/employeeSalesReport/${Report.user._id}/${data.fechaInicial}_${data.fechaFinal}`
        );
      }
    }
  };

  return (
    <>
      <NavBar goBack pageName="Reporte de ventas" />
      <SearchUser selectUser={selectUser} />
      {Filter && (
        <Grid container className="mt-4">
          <form onSubmit={handleSubmit(onSubmitFilter)} style={{ width: '100%' }}>
            <Grid item lg={2} md={3} sm={4} xs={6} className="mx-auto">
              <span style={{ color: '#007bff', fontSize: '12px' }}>Fecha Inicial</span>
              <TextField
                style={{ width: '100%' }}
                id="standard-basic"
                // label="Fecha de Factura"
                type="date"
                color="primary"
                name="fechaInicial"
                autoComplete="off"
                inputRef={register()}
              />
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="mx-auto">
              <span style={{ color: '#007bff', fontSize: '12px' }}>Fecha Final</span>
              <TextField
                style={{ width: '100%' }}
                id="standard-basic"
                // label="Fecha de Factura"
                type="date"
                color="primary"
                name="fechaFinal"
                autoComplete="off"
                inputRef={register()}
              />
            </Grid>
            <Grid item xl={13} lg={12} md={4} className="d-flex mx-auto mb-3 mt-4">
              <Button type="submit" variant="contained" color="primary" className="mx-auto">
                Mostrar Reporte
              </Button>
            </Grid>
          </form>
        </Grid>
      )}

      {!Filter && (
        <Grid container className="mt-4">
          <Button
            onClick={onClickFilter}
            color="primary"
            variant="contained"
            className="mx-auto mt-4"
          >
            Filtrar por fechas
          </Button>
          <Button onClick={onClick} color="primary" variant="contained" className="mx-auto mt-4">
            Reporte General
          </Button>
        </Grid>
      )}
    </>
  );
};

export default EmployeeSalesReport;
