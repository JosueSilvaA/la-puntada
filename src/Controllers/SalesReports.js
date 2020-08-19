import axios from 'axios';

class SalesReports {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  EmployeeSalesReport = async (data) => {
    const token = this.getUserLogToken();
    let { date } = data;
    const { id } = data;
    let Res;
    if (date === undefined) {
      date = 'null';
    }
    await axios
      .get(
        `https://api-la-puntada.herokuapp.com/api/reporteVentas/obtenerVentasEmpleado/${id}/${date}`, {
          headers: {
            'access-token': token,
          },
        }
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


  // Obtener los productos mas vendidos de mayor a menor

  mostSellsProducts = async () =>{
    const token = this.getUserLogToken();
    let Res;
    await axios
      .get(
        `https://api-la-puntada.herokuapp.com/api/reporteVentas/productoMasVendido`, {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((res) => {
        Res = { err:res.data.Error,data:res.data.Items}
      })
      .catch((err) => {
        console.log(err);
        Res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return Res;
  }
}



export default SalesReports;
