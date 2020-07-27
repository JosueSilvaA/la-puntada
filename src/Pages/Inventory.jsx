import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import NavBar from '../Components/Navbar';
import NewProduct from '../Components/NewProduct';
import DeleteProduct from '../Components/DeleteProduct';
import EditProduct from '../Components/EditProduct';

const Inventory = (props) => {
  const [RenderOption, setRenderOption] = useState({
    delete: false,
    edit: false,
    new: false,
    deleteiId: false,
    editId: false,
    value: false,
    navbarName: '',
  });

  const viewParams = () => {
    const route = props.match.params;
    if (route.action === 'deleteProduct') {
      if (route.idProduct !== undefined) {
        setRenderOption({
          delete: false,
          edit: false,
          new: false,
          deleteiId: true,
          editId: false,
          value: true,
          navbarName: 'La Puntada - Borrar Producto',
        });
      } else {
        setRenderOption({
          delete: true,
          edit: false,
          new: false,
          deleteiId: false,
          editId: false,
          value: true,
          navbarName: 'La Puntada - Borrar Producto',
        });
      }
    } else if (route.action === 'editProduct') {
      if (route.idProduct === undefined) {
        setRenderOption({
          delete: false,
          edit: true,
          new: false,
          deleteiId: false,
          editId: false,
          value: true,
          navbarName: 'La Puntada - Editar Producto',
        });
      }
    } else if (route.action === 'newProduct') {
      setRenderOption({
        delete: false,
        edit: false,
        new: true,
        deleteiId: false,
        editId: false,
        value: true,
        navbarName: 'La Puntada - Nuevo Producto',
      });
    }
  };

  useEffect(() => {
    if (!RenderOption.value) {
      viewParams();
    }
  });

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #fa4e4e' }} />
      <NavBar pageName={RenderOption.navbarName} goBack />
      <div className="">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        {/* <Value.component /> */}
        {RenderOption.delete && <DeleteProduct />}
        {RenderOption.deleteiId && <DeleteProduct idProduct={props.match.params.idProduct} />}
        {RenderOption.edit && <EditProduct />}
        {RenderOption.new && <NewProduct />}
      </div>
    </>
  );
};
export default Inventory;
