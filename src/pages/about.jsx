
import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Link } from '@react-pdf/renderer'
import { useState } from 'react';
import { useEffect } from 'react';
 import Logo from "@/asset/images/Logo.svg";


const InvoiceDocument = () => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: 'Helvetica',
      color: '#333',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    logo: {
      width: 150,
      height: 150,
    },
    companyDetails: {
      textAlign: 'right',
    },
    title: {
      fontSize: 24,
      color: '#007BFF',
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 10,
      color: '#333',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 20,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    table: {
      display: 'table',
      width: 'auto',
      marginBottom: 20,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e5e5e5',
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#007BFF',
      color: '#fff',
      borderBottom: '1px solid #ddd',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottom: '1px solid #ddd',
    },
    tableCol: {
      width: '20%',
      padding: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e5e5e5',
    },
    tableCell: {
      margin: 'auto',
      textAlign: 'center',
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 10,
      marginTop: 10,
    },
    totalLabel: {
      width: '20%',
      textAlign: 'right',
      fontWeight: 'bold',
    },
    footer: {
      textAlign: 'center',
      fontSize: 10,
      color: '#777',
      marginTop: 20,
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
      { code: '99920KISH', name: 'Elcom Power Strip', link: 'http://example.com', color: 'White', quantity: 1, price: '₹200' },
    ],
    subtotal: '₹600',
    cgst: '₹50',
    sgst: '₹50',
    shipping: '₹50',
    total: '₹750',
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="src/asset/images/Logo.svg" />
          <View style={styles.companyDetails}>
            <Text>20, Prabhadevi Industrial Estate 408,</Text>
            <Text>Veer Savarkar Marg, Prabhadevi,</Text>
            <Text>Mumbai, Maharashtra 400 025, India</Text>
            <Text>GST No: XXXXXXXXXXXXXXXXXX</Text>
          </View>
        </View>
        <Text style={styles.title}>Invoice: #{order.id}</Text>
        <Text>Order Date: {order.date}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Details</Text>
          <View style={styles.infoRow}>
            <Text>Name: {order.customerName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Email: {order.customerEmail}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Phone No: {order.customerPhone}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <Text>{order.shippingAddress}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product Code</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product Name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Color</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Quantity</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Price</Text>
            </View>
          </View>
          {order.items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.code}</Text>
              </View>
              <View style={styles.tableCol}>
                <Link src={item.link} style={styles.tableCell}>{item.name}</Link>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.color}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal:</Text>
          <Text>{order.subtotal}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>CGST:</Text>
          <Text>{order.cgst}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>SGST:</Text>
          <Text>{order.sgst}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping:</Text>
          <Text>{order.shipping}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text>{order.total}</Text>
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

