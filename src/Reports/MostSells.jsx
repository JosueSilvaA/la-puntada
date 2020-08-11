import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
    table: {
      display: 'table',
      marginTop: '20rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '85%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: 'auto',
      flexDirection: 'row',
    },
    tableRow1: {
      margin: 'auto',
      flexDirection: 'row',
      backgroundColor: 'gray',
    },
    tableCol: {
      width: '24%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableColNumber: {
      width: '5%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 10,
    },
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      marginTop: '40rem',
      fontSize: 24,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: '3rem',
    },
    subtitle2: {
      fontSize: '13',
    },
    totals: {
      fontSize: 12,
      textAlign: 'right',
      marginTop: '10rem',
    },
  });
  
  const MostSells = (props) => {
    // eslint-disable-next-line react/prop-types
    const { data } = props;
    const date = moment().format('LLL');
    return (
      <Document title="Reporte De Producto Mas Vendido">
        <Page style={styles.body}>
          <Text style={styles.title}>LA PUNTADA</Text>
          <Text style={styles.subtitle}>Reporte de Productos Mas Vendidos</Text>
          <Text style={styles.subtitle2}>Fecha emisión: {date}</Text>
          <View style={styles.table}>
            <View style={styles.tableRow1}>
              <View style={styles.tableColNumber}>
                <Text style={styles.tableCell}>No.</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Nombre Producto</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Precio Unitario</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Cantidad</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total Venta</Text>
              </View>
            </View>
            {/* eslint-disable-next-line react/prop-types */}
            {data.map((venta, index) => (
              <View style={styles.tableRow}>
                <View style={styles.tableColNumber}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{venta.nombre}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{venta.precio} LPS</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{venta.cantidad}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{venta.cantidad*venta.precio} LPS</Text>
                </View>

              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  };
  
  export default MostSells;
