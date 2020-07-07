/* home page */
/* Ejemplo */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <Link to="/saludo">Saludo</Link>
        <Link to="/login">Login</Link>
        <p className="h2 text-danger border border-primary">Pagina Inicio</p>
      </div>
    </>
  );
};

export default Home;
