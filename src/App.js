import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

import Login from './Pages/Login'
import Main from './Pages/Main'
import Inventory from './Pages/Inventory'


function App() {
  return (
    <React.Fragment>
      {/* Configuración de Router */}
    <Router>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/inventory" exact component={Inventory} />

          {/* <Route path="/home" exact component={Home} /> */}
          {/* <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } /> */}

      </Switch>

      <div className="App">
        
      </div>
    </Router>

    </React.Fragment>
  );
}

export default App;