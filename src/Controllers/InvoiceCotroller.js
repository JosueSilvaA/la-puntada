import axios from 'axios';

class InvoiceController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  saveClientInvoice = async (data) => {
    let res;
    const token = this.getUserLogToken();
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/facturaCliente/registroFacturaCliente`,
        data,
        {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((response) => {
        if (!response.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  saveProviderInvoice = async (data) => {
    let res;
    const token = this.getUserLogToken();
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/facturaProveedor/registroFacturaProveedor`,
        data,
        {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((response) => {
        if (!response.data.Error) {
          res = { err: false, message: response.data.Response };
        } else {
          res = { err: true, message: response.data.Response };
        }
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };

  getInvoicesProv = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/facturaProveedor/obtenerFacturasProveedores', {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  getInvoiceProv = async (idFactura) => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/facturaProveedor/obtenerFacturaProveedor/${idFactura}`, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, item: res.data.Items[0] };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  getInvoicesCli = async () => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/facturaCliente/obtenerFacturasClientes', {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, items: res.data.Items };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  getInvoiceCli = async (idInvoice) => {
    let Res;
    const token = this.getUserLogToken();
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/facturaCliente/obtenerFacturaCliente/${idInvoice}`, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        Res = { err: false, item: res.data.Items[0] };
      })
      .catch((err) => {
        Res = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return Res;
  };

  GetNameProvider = async (idProveedor) => {
    let res;
    const token = this.getUserLogToken();
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/proveedor/${idProveedor}/obtenerProveedor`, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });

    return res;
  };

  GetNameEmployee = async (idEmpleado) => {
    let res;
    const token = this.getUserLogToken();
    await axios
      .get(`https://api-la-puntada.herokuapp.com/api/usuario/${idEmpleado}/obtenerUsuario`, {
        headers: {
          'access-token': token,
        },
      })
      .then((response) => {
        res = { err: false, items: response.data.Items };
      })
      .catch((err) => {
        res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };
      });
    return res;
  };
}

export default InvoiceController;
