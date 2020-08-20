import React, { useEffect, useState } from 'react';
import { Grid, Divider, CircularProgress } from '@material-ui/core';

import invoiceController from '../Controllers/InvoiceCotroller';
import NavBar from '../Components/Navbar';

import InvoiceListItemProv from '../Components/InvoiceListItemProv';
import InvoiceListItemCli from '../Components/InvoiceListemItemCli';

const InvoiceList = () => {
  const [DataProveedores, setInfoInvoicesProv] = useState({
    invoicesProv: [],
    loading: true,
    value: false,
  });
  const [DataClientes, setInfoInvoicesCli] = useState({
    invoicesCli: [],
    loading: true,
    value: false,
  });

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
      <Grid container className="contenedor-catalogo">
        <Grid className="mt-2 contenedor-titulo">
          <h5 className="titulo-categoria">Facturas Proveedores</h5>
          <hr />
        </Grid>

        {DataProveedores.loading && (
          <div className="mx-auto">
            <div className="d-flex mt-5">
              <CircularProgress className="mx-auto" size={60} color="secondary" />
            </div>
            <div className="d-flex">
              <p className="mx-auto text-white">Obteniendo datos...</p>
            </div>
          </div>
        )}
        {DataProveedores.invoicesProv.map((invoiceP) => (
          <InvoiceListItemProv
            prove={invoiceP.proveedor.nombre}
            fechaFactura={invoiceP.fechaFactura}
            productos={invoiceP.productos}
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
        {DataClientes.loading && (
          <div className="mx-auto">
            <div className="d-flex mt-5">
              <CircularProgress className="mx-auto" size={60} color="secondary" />
            </div>
            <div className="d-flex">
              <p className="mx-auto text-white">Obteniendo datos...</p>
            </div>
          </div>
        )}

        {DataClientes.invoicesCli.map((invoiceC) => (
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
