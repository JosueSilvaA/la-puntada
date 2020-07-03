import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

import Hola from './Components/Hola'
import Home from './Pages/Home'


function App() {
  return (
    <React.Fragment>
      {/* Configuración de Router */}
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/saludo" exact component={ () => <Hola name="mundo" /> } />

      </Switch>

      <div className="App">
        
      </div>
    </Router>

    </React.Fragment>
  );
}

export default App;
