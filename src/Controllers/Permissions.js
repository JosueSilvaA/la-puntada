import axios from 'axios';

class Permissions {
  routesPermissions = async (token) => {
    let res;
    const PermissionsRoutes = {
      users: false,
      editProduct: true,
      deleteProduc: false,
      newProduct: true,
      mainReport: false,
      MainInventory: true,
      catalogo: true,
      clientInvoice: true,
      providerInvoice: true,
      roles: false,
      manageRole: false,
      invoiceList: true,
      mainInvoice: true,
      employeeSalesReport: false,
      VentasDiarias: true,
      bitacora: false,
      providers: true,
      mostSelledProducts: true,
    };
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/privilegio/privilegiosUsuario', {
        headers: {
          'access-token': token,
        },
      })
      .then((result) => {
        res = { err: false, items: result.data.Items };
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        res = { err: false, items: PermissionsRoutes };
      });
    // const res = { err: false, items: PermissionsRoutes };
    return res;
  };
}

export default Permissions;
