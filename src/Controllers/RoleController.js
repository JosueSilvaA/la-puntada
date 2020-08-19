import axios from 'axios';

class RoleController {
  getUserLogToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = sessionStorage.getItem('userToken');
    }
    return token;
  };

  async getRoles() {
    this.datosRespuesta = '';
    const token = this.getUserLogToken();
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/rol/obtenerRoles', {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }

  async getPrivilegiosPorRol(idRol) {
    const token = this.getUserLogToken();
    this.datosRespuesta = '';
    await axios
      .post(`https://api-la-puntada.herokuapp.com/api/rol/${idRol}/obtenerPrivilegios`, {
        headers: {
          'access-token': token,
        },
      })
      .then((res) => {
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }

  async getPrivilegiosNotInRol(nombreRol) {
    const token = this.getUserLogToken();
    this.datosRespuesta = '';
    this.data = { rol: nombreRol };
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/privilegio/obtenerPrivilegiosNotInRol`,
        this.data, {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }

  async addPrivToRole(idRol, idPrivilegio) {
    const token = this.getUserLogToken();
    this.datosRespuesta = '';
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/rol/${idRol}/privilegio/${idPrivilegio}/registroPrivilegio`, {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((res) => {
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }

  async removePrivFromRole(idRol, idPrivilegio) {
    const token = this.getUserLogToken();
    this.datosRespuesta = '';
    await axios
      .delete(
        `https://api-la-puntada.herokuapp.com/api/rol/${idRol}/privilegios/${idPrivilegio}/eliminarPrivilegio`, {
          headers: {
            'access-token': token,
          },
        }
      )
      .then((res) => {
        console.log(res)
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }
}

export default RoleController;
