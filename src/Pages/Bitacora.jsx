import React, { useEffect, useState }  from 'react';
import NavBar from '../Components/Navbar';
import Helmet from 'react-helmet';
import BitacoraController from '../Controllers/BitacoraController';
import BitacoraItem from '../Components/BitacoraItem';
import {
  CircularProgress
} from '@material-ui/core';
export default function Bitacora() {

  const [DataBitacora, setInfoBitacora] = useState({ infoBit: [], loading: true, value: false });
  const getBitacora = async () => {
    const bitacora = new BitacoraController();
    const infoBit = await bitacora.getInfoBitacora();
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
    <br/>
    {!DataBitacora.loading ? (
    DataBitacora.infoBit.map((bit) => (
          <BitacoraItem
            key = {bit._id}
            usu= {bit.usuario.usuario}
            fecha={bit.creada}
            categoria={bit.categoria}
            actividad={bit.actividad}
            entidad={bit.entidadAlterada}
            finalidad={bit.finalidad}
          />
          )) ) : (<div className="mx-auto">
          <div className="d-flex mt-5">
            <CircularProgress className="mx-auto" size={60} color="secondary" />
          </div>
          <div className="d-flex">
            <p className="mx-auto text-white">Obteniendo datos...</p>
          </div>
        </div>)
        }
    </>
  );
}
