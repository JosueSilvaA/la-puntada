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
import Roles from './Pages/Role';
import ManageRole from './Pages/ManageRole'

function App() {
  return (
    <>
      {/* Configuración de Router */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/users" exact component={Users} />
          <Route path="/roles" exact component={Roles} />
          <Route path="/manage-role" exact component={ManageRole} />

          {/* <Route path="/home" exact component={Home} /> */}
          {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}
        </Switch>

        <div className="App" />
      </Router>
    </>
  );
}

export default App;
