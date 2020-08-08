import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from 'react-router-dom';

import Login from './Pages/Login';
import Main from './Pages/Main';
import Inventory from './Pages/Inventory';
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
  return (
    <>
      {/* Configuración de Router */}
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/main" exact component={Main} />
            <Route path="/inventory" exact component={Inventory} />
            <Route path="/inventory/:action" exact component={Inventory} />
            <Route path="/inventory/:action/:idProduct" exact component={Inventory} />
            <Route path="/catalogo" exact component={Catalogue} />;
            <Route path="/users" exact component={Users} />
            <Route path="/user/:idUser" exact component={User} />
            <Route path="/MainInventory" exact component={MainInventory} />
            <Route path="/providerInvoice" exact component={ProviderInvoice} />
            <Route path="/clientInvoice" exact component={ClientInvoice} />
            <Route path="/roles" exact component={Roles} />
            <Route path="/manage-role" exact component={ManageRole} />
            <Route path="/invoiceList" exact component={invoiceList} />
            <Route path="/MainReport" exact component={MainReport} />
            <Route path="/MainInvoice" exact component={MainInvoice} />
            <Route path="/employeeSalesReport" exact component={EmployeeSalesReport} />
            <Route path="/employeeSalesReport/:idUser" exact component={EmployeeSalesReportId} />
            <Route path="/VentasDiarias" exact component={Reporte} />
            {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
            <Route path="/invoiceList" exact component={invoiceList} />
            <Route path="/MainReport" exact component={MainReport} />
            <Route path="/MainInvoice" exact component={MainInvoice} />
            <Route path="/logout" exact component={logOut} />
            {/* <Route path="/home" exact component={Home} /> */}
            {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
            <Route path="/providers" exact component={Providers} />
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
