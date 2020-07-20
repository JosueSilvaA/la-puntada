import axios from 'axios';

class Products {
  getPproviders = async () => {
    let Res;
    await axios
      .get('http://api-la-puntada.herokuapp.com/api/proveedor/obtenerProveedores')
      .then((res) => {
        Res = res.data.Items;
      })
      .catch((err) => {
        Res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return Res;
  };

  newProducto = async (Selected, data) => {
    const dataProduct = {
      nombre: data.nombre,
      marca: data.marca,
      color: Selected.selectedColor.name,
      proveedor: Selected.selectedProvider.id,
      precio: data.precio,
      tipoUtil: data.tipoUtil,
      descripcion: data.descripcion,
    };
    let res;
    await axios
      .post(
        'https://api-la-puntada.herokuapp.com/api/productoEscolar/registroProducto',
        dataProduct
      )
      .then((response) => {
        res = response.data;
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  getProductsLIst = async () => {
    let res;
    await axios
      .get('http://api-la-puntada.herokuapp.com/api/productoEscolar/obtenerProductosEscolares')
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };
}

export default Products;
