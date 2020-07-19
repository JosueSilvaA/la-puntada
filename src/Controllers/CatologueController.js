import axios from 'axios';


class CatalogueController{
    getAllProducts = async () =>{
        let Res;

        await axios
        .get('http://api-la-puntada.herokuapp.com/api/productoEscolar//obtenerProductosEscolares')
        .then((res) => {
            Res = res.data.Items;
            console.log(Res)      
          })
          .catch((err) => {
            Res = { err: true, message: '¡Oops!, Ocurrió un problema al realizar la conexión.' };      
          });
        return Res;
    }
}

export default CatalogueController;