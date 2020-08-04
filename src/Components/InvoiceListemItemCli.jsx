import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Grid,
  Typography,
  Card, CardHeader, CardContent
} from '@material-ui/core';

import invoiceController from '../Controllers/InvoiceCotroller';
// eslint-disable-next-line react/prop-types
const InvoiceListItemCli = ({cliente,rtn,telefono,direccion,fechaFactura,productos, nombreEmp,creada,subtotal,isv,total }) => {
  const fecha= moment(fechaFactura).format('DD-MM-YYYY HH:mm');
    const fechaCreada= moment(creada).format('DD-MM-YYYY HH:mm');
  const [InfoEmpleado, setInfoEmp] = useState({ value: false, infoEmpl: [] });
  const getInfoCli = async () => {
    const invoiceCli = new invoiceController();
     const dataEmp = await invoiceCli.GetNameEmployee(nombreEmp);
     
        if (!dataEmp.err) {
          setInfoEmp({ value: true, infoEmpl: dataEmp.items, });
        }
    
  };
  useEffect(() => {
    getInfoCli();
  }, []);
    return (
    <>
    <Grid item xs={12} sm={6} md={4} lg={3} style={{padding:'10px'}}>
        <Card style={{cursor:"default"}}>
          <CardHeader
            
            title={cliente}//nombreCliente
            subheader={fechaCreada}//creada
          />
          
          <CardContent>
            <Typography variant="button" color="textSecondary"  style={{fontWeight:"bold"}}>
              Fecha Factura : {fecha}
              <br />
              <div className="d-flex"> 
                    <div style={{width:'30%',textAlign:'Left'}}>RTN:</div>
                    <div  style={{width:'70%',textAlign:'leftt'}}>{rtn}</div>
               </div>
              <div className="d-flex"> 
                    <div style={{width:'30%',textAlign:'Left'}}>Telefono:</div>
                    <div  style={{width:'70%',textAlign:'left'}}>{telefono}</div>
               </div>
              <div className="d-flex"> 
                    <div style={{width:'30%',textAlign:'Left'}}>Direccion:</div>
                    <div  style={{width:'70%',textAlign:'left'}}>{direccion}</div>
               </div>
              <div className="d-flex"> 
                    <div style={{width:'30%',textAlign:'Left'}}>Empleado:</div>
                    <div  style={{width:'70%',textAlign:'left'}}>{InfoEmpleado.infoEmpl.nombres} {InfoEmpleado.infoEmpl.apellidos}</div>
               </div> 
              <br />
                  <div className="d-flex"> 
                    <div style={{width:'50%',textAlign:'center'}}>Productos</div>
                    <div  style={{width:'25%',textAlign:'right'}}>Cantidad</div>
                    <div  style={{width:'25%',textAlign:'right'}}>Precio</div>  
                  </div>
                  <br />
               {productos.map((product)=>
                  <> 
                  <div className="d-flex"> 
                    <div style={{width:'60%',textAlign:'center'}}>{product.nombre}</div>
                    <div  style={{width:'25%',textAlign:'right'}}>{product.cantidad}</div>
                    <div  style={{width:'25%',textAlign:'right'}}></div>  
                  </div>
                </> 
              
              )} 
              <br />
              <div className="d-flex"> 
                    <div style={{width:'60%',textAlign:'right'}}>Subtotal</div>
                    <div  style={{width:'40%',textAlign:'right'}}>{subtotal}</div>
               </div> 
              <div className="d-flex"> 
                    <div style={{width:'60%',textAlign:'right'}}>ISV</div>
                    <div  style={{width:'40%',textAlign:'right'}}>{isv}</div>
               </div>
              <div className="d-flex"> 
                    <div style={{width:'60%',textAlign:'right'}}>Total</div>
                    <div  style={{width:'40%',textAlign:'right'}}>{total}</div>
               </div>
               
              
              
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
    </>
  );
};
export default InvoiceListItemCli;
