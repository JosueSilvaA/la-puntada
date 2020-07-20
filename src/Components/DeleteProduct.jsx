import React, { useState } from 'react';
import SearchProduct from './SearchProducts';

const DeleteProduct = () => {
  const [ProducSelected, setProducSelected] = useState(0);
  const selectProduct = (dataProduct) => {
    setProducSelected(dataProduct);
  };

  return (
    <>
      <p>Borrar un Producto</p>
      <SearchProduct selectProduct={selectProduct} />
    </>
  );
};
export default DeleteProduct;
