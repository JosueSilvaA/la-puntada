/* home page */
/* Ejemplo */
import React from 'react'

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Link to="/saludo">Saludo</Link>
                <p className="h2 text-danger border border-primary"> 
                   Pagina Inicio
                </p>
            
            </div>
        </React.Fragment>
    )
}

export default Home;