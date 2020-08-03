import axios from 'axios';

class RoleController {
  async getRoles() {
    this.datosRespuesta = '';
    await axios
      .get('https://api-la-puntada.herokuapp.com/api/rol/obtenerRoles')
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
    this.datosRespuesta = '';
    await axios
      .post(`https://api-la-puntada.herokuapp.com/api/rol/${idRol}/obtenerPrivilegios`)
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
    this.datosRespuesta = '';
    this.data = { rol: nombreRol };
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/privilegio/obtenerPrivilegiosNotInRol`,
        this.data
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
    this.datosRespuesta = '';
    await axios
      .post(
        `https://api-la-puntada.herokuapp.com/api/rol/${idRol}/privilegio/${idPrivilegio}/registroPrivilegio`
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
}

export default RoleController;
