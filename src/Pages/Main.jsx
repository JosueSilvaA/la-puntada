import React from 'react'

import MainItem from '../Components/MainItem'
import NavBar from '../Components/Navbar'

import logo from '../logo.svg'

const Main = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <MainItem iconItem={logo} nameItem={"Inventario"}  route={"/inventory"}/>
                    {/* examples */}
                    <MainItem iconItem={logo} nameItem={"Reportes"} route={"/inventory"} />
                    <MainItem iconItem={logo} nameItem={"Inventario"} route={"/inventory"} />
                    <MainItem iconItem={logo} nameItem={"Inventario"} route={"/inventory"} />
                    <MainItem iconItem={logo} nameItem={"Inventario"}  route={"/inventory"}/>
                    <MainItem iconItem={logo} nameItem={"Inventario"}  route={"/inventory"}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main;