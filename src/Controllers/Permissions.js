/* eslint-disable no-unused-vars */
class Permissions {
  routesPermissions = (token) => {
    const PermissionsRoutes = {
      users: false,
      editProduct: true,
      mainReport: false,
    };
    const res = { err: false, items: PermissionsRoutes };
    return res;
  };
}

export default Permissions;
