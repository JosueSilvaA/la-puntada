/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  PDFViewer,
  PDFDownloadLink,
  // PDFDownloadLink
} from '@react-pdf/renderer';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Hidden, Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import SalesReport from '../Controllers/SalesReports';
import EmployeeSales from './EmployeeSales';
import Users from '../Controllers/UsersController';
import NavBar from '../Components/Navbar';
import Permissions from '../Controllers/Permissions';

// import NavBar from '../Components/Navbar';

const Reporte = (data) => (
  <PDFViewer style={{ width: '100%', height: '100%' }}>
    <EmployeeSales data={data} />
  </PDFViewer>
);

const dateFormat = (data) => {
  const tempArray = data.split('T');
  const date = moment(tempArray[0]).format('L');
  return date;
};

const EmployeeSalesReport = (props) => {
  const [Report, setReport] = useState({ value: false, reports: [], user: {} });
  const history = useHistory();
  const dateNow = moment().format('LLL');

  const getEmployeeReport = async (id) => {
    const { params } = props.match;
    const reports = new SalesReport();
    const result = await reports.EmployeeSalesReport({ id, date: params.date });
    if (!result.err) {
      if (result.items.length === 0) {
        swal('Aviso', 'El usuaio no tiene ninguna venta registrada', 'error', {
          timer: 2000,
        }).then(() => {
          history.replace('/employeeSalesReport');
        });
      }
      let totalAmount = 0;
      let totalISV = 0;
      result.items.forEach((element, index) => {
        const date = dateFormat(element.fechaFactura);
        result.items[index].fechaFactura = date;
        totalAmount += result.items[index].total;
        totalISV += result.items[index].isv;
      });

      setReport((prevState) => {
        return {
          ...prevState,
          value: true,
          reports: result.items,
          totalAmount,
          totalISV,
        };
      });
    } else {
      swal('Error', 'No se ha podido completar la operación. Intentalo más tarde.', 'error');
    }
  };

  const getUser = async (id) => {
    const user = new Users();
    const result = await user.GetInfoUser(id);
    if (!result.err) {
      setReport((prevState) => {
        return {
          ...prevState,
          user: result.item,
        };
      });
      getEmployeeReport(id);
    }
  };

  const viewParams = () => {
    // eslint-disable-next-line react/prop-types
    if (props.match.params.idUser !== undefined) {
      // eslint-disable-next-line react/prop-types
      getUser(props.match.params.idUser);
    }
  };

  const viewToken = async () => {
    const UserPermissions = new Permissions();
    const resultToken = await UserPermissions.ViewUserToken();
    if (!resultToken) {
      UserPermissions.RedirectUser();
    } else {
      viewParams();
    }
  };
  useEffect(() => {
    viewToken();
  }, []);

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #3d3d3d' }} />
      <NavBar goBack pageName="Ventas por usuario" />
      <Hidden only={['xs']}>
        <div style={{ height: '89.1vh' }}>{Report.value && Reporte(Report)}</div>
      </Hidden>
      <Hidden only={['xl', 'lg', 'md']}>
        {Report.value && (
          <Grid container className="mt-5">
            <Grid
              item
              xs={8}
              sm={6}
              className="btn btn-block btn-success text-danger border border-danger mx-auto"
            >
              <PDFDownloadLink
                style={{ textDecoration: 'none', color: 'white' }}
                document={<EmployeeSales data={Report} />}
                fileName={`${dateNow}.pdf`}
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Descargar Reporte'
                }
              </PDFDownloadLink>
            </Grid>
          </Grid>
        )}
      </Hidden>
      {/* <div>
        {value ? (
          <PDFDownloadLink document={<EmployeeSales data={reports} />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        ) : (
          'Cargando'
        )}
      </div> */}
    </>
  );
};

export default EmployeeSalesReport;

