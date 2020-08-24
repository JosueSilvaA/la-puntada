/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  // Link
} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import PermissionsCtl from './Controllers/Permissions';

import Login from './Pages/Login';
import PrivateMain from './PrivateRoutes/PrivateMain';
import Inventory from './Pages/Inventory';
import PrivateMainInventory from './PrivateRoutes/PrivateInventory';
import PrivateCatalogue from './PrivateRoutes/PrivateCatalogue';
import PrivateUsers from './PrivateRoutes/PrivateUsers';
// import PrivateUser from './PrivateRoutes/PrivateUser';
import PrivateMainInvoice from './PrivateRoutes/PrivateMainInvoice';
import PrivateMainReport from './PrivateRoutes/PrivateMainReport';
import PrivateClientInvoice from './PrivateRoutes/PrivateClientInvoice';
import PrivateProviderInvoice from './PrivateRoutes/PrivateProviderInvoice';
import PrivateInvoiceList from './PrivateRoutes/PrivateInvoiceList';
import PrivateEmployeeSalesReport from './PrivateRoutes/PrivateEmployeeSalesReport';
import PrivateProviders from './PrivateRoutes/PrivateProviders';
import User from './Pages/User';
import EmployeeSalesReportId from './Reports/EmployeeSalesReport';
import Reporte from './Pages/ReporteVentasDiarias';
// import PrivateRoles from './PrivateRoutes/PrivateRoles';
// import PrivateManageRole from './PrivateRoutes/PrivateManageRole';
import PrivateBitacora from './PrivateRoutes/PrivateBitacora';
import PrivateMostSellsProducts from './PrivateRoutes/PrivateMostSellsProducts';
import Roles from './Pages/Role';
import ManageRole from './Pages/ManageRole';
const logOut = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('userToken');
  // eslint-disable-next-line no-undef
  sessionStorage.removeItem('userToken');
  window.location.replace('/login');
  // return <Redirect to="/login" />;
};

function App() {
  const [Auth, setAuth] = useState(false);
  // routes permisions
  // eslint-disable-next-line no-unused-vars
  const [Permission, setPermission] = useState({});
  const [RenderOption, setRenderOption] = useState(false);

  const routesConfig = async () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }
    const routesControl = new PermissionsCtl();
    // config permission
    if (token !== null) {
      const result = await routesControl.routesPermissions(token);
      if (!result.err) {
        setPermission(result.items);
      }
    }
  };

  const viewToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }

    if (token !== null) {
      setAuth(true);
      routesConfig();
    }
    setRenderOption(true);
  };

  const changeAuth = () => {
    setAuth(true);
    routesConfig();
  };

  /*   const changeAuthOut = () => {
    setAuth(false);
  }; */

  useEffect(() => {
    viewToken();
  }, []);

  return (
    <>
      {/* Configuración de Router */}
      <Router>
        <div className="App">
          {!RenderOption && (
            <>
              <div>
                <div className="d-flex mt-5">
                  <CircularProgress className="mx-auto" size={80} color="secondary" />
                </div>
                <div className="d-flex">
                  <p className="mx-auto">Verificando acceso...</p>
                </div>
              </div>
            </>
          )}
          {RenderOption && (
            <Switch>
              <Route path="/" exact component={() => <Login changeAuth={changeAuth} />} />
              <Route path="/login" exact component={() => <Login changeAuth={changeAuth} />} />
              <PrivateMain exact path="/main" Auth={Auth} Permissions={Permission} />
              <PrivateMainInventory
                exact
                path="/mainInventory"
                Auth={Auth}
                Permission={Permission.mainInventory}
              />
              {/* <PrivateInventoryAction
                exact
                path="/inventory/:action"
                Auth={Auth}
                Permission={Permission.deleteProduc}
              /> */}
              <Route path="/inventory/:action" exact component={Inventory} />
              <Route path="/inventory/:action/:idProduct" exact component={Inventory} />
              <PrivateCatalogue
                exact
                path="/catalogo"
                Auth={Auth}
                Permission={Permission.catalogo}
              />
              <PrivateUsers exact path="/users" Auth={Auth} Permission={Permission.users} />
              {/* <PrivateUser exact path="/user/:idUser" Auth={Auth} /> */}
              <Route path="/user/:idUser" exact component={User} />
              <PrivateClientInvoice
                exact
                path="/clientInvoice"
                Auth={Auth}
                Permission={Permission.clientInvoice}
              />
              <PrivateProviderInvoice
                exact
                path="/providerInvoice"
                Auth={Auth}
                Permission={Permission.providerInvoice}
              />
              {/*   
              <PrivateRoles exact path="/roles" Auth={Auth} Permission={Permission.roles} />
              <PrivateManageRole
                exact
                path="/manage-role"
                Auth={Auth}
                Permission={Permission.manageRole}
              /> */}
              <Route path="/roles" exact component={Roles} />
              <Route path="/manage-role" exact component={ManageRole} />
              <PrivateInvoiceList
                exact
                path="/invoiceList"
                Auth={Auth}
                Permission={Permission.invoiceList}
              />
              <PrivateMainReport
                exact
                path="/mainReport"
                Auth={Auth}
                Permission={Permission.mainReport}
              />
              <PrivateMainInvoice
                exact
                path="/mainInvoice"
                Auth={Auth}
                Permission={Permission.mainInvoice}
                SecondPermission={Permission.clientInvoice}
              />
              <PrivateEmployeeSalesReport
                exact
                path="/employeeSalesReport"
                Auth={Auth}
                Permission={Permission.employeeSalesReport}
              />
              <Route path="/employeeSalesReport/:idUser" exact component={EmployeeSalesReportId} />
              <Route path="/VentasDiarias" exact component={Reporte} />
              <Route path="/logout" exact component={logOut} />
              <PrivateBitacora
                exact
                path="/bitacora"
                Auth={Auth}
                Permission={Permission.bitacora}
              />
              {/* <Route path="/home" exact component={Home} /> */}
              {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
              <PrivateProviders
                exact
                path="/providers"
                Auth={Auth}
                Permission={Permission.providers}
              />
              <Route
                path="/employeeSalesReport/:idUser/:date"
                exact
                component={EmployeeSalesReportId}
              />
              <PrivateMostSellsProducts
                exact
                path="/mostSelledProducts"
                Auth={Auth}
                Permission={Permission.mostSelledProducts}
              />
              {/* <Route exact path="/test" component={ChangePassword} /> */}
            </Switch>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
