import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import BitacoraListUser from './BitacoraListUser';
import BitacoraController from '../Controllers/BitacoraController';

const UserBitacora = ({ idUser }) => {
  const [DataBitacoraUsuario, setInfoBitacoraUser] = useState({
    infoBitaUsuario: [],
    loading: true,
    value: false,
  });

  const getUserBitacora = async () => {
    // bitacora
    const bitacoraUser = new BitacoraController();
    const infoBitaUsuario = await bitacoraUser.getInfoBitacoraUsuario(idUser);
    //    //bitacora
    
    if (!infoBitaUsuario.err) {
      setInfoBitacoraUser({
        infoBitaUsuario: infoBitaUsuario.items,
        value: true,
        loading: false,
      });
    }
  };

  useEffect(() => {
    getUserBitacora();
  }, []);

  return (
    <>
      {DataBitacoraUsuario.loading && (
        <div className="mx-auto">
          <div className="d-flex mt-5">
            <CircularProgress className="mx-auto" size={60} color="secondary" />
          </div>
          <div className="d-flex">
            <p className="mx-auto text-white">Obteniendo datos...</p>
          </div>
        </div>
      )}

      {!DataBitacoraUsuario.loading &&
        DataBitacoraUsuario.infoBitaUsuario.map((e) => (
          <BitacoraListUser
            fecha={e.creada}
            categoria={e.categoria}
            actividad={e.actividad}
            entidad={e.entidadAlterada}
            finalidad={e.finalidad}
          />
        ))}
    </>
  );
};
export default UserBitacora;
