import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from 'react-router-dom';

import Login from './Pages/Login';
import Main from './Pages/Main';
import PrivateMain from './PrivateRoutes/PrivateMain';
import Inventory from './Pages/Inventory';
import PrivateMainInventory from './PrivateRoutes/PrivateInventory';
import PrivateCatalogue from './PrivateRoutes/PrivateCatalogue';
import PrivateUsers from './PrivateRoutes/PrivateUsers';
import PrivateUser from './PrivateRoutes/PrivateUser';
import PrivateMainInvoice from './PrivateRoutes/PrivateMainInvoice';
import PrivateMainReport from './PrivateRoutes/PrivateMainReport';
import PrivateClientInvoice from './PrivateRoutes/PrivateClientInvoice';
import PrivateProviderInvoice from './PrivateRoutes/PrivateProviderInvoice';
import PrivateInvoiceList from './PrivateRoutes/PrivateInvoiceList';
import PrivateEmployeeSalesReport from './PrivateRoutes/PrivateEmployeeSalesReport';
import PrivateProviders from './PrivateRoutes/PrivateProviders';
import Users from './Pages/Users';
import Roles from './Pages/Role';
import ManageRole from './Pages/ManageRole';
import Catalogue from './Pages/Catalogue';
import MainInventory from './Pages/maininventory';
import User from './Pages/User';
import ProviderInvoice from './Components/ProviderInvoice';
import ClientInvoice from './Components/ClientInvoice';
import invoiceList from './Pages/invoiceList';
import MainReport from './Pages/MainReport';
import MainInvoice from './Pages/MainInvoice';
import EmployeeSalesReport from './Pages/EmployeeSalesReport';
import EmployeeSalesReportId from './Reports/EmployeeSalesReport';
import Reporte from './Pages/ReporteVentasDiarias';
import Providers from './Pages/Providers';

const logOut = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('userToken');
  // eslint-disable-next-line no-undef
  sessionStorage.removeItem('userToken');
  return <Redirect to="/login" />;
};

function App() {
  const [RenderOption, setRenderOption] = useState(false);
  const [Auth, setAuth] = useState(false);

  const viewToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }

    if (token !== null) {
      setAuth(true);
    }
    setRenderOption(true);
  };

  const changeAuth = () => {
    setAuth(true);
  };

  const changeAuthOut = () => {
    setAuth(false);
  };

  useEffect(() => {
    viewToken();
  }, []);

  return (
    <>
      {/* Configuración de Router */}
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={() => <Login changeAuth={changeAuth} />} />
            <Route path="/login" exact component={() => <Login changeAuth={changeAuth} />} />
            <PrivateMain exact path="/main" Auth={Auth} />
            <PrivateMainInventory exact path="/MainInventory" Auth={Auth} />
            <Route path="/inventory/:action" exact component={Inventory} />
            <Route path="/inventory/:action/:idProduct" exact component={Inventory} />
            <PrivateCatalogue exact path="/catalogo" Auth={Auth} />
            <PrivateUsers exact path="/users" Auth={Auth} />
            {/* <PrivateUser exact path="/user/:idUser" Auth={Auth} /> */}
            <Route path="/user/:idUser" exact component={User} />
            <PrivateClientInvoice exact path="/clientInvoice" Auth={Auth} />
            <PrivateProviderInvoice exact path="/providerInvoice" Auth={Auth} />
            <Route path="/roles" exact component={Roles} />
            <Route path="/manage-role" exact component={ManageRole} />
            <PrivateInvoiceList exact path="/invoiceList" Auth={Auth} />
            <PrivateMainReport exact path="/mainReport" Auth={Auth} />
            <PrivateMainInvoice exact path="/mainInvoice" Auth={Auth} />
            <PrivateEmployeeSalesReport exact path="/employeeSalesReport" Auth={Auth} />
            <Route path="/employeeSalesReport/:idUser" exact component={EmployeeSalesReportId} />
            <Route path="/VentasDiarias" exact component={Reporte} />
            <Route path="/logout" exact component={logOut} />
            {/* <Route path="/home" exact component={Home} /> */}
            {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
            <PrivateProviders exact path="/providers" Auth={Auth} />
            <Route
              path="/employeeSalesReport/:idUser/:date"
              exact
              component={EmployeeSalesReportId}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
