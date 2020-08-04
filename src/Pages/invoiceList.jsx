import React, { useEffect, useState } from 'react';
import {
  
  Grid,
  Divider,
  
} from '@material-ui/core';

import invoiceController from '../Controllers/InvoiceCotroller';
import NavBar from '../Components/Navbar';

import InvoiceListItemProv from '../Components/InvoiceListItemProv';
import InvoiceListItemCli from '../Components/InvoiceListemItemCli';

const InvoiceList= () => {
  
  const [DataProveedores, setInfoInvoicesProv] = useState({ invoicesProv: [], loading: true, value: false });
  const [DataClientes, setInfoInvoicesCli] = useState({ invoicesCli: [], loading: true, value: false });

  const getInvoicesList = async () => {
    const invoice = new invoiceController();
    const invoicesProv = await invoice.getInvoicesProv();
    const invoicesCli = await invoice.getInvoicesCli();
    if (!invoicesProv.err) {
      setInfoInvoicesProv({
        invoicesProv: invoicesProv.items,
        value: true,
        loading: false,
      });
      
    }
    if (!invoicesCli.err) {
      setInfoInvoicesCli({
        invoicesCli: invoicesCli.items,
        value: true,
        loading: false,
      });
      
    }  
  };
  useEffect(() => {
    getInvoicesList();
  }, []);
  
  return (
    <>
      
      <NavBar pageName="La Puntada - Facturas" goBack />
      <Divider className="bg-success0" />
      <Grid
        container
        spacing={2}
        className = 'contenedor-catalogo'
      > 
          <Grid className="mt-2 contenedor-titulo">
              <h5 className="titulo-categoria">Facturas Proveedores</h5>
              <hr />
           </Grid>

            {DataProveedores.invoicesProv.map((invoiceP)=> (
                <InvoiceListItemProv   
                  prove={invoiceP.proveedor}
                  fechaFactura={invoiceP.fechaFactura}   
                  productos = {invoiceP.productos}
                  creada={invoiceP.creada}     
                  estado={invoiceP.estado}
                  subtotal={invoiceP.subTotal}
                  isv={invoiceP.isv}
                  total={invoiceP.total}
                />
              ))}

            <Grid className="mt-2 contenedor-titulo">
              <h5 className="titulo-categoria">Facturas Clientes</h5>
              <hr />
           </Grid>

            {DataClientes.invoicesCli.map((invoiceC)=> (
                <InvoiceListItemCli 
                  cliente={invoiceC.nombreCliente} 
                  rtn={invoiceC.rtn}
                  telefono={invoiceC.telefono}
                  direccion={invoiceC.direccion}
                  fechaFactura={invoiceC.fechaFactura}
                  nombreEmp={invoiceC.nombreEmpleado}   
                  creada={invoiceC.creada} 
                  subtotal={invoiceC.subTotal}
                  isv={invoiceC.isv}
                  total={invoiceC.total}
                  productos={invoiceC.productos}
                />
              ))}
       </Grid>
    </>
  );
};

export default InvoiceList;
