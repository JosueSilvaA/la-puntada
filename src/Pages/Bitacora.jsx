import React, { useEffect, useState }  from 'react';
import NavBar from '../Components/Navbar';
import Helmet from 'react-helmet';
import BitacoraController from '../Controllers/BitacoraController';
import BitacoraList from '../Components/BitacoraItem';
export default function Bitacora() {

  const [DataBitacora, setInfoBitacora] = useState({ infoBit: [], loading: true, value: false });
  const getBitacora = async () => {
    const bitacora = new BitacoraController();
    const infoBit = await bitacora.getInfoBitacora();
    console.log(infoBit);
    if (!infoBit.err) {
      setInfoBitacora({
        infoBit: infoBit.items,
        value: true,
        loading: false,
      });
    }
   };
   useEffect(() => {
    getBitacora();
  }, []);
  return (
    <>
    <Helmet bodyAttributes={{ style: 'background-color : #3b6978' }} />
    <NavBar pageName="La Puntada - Bitacora" goBack />
    {DataBitacora.infoBit.map((bit) => (
          <BitacoraList
            usu= {bit.usuario.usuario}
            fecha={bit.creada}
            categoria={bit.categoria}
            actividad={bit.actividad}
            entidad={bit.entidadAlterada}
            finalidad={bit.finalidad}
          />
          ))} 
    
    </>
  );
}
