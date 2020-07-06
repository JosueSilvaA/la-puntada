import React from 'react'

import MainItem from '../Components/MainItem'
import NavBar from '../Components/Navbar'

// import logo from '../logo.svg'

const Main = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <MainItem iconItem={"https://img.icons8.com/nolan/64/delivery-settings.png"} nameItem={"Inventario"} route={"/inventory"} />
                    <MainItem iconItem={"https://img.icons8.com/nolan/64/delivery-settings.png"} nameItem={"Inventario"} route={"/inventory"} />
                    {/* examples */}
                    <MainItem iconItem={"https://img.icons8.com/dusk/64/000000/total-sales.png"} nameItem={"Reportes"} route={"/inventory"} />
                    <MainItem iconItem={"https://img.icons8.com/doodle/50/000000/group.png"} nameItem={"Usuarios"} route={"/inventory"} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main;