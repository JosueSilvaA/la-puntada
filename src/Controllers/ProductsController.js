import axios from 'axios';

class Products {
  getPproviders = async () => {
    let Res;
    await axios
      .get('http://api-la-puntada.herokuapp.com/api/proveedor/obtenerProveedores')
      .then((res) => {
        Res = res.data.Items;
        console.log(Res)      
      })
      .catch((err) => {
        Res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };      
      });
    return Res;
  };
}

export default Products;
