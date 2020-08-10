import axios from 'axios';

class SalesReports {
  EmployeeSalesReport = async (data) => {
    let { date } = data;
    const { id } = data;
    let Res;
    if (date === undefined) {
      date = 'null';
    }
    await axios
      .get(
        `https://api-la-puntada.herokuapp.com/api/reporteVentas/obtenerVentasEmpleado/${id}/${date}`
      )
      .then((res) => {
        if (res.data.Items === undefined) {
          Res = {
            err: true,
            message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
          };
        } else {
          Res = {
            err: false,
            items: res.data.Items,
          };
        }
      })
      .catch((err) => {
        console.log(err);
        Res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return Res;
  };
}

export default SalesReports;
