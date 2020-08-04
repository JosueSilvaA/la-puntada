import axios from 'axios';

class InvoiceController {
  saveClientInvoice = async (data) => {
    let res;
    await axios
      .post(`https://api-la-puntada.herokuapp.com/api/facturaCliente/registroFacturaCliente`, data)
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  saveProviderInvoice = async (data) => {
    let res;
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/facturaProveedor/registroFacturaProveedor`,
        data
      )
      .then((response) => {
        res = { err: false, message: response.data.Response };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };
  getInvoicesProv = async () => {
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/facturaProveedor/obtenerFacturasProveedores')
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };
   getInvoicesCli = async () => {
    let Res;
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/facturaCliente/obtenerFacturasClientes')
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };
  GetNameProvider = async (idProveedor) => {
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/proveedor/${idProveedor}/obtenerProveedor`)
      .then((response) => {
        res = { err: false, items: response.data.Items };
        
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    console.log(res);
    return res;
  };
  GetNameEmployee = async (idEmpleado) => {
    let res;
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/${idEmpleado}/obtenerUsuario`)
      .then((response) => {
        res = { err: false, items: response.data.Items };
        
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    console.log(res);
    return res;
  };
}

export default InvoiceController;
