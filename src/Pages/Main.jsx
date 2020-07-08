import React from 'react';
import MainItem from '../Components/MainItem';

import NavBar from '../Components/Navbar';

// import logo from '../logo.svg'

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <MainItem
            iconItem="https://img.icons8.com/nolan/64/delivery-settings.png"
            nameItem="Inventario"
            route="/inventory"
            bgColor="black"
          />
          <MainItem
            iconItem="https://img.icons8.com/nolan/64/delivery-settings.png"
            nameItem="Inventario"
            route="/inventory"
            bgColor="white"
          />
          {/* examples */}
          <MainItem
            iconItem="https://img.icons8.com/dusk/64/000000/total-sales.png"
            nameItem="Reportes"
            route="/inventory"
            bgColor="white"
          />
          <MainItem
            iconItem="https://img.icons8.com/dusk/64/000000/conference.png"
            nameItem="Usuarios"
            route="/users"
            bgColor="#694bb6"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
