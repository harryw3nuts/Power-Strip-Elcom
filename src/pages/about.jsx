
import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Link } from '@react-pdf/renderer'
import { useState } from 'react';
import { useEffect } from 'react';



const InvoiceDocument = () => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      color: '#2C2A25',
      width:565,
      display:'flex',
      flexDirection:'column',
      margin:'auto'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25,
      display:"flex",
      gap:310,
    },
    logo: {
      width: 40,
      height: 40,
    },

    image: {
      display:"flex"
    },
    companyDetails: {
      textAlign: 'right',
      fontSize:10,
      width:165,
    },
    title: {
      fontSize: 16,
      color: '#2C2A25',
      marginBottom: 10,
      fontWeight:'bold'
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 10,
      color: '#2C2A25',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 25,
      display:'flex',
      flexDirection:'column'
    },
    infoRow: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 5,
      display:'flex'
    },
    table: {
      display: 'table',
      width: 'auto',
      marginBottom: 20,
      borderColor: '#e5e5e5',
    },
    tableHeader: {
      backgroundColor: '#007BFF',
      color: '#fff',
      display:'flex',
      paddingTop:12,
      paddingBottom:12,
      paddingLeft:25,
      paddingRight:25,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      width:'100%',
      
    },
    tableRow: {
      display:'flex',
      backgroundColor:'#F4F4F4',
      justifyContent:'space-between',
      alignItems:'flex-start',
      paddingTop:12,
      paddingBottom:12,
      paddingLeft:25,
      paddingRight:25,
      color:'#000',
      flexDirection:'row',
      width:'100%',

    },
    
    tableCell: {
      width:'20%',
      fontSize:10,
      textAlign:'center'
    },
    totalRow: {
      flexDirection: 'column',
      display:'flex',
      justifyContent:'flex-end',
      width:'100%',
      alignItems: 'flex-end'
    },
    totalLabel: {
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: 10,
    },
    footer: {
      textAlign: 'center',
      fontSize: 10,
      color: '#777',
      marginTop: 20,
    },
    smallTitle: {
      fontSize: 10,
      fontWeight:'normal'
    },
    second: {
      marginBottom:25,
      display:'flex',
      flexDirection:'column'
    },
    sectionTwo:{
      display:'flex',
      flexDirection:'column',
      marginBottom:25,
    },
    custDtl:{
      marginBottom:10,
    },

    briefDtl:{
      fontSize:10,
      fontWeight:'light'
    },

    gst:{
      marginTop:8,
    },

    shipAdd: {
      fontSize:10,
    },
    comRow:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'30%',
      borderBottom: '1px solid #000',
      paddingTop: 8,
      paddingBottom:8,
      alignItems:'center'
    },

    lastRow: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'30%',
      paddingTop: 8,
      paddingBottom:8,
      marginTop:10,
    },
    lastSec: {
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      width:'30%',
      borderBottom: '1px solid #000',
      paddingTop: 8,
      paddingBottom:18,
    },

    rsLabel: {
      fontSize:10,
      fontFamily:'NotoSans',
    },

    tableProduct: {
      fontSize:10,
      textAlign:'center',
      color:'#005ABB',
      fontWeight:'bold',
      width:'20%'
    },
  });


  const order = {
    id: '123456789',
    date: '24 December 2022',
    customerName: 'Mihir Vaze',
    customerEmail: 'customer@gmail.com',
    customerPhone: '+91 9876543210',
    shippingAddress: 'Shop Address Line 2\nState, Country',
    items: [
      { code: '99920KISH', name: 'Elcom Power Strip', link: 'http://example.com', color: 'White', quantity: 1, price: '200' },
    ],
    subtotal: '600',
    cgst: '50',
    sgst: '50',
    shipping: '50',
    total: '750',
    
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/Logo.png" />
          <View style={styles.companyDetails}>
            <Text>20, Prabhadevi Industrial Estate 408,</Text>
            <Text>Veer Savarkar Marg, Prabhadevi,</Text>
            <Text>Mumbai, Maharashtra 400 025, India</Text>
            <Text style={styles.gst}>GST No: XXXXXXXXXXXXXXXXXX</Text>
          </View>
        </View>
        <View style={styles.second}>
          <Text style={styles.title}>Invoice: #{order.id}</Text>
          <Text style={styles.smallTitle}>Order Date: {order.date}</Text>
        </View>
        <View style={styles.sectionTwo}>
          <View style={styles.custDtl}>
            <Text style={styles.sectionTitle}>Customer Details</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.briefDtl}>Name: {order.customerName}</Text>
            <Text style={styles.briefDtl}>Email: {order.customerEmail}</Text>
            <Text style={styles.briefDtl}>Phone No: {order.customerPhone}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <Text style={styles.shipAdd}>{order.shippingAddress}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Product Code</Text>
              <Text style={styles.tableCell}>Product Name</Text>
              <Text style={styles.tableCell}>Color</Text>
              <Text style={styles.tableCell}>Quantity</Text>
              <Text style={styles.tableCell}>Price</Text>
          </View>
          {order.items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{item.code}</Text>
                <Text style={styles.tableProduct}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.color}</Text>
                <Text style={styles.tableCell}>{item.quantity}</Text>
                <Text style={styles.tableCell}>&#8377;{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.totalRow}>
            <View style={styles.comRow}>
                <Text style={styles.totalLabel}>Subtotal:</Text>
                <Text style={styles.rsLabel}>&#8377;{order.subtotal}</Text>
            </View>
            <View style={styles.comRow}>
            <Text style={styles.totalLabel}>CGST:</Text>
            <Text style={styles.rsLabel}>&#8377;{order.cgst}</Text>
            </View>
            <View style={styles.comRow}>
                <Text style={styles.totalLabel}>SGST:</Text>
                <Text style={styles.rsLabel}>&#8377;{order.sgst}</Text>
            </View>
            <View style={styles.lastSec}>
              <Text style={styles.totalLabel}>Shipping:</Text>
              <Text style={styles.rsLabel}>&#8377;{order.shipping}</Text>
            </View>
            <View style={styles.lastRow}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.rsLabel}>&#8377;{order.total}</Text>
            </View>
        </View>
        <View style={styles.footer}>
          <Text>Thank you for your purchase!</Text>
        </View>
      </Page>
    </Document>
  )
}

const About = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <>
      <InvoiceDocument/>
      <div className="cotainer" style={{ height: '1000px', marginTop: "100px" }}>
        {isClient ?
          <PDFDownloadLink document={<InvoiceDocument />} fileName="invoice.pdf">
            {({ loading }) => (loading ? 'Loading document...' : 'Download Invoice')}
          </PDFDownloadLink>
          : "Loading"}
      </div>
    </>
  )
}

export default About

