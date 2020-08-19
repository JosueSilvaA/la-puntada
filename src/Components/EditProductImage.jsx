/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import ProductImageCtrl from '../Controllers/ProductImageController';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSuccess: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  buttonProgress: {
    color: 'green',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  imgStyles: {
    width: '100%',
    height: '10rem',
  },
}));

const EditProductImage = ({
  Product,
  School = false,
  Varied = false,
  Textil = false,
  closeModal,
}) => {
  const classes = useStyles();
  const imageUploader = React.useRef(null);
  const [ImageProduct, setImageProduct] = useState({ value: false, img: Product.imgProducto });

  const [Loading, setLoading] = useState(false);

  const fileSelectedHandler = (event) => {
    setImageProduct({
      value: true,
      file: event.target.files[0],
      img: URL.createObjectURL(event.target.files[0]),
    });
  };

  const changeProductImage = async () => {
    setLoading(true);
    const productCtrl = new ProductImageCtrl();
    const data = {
      School,
      Varied,
      Textil,
      idProduct: Product._id,
      image: ImageProduct.file,
    };
    const result = await productCtrl.viewProductType(data);
    if (!result.err) {
      setLoading(false);
      swal('Éxito', result.message, 'success', { timer: 2000 }).then(() => {
        window.location.reload();
      });
    } else {
      swal('Error', result.message, 'warning', { timer: 2000 });
    }
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <h2>Cabiar Imagen del Producto</h2>
      <Grid container alignItems="center" className="d-block">
        <Grid item lg={6} md={6} sm={12} xm={12} className="bg-white mx-auto mb-3">
          <img
            src={ImageProduct.img}
            className={classes.imgStyles}
            title="imagen producto"
            alt=""
          />
          <input
            type="file"
            onChange={fileSelectedHandler}
            style={{ display: 'none' }}
            ref={imageUploader}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} className="mx-auto my-auto d-flex">
          {!ImageProduct.value && (
            <Button
              onClick={() => imageUploader.current.click()}
              className="mx-auto"
              variant="contained"
              color="primary"
            >
              Elegir imagen
            </Button>
          )}
          {ImageProduct.value && (
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonClassname}
                disabled={Loading}
                onClick={changeProductImage}
              >
                Guardar
              </Button>
              {Loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
          )}
        </Grid>
        <Grid item lg={12} md={12} sm={12} className="mx-auto mt-3 d-flex">
          <Button
            variant="contained"
            color="secondary"
            className="ml-auto"
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default EditProductImage;
