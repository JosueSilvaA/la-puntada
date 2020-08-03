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
  const [InfoProveedor, setInfoProv] = useState({ value: false, infoProve: {} });
  const [DataClientes, setInfoInvoicesCli] = useState({ invoicesCli: [], loading: true, value: false });
  const [InfoEmpleado, setInfoEmp] = useState({ value: false, infoEmpl: [] });

  const getInvoicesList = async () => {
    const invoice = new invoiceController();
    const invoicesProv = await invoice.getInvoicesProv();
    console.log(invoicesProv);
    const invoicesCli = await invoice.getInvoicesCli();
    console.log(invoicesCli);
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
    const dataProv = await invoice.GetNameProvider(invoicesProv.items.proveedor);
    console.log(dataProv);
    if (!dataProv.err) {
      setInfoProv({ value: true, infoProve: dataProv.items, });
    } 
   

      const array ={};
      for (let i=0; i<20;i++ ){
        array[i]=invoicesCli.items[i].nombreEmpleado;
        console.log(array);
        
      }
      const dataEmp = await invoice.GetNameEmployee(array);
       console.log(dataEmp);
        if (!dataEmp.err) {
          setInfoEmp({ value: true, infoEmpl: dataEmp.items, });
        }
      console.log(array);
    
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
                  prove={InfoProveedor.value && InfoProveedor.infoProve.nombre}
                  fechaFactura={invoiceP.fechaFactura}   
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
                  nombreEmp={InfoEmpleado.value && InfoEmpleado.infoEmpl.nombres}   
                  creada={invoiceC.creada} 
                  subtotal={invoiceC.subTotal}
                  isv={invoiceC.isv}
                  total={invoiceC.total}
                />
              ))}
       </Grid>
    </>
  );
};

export default InvoiceList;
