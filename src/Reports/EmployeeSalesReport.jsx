/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  PDFViewer,
  // PDFDownloadLink
} from '@react-pdf/renderer';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import SalesReport from '../Controllers/SalesReports';
import EmployeeSales from './EmployeeSales';
import Users from '../Controllers/UsersController';
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
      {/* <NavBar goBack pageName="Reporte de ventas" /> */}
      <div style={{ height: '100vh' }}>
        {Report.value && Reporte(Report)}
        {/* <div>
        {value ? (
          <PDFDownloadLink document={<EmployeeSales data={reports} />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        ) : (
          'Cargando'
        )}
      </div> */}
      </div>
    </>
  );
};

export default EmployeeSalesReport;

/* import React, { useState } from 'react';
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
 */
