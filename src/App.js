import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

import Hola from './Components/Hola'
import Home from './Pages/Home'
import Login from './Pages/Login'


function App() {
  return (
    <React.Fragment>
      {/* Configuración de Router */}
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } />
          <Route path="/login" exact component={Login} />

      </Switch>

      <div className="App">
        
      </div>
    </Router>

    </React.Fragment>
  );
}

export default App;
