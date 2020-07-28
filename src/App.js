import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import Login from './Pages/Login';
import Main from './Pages/Main';
import Inventory from './Pages/Inventory';
import Users from './Pages/Users';
import Catalogue from './Pages/Catalogue';
import MainInventory from './Pages/maininventory';
import User from './Pages/User';
import Invoices from './Pages/Invoices';

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
            <Route path="/invoices" exact component={Invoices} />
            {/* <Route path="/home" exact component={Home} /> */}
            {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
