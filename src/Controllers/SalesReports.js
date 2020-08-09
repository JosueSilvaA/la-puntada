import axios from 'axios';

class SalesReports {
  EmployeeSalesReport = async (data) => {
    let { date } = data;
    const { id } = data;
    let Res;
    if (date === undefined) {
      date = 'null';
      await axios
        .get(
          `https://api-la-puntada.herokuapp.com/api/reporteVentas/obtenerVentasEmpleado/${id}/${date}`
        )
        .then((res) => {
          Res = {
            err: false,
            items: res.data.Items,
          };
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return Res;
  };
}

export default SalesReports;
