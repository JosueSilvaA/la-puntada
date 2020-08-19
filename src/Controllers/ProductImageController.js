import axios from 'axios';

class ProductImageController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  changeEscolarProducImage = async (idProduct, image) => {
    let res;
    const token = this.getUserLogToken();
    const data = new FormData();
    data.append('image', image);
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/productoEscolar/cambiarImagenEscolar/${idProduct}`,
        data,
        {
          headers: {
            'access-token': token,
            'name-file': idProduct,
          },
        }
      )
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return res;
  };

  changeTextilProducImage = async (idProduct, image) => {
    let res;
    const token = this.getUserLogToken();
    const data = new FormData();
    data.append('image', image);
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/productoTextil/cambiarImagenTextil/${idProduct}`,
        data,
        {
          headers: {
            'access-token': token,
            'name-file': idProduct,
          },
        }
      )
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return res;
  };

  changeVariedProducImage = async (idProduct, image) => {
    let res;
    const token = this.getUserLogToken();
    const data = new FormData();
    data.append('image', image);
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/productoVariado/cambiarImagenVariado/${idProduct}`,
        data,
        {
          headers: {
            'access-token': token,
            'name-file': idProduct,
          },
        }
      )
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
        };
      });
    return res;
  };

  viewProductType = async (data) => {
    let result;
    if (data.School) {
      result = await this.changeEscolarProducImage(data.idProduct, data.image);
    } else if (data.Textil) {
      result = await this.changeTextilProducImage(data.idProduct, data.image);
    } else if (data.Varied) {
      result = await this.changeVariedProducImage(data.idProduct, data.image);
    }
    return result;
  };
}
export default ProductImageController;
