import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import NavBar from '../Components/Navbar';
import NewProduct from '../Components/NewProduct';
import DeleteProduct from '../Components/DeleteProduct';
import EditProduct from '../Components/EditProduct';

const Inventory = (props) => {
  const [Value, setValue] = useState({ value: -1, component: NewProduct, name: '' });

  const viewParams = () => {
    const route = props.match.params;
    if (Value.value === -1) {
      if (route.action === 'deleteProduct') {
        setValue({ value: 2, component: DeleteProduct, name: 'Borrar Producto' });
      } else if (route.action === 'editProduct') {
        setValue({ value: 1, component: EditProduct, name: 'Editar Producto' });
      } else if (route.action === 'newProduct') {
        setValue({ value: 0, component: NewProduct, name: 'Nuevo Producto' });
      }
    }
  };

  useEffect(() => {
    viewParams();
  });

  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color : #362458' }} />
      <NavBar pageName={Value.name} goBack />
      <div className="">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Value.component />
      </div>
    </>
  );
};
export default Inventory;
