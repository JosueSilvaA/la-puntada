import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';
// Create styles
const styles = StyleSheet.create({
  table: {
    display: 'table',
    marginTop: '20rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
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
    width: '20%',
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
    margin: 12,
  },
  subtitle2: {
    fontSize: '13',
  },
});

const EmployeeSales = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  const date = moment().format('L');
  return (
    <Document title="Reporte de Ventas">
      <Page style={styles.body}>
        <Text style={styles.title}>Reporte de Ventas por Empleado</Text>
        <Text style={styles.subtitle}>LA PUNTADA</Text>
        <Text style={styles.subtitle2}>Fecha emisión: {date}</Text>
        <Text style={styles.subtitle2}>
          {/* eslint-disable-next-line react/prop-types */}
          Empleado: {data.user.nombres} {data.user.apellidos}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow1}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>RTN</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Fecha Venta</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nombre Cliente</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ISV</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Total Venta</Text>
            </View>
          </View>
          {/* eslint-disable-next-line react/prop-types */}
          {data.reports.map((venta) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{venta.rtn}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{venta.fechaFactura}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{venta.nombreCliente}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{venta.isv}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{venta.total}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default EmployeeSales;
