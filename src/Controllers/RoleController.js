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
      .get(`https://api-la-puntada.herokuapp.com/api/rol/${idRol}/obtenerPrivilegios`)
      .then((res) => {
        this.datosRespuesta = res.data;
        return res;
      })
      .catch((err) => {
        console.log(err)
        this.datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
    return this.datosRespuesta;
  }
}

export default RoleController;
