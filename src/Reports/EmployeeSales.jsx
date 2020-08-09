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
    width: '19%',
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

const EmployeeSales = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  const totalAmountIsv = data.totalAmount + data.totalISV;
  const date = moment().format('LLL');
  return (
    <Document title="Reporte de Ventas">
      <Page style={styles.body}>
        <Text style={styles.title}>LA PUNTADA</Text>
        <Text style={styles.subtitle}>Reporte de Ventas por Empleado</Text>
        <Text style={styles.subtitle2}>Fecha emisión: {date}</Text>
        <Text style={styles.subtitle2}>
          {/* eslint-disable-next-line react/prop-types */}
          Empleado: {data.user.nombres} {data.user.apellidos}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow1}>
            <View style={styles.tableColNumber}>
              <Text style={styles.tableCell}>No.</Text>
            </View>
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
          {data.reports.map((venta, index) => (
            <View style={styles.tableRow}>
              <View style={styles.tableColNumber}>
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
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
        <View style={styles.totals}>
          <Text>Ventas realizadas: {data.reports.length}</Text>
          <Text>Total Ventas: {data.totalAmount}</Text>
          <Text>Total ISV: {data.totalISV}</Text>
          <Text>Total: {totalAmountIsv.toFixed(2)}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default EmployeeSales;
