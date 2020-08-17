class Permissions {
  routesPermissions = (token) => {
    let res;
    const PermissionsRoutes = {
      users: false,
      editProduct: true,
      mainReport: false,
    };
    res = { err: false, items: PermissionsRoutes };
    return res;
  };
}

export default Permissions;
