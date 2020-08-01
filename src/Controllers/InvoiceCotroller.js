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
}

export default InvoiceController;
