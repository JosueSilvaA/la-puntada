import axios from 'axios';

class SalesReports {
  EmployeeSalesReport = async (id) => {
    let Res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/facturaCliente/obtenerVentasEmpleado/${id}`)
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        console.log(err);
      });
    return Res;
  };
}

export default SalesReports;
