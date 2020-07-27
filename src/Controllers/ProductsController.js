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
    let route = '';

    let dataProduct = {};

    if (Selected.selectedType.id === 1) {
      route = 'https://api-la-puntada.herokuapp.com/api/productoTextil/registroProducto';
      dataProduct = {
        nombre: data.nombre,
        color: Selected.selectedColor.name,
        rbaColor: Selected.selectedColor.code,
        proveedor: Selected.selectedProvider.id,
        precio: data.precio,
        tipoTextil: data.tipoTextil,
        descripcion: data.descripcion,
      };
    } else if (Selected.selectedType.id === 2) {
      route = 'https://api-la-puntada.herokuapp.com/api/productoEscolar/registroProducto';

      dataProduct = {
        nombre: data.nombre,
        marca: data.marca,
        color: Selected.selectedColor.name,
        proveedor: Selected.selectedProvider.id,
        precio: data.precio,
        tipoUtil: data.tipoUtil,
        descripcion: data.descripcion,
      };
    } else if (Selected.selectedType.id === 3) {
      route = 'https://api-la-puntada.herokuapp.com/api/productoVariado/registroProducto';
      dataProduct = {
        nombre: data.nombre,
        proveedor: Selected.selectedProvider.id,
        precio: data.precio,
        tipoVariado: data.tipoVariado,
        descripcion: data.descripcion,
      };
    }

    let res;
    await axios
      .post(`${route}`, dataProduct)
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  getProductsLIst = async () => {
    let res;
    await axios
      .get('http://api-la-puntada.herokuapp.com/api/productoGeneral/obtenerProductos')
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  delete = async (Product) => {
    let res;
    let route;
    if (Product.tipoTextil !== undefined) {
      route = `http://api-la-puntada.herokuapp.com/api/productoTextil/${Product._id}/eliminarProductoTextil`;
    } else if (Product.tipoUtil !== undefined) {
      route = `http://api-la-puntada.herokuapp.com/api/productoEscolar/${Product._id}/eliminarProductoEscolar`;
    } else if (Product.tipoVariado) {
      route = `http://api-la-puntada.herokuapp.com/api/productoVariado/${Product._id}/eliminarProductoVariado`;
    }
    await axios
      .put(`${route}`)
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  Edit = async (product) => {
    let res;
    let route;
    if (product.type.escolar) {
      route = `https://api-la-puntada.herokuapp.com/api/productoEscolar/${product.id}/editarProductoEscolar`;
    }

    if (product.type.variado) {
      route = `https://api-la-puntada.herokuapp.com/api/productoVariado/${product.id}/editarProductoVariado`;
    }

    if (product.type.textil) {
      route = `https://api-la-puntada.herokuapp.com/api/productoTextil/${product.id}/editarProductoTextil`;
    }
    await axios
      .put(`${route}`, product.data)
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  GetProductById = async (idProduct) => {
    let res;
    await axios
      .get(
        `http://api-la-puntada.herokuapp.com/api/productoGeneral/obtenerProductoPorId/${idProduct}`
      )
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = {
          err: true,
          message: '¡Oops!, Ocurrió un problema al realizar la conexión.',
          error: err,
        };
      });
    return res;
  };
}

export default Products;
