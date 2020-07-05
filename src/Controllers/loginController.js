import axios from 'axios'

class LoginController{

    async Autenticar(usuario, contrasena){
        this.data = {usuario, contrasena}
        let datosRespuesta;
        await axios
        .post("http://localhost:3000/api/usuario/login", this.data)
      .then((res) => {
        datosRespuesta = res;
        return res;
      })
      .catch((err) => {
          console.log(err)
        datosRespuesta = new Error('¡Oops!, Ocurrió un problema al realizar la conexión.');
        return err;
      });
      return datosRespuesta;
    }
}

export default LoginController;