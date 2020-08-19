import axios from 'axios';

class CatalogueController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  getProductsSchool = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(
        "https://api-la-puntada.herokuapp.com/api/productoEscolar/obtenerProductosEscolares", {
          headers: {
            'access-token': token,
          },
        }
      )
      .then(res => {
        Res = res.data.Items;
      })
      .catch(err => {
        Res = {
          err: true,
          message: "¡Oops!, Ocurrió un problema al realizar la conexión."
        };
      });
    return Res;
  };

  getProductsTextil = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(
        "https://api-la-puntada.herokuapp.com/api/productoTextil/obtenerProductosTextiles", {
          headers: {
            'access-token': token,
          },
        }
      )
      .then(res => {
        Res = res.data.Items;
      })
      .catch(err => {
        Res = {
          err: true,
          message: "¡Oops!, Ocurrió un problema al realizar la conexión."
        };
      });
    return Res;
  };

  getProductsVaried = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(
        "https://api-la-puntada.herokuapp.com/api/productoVariado/obtenerProductosVariados", {
          headers: {
            'access-token': token,
          },
        }
      )
      .then(res => {
        Res = res.data.Items;
      })
      .catch(err => {
        Res = {
          err: true,
          message: "¡Oops!, Ocurrió un problema al realizar la conexión."
        };
      });
    return Res;
  };
}

export default CatalogueController;
