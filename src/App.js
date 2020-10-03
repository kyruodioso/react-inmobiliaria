import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'

import Home from './components/Home'
import Emprendimientos from './components/Emprendimientos'
import Servicios from './components/Servicios'
import Propiedades from './components/Propiedades'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros'

function App() {
  return (
    <div>
      <Router>
        <div className="header">
        <ul className="nav justify-content-center">
  <li className="nav-item btn-warning">
    <Link to="/" className="nav-link h5">Home</Link>
  </li>
  <li className="nav-item btn-warning">
    <Link to="/emprendimientos" className="nav-link  h5">Emprendimientos</Link>
  </li>
  <li className="nav-item btn-warning">
    <Link to="/propiedades" className="nav-link h5">Propiedades</Link>
  </li>
  <li className="nav-item btn-warning">
    <Link to="/servicios" className="nav-link h5">Servicios</Link>
  </li>
  <li className="nav-item btn-warning">
    <Link to="/nosotros" className="nav-link h5">Nosotrxs</Link>
  </li>
  <li className="nav-item btn-warning">
    <NavLink to="/contacto" className="nav-link h5" activeClassName="active">Contacto</NavLink>
  </li>
</ul>
        </div>
        <Switch>
<Route path="/emprendimientos">
   <Emprendimientos />
</Route>
<Route path="/servicios">
  <Servicios />
</Route>
<Route path="/propiedades">
  <Propiedades />
</Route>
<Route path="/contacto">
  <Contacto />
</Route>
<Route path="/nosotros">
  <Nosotros />
</Route>
<Route path="/" exact>
<Home />
</Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
