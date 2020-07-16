import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { PostAdd, Edit, Delete } from '@material-ui/icons';
import NavBar from '../Components/Navbar';
import NewProduct from '../Components/NewProduct';
import DeleteProduct from '../Components/DeleteProduct';

const Inventory = () => {
  const [Value, setValue] = useState({ value: 0, component: NewProduct });
  const [Name, setName] = useState('hola');

  const handleChange = (event, newValue) => {
    // await setValue(newValue);
    if (newValue === 0) {
      setValue({ value: newValue, component: NewProduct });
    } else if (newValue === 1) {
      setValue({ value: newValue, component: NewProduct });
    } else {
      setValue({ value: newValue, component: DeleteProduct });
    }
  };

  return (
    <>
      <NavBar pageName="Manejo de Inventario" goBack />
      <Paper square className="">
        <Tabs
          value={Value.value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<PostAdd />} aria-label="phone" />
          <Tab icon={<Edit />} aria-label="favorite" />
          <Tab icon={<Delete />} aria-label="person" />
        </Tabs>
      </Paper>
      <div className="">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Value.component />
      </div>
    </>
  );
};
export default Inventory;
