/* eslint-disable react/prop-types */
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
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
});

const Quixote = (props) => {
  const { data } = props;
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nombre Cliente</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>RTN</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Fecha Factura</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Total</Text>
            </View>
          </View>
          {data.map((e) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{e.nombreCliente}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{e.rtn}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{e.fechaFactura}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{e.total}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Quixote;
