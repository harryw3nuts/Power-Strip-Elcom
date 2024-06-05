import React, { useContext } from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Link, Font } from '@react-pdf/renderer'
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { IndiaStatesList, formatDate } from '@/utils/utils';

export const InvoiceDocument = ({ orderInfo, data }) => {
  // console.log("data ; :: ", data);
  const { pdfAddressInfo, pdfColorText, pdfCustomerDetailsText, pdfGstInfo, pdfInvoiceText, pdfLogo, pdfOrderDateText, pdfPriceText, pdfProductCodeText, pdfProductNameText, pdfQuantityText, pdfShippingAddressText, pdfSubtotalText, pdfShippingText, pdfTotalText, pdfThankYouText } = data;
  Font.register({ family: 'Roboto', src: '/Roboto-Bold.ttf' });
  Font.register({ family: 'Roboto-Medium', src: '/Roboto-Medium.ttf' });
  Font.register({ family: 'Roboto-Regular', src: '/Roboto-Regular.ttf' });

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      color: '#2C2A25',
      width: 565,
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25,
      display: "flex",
      gap: 310,
    },
    logo: {
      width: 40,
      height: 40,
    },

    image: {
      display: "flex"
    },
    companyDetails: {
      textAlign: 'right',
      fontSize: 10,
      width: 165,
    },
    title: {
      fontSize: 16,
      color: '#2C2A25',
      marginBottom: 10,
      fontWeight: 700,
      fontFamily:'Roboto'
    },
    sectionTitle: {
      fontSize: 16,
      marginBottom: 10,
      color: '#2C2A25',
      fontWeight: 700,
      fontFamily:'Roboto'
    },
    section: {
      marginBottom: 25,
      display: 'flex',
      flexDirection: 'column'
    },
    infoRow: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 5,
      display: 'flex'
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
      display: 'flex',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 25,
      paddingRight: 25,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      borderTopLeftRadius: 4,
      borderTopRightRadius:4,
    },
    tableRow: {
      display: 'flex',
      backgroundColor: '#F4F4F4',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 25,
      paddingRight: 25,
      color: '#000',
      flexDirection: 'row',
      width: '100%',
      borderBottom: '0.25px solid #BDBDBD', 

    },
    tableCell: {
      width: '20%',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: 10,
      textAlign: 'center'
    },
    totalRow: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'flex-end'
    },
    totalLabel: {
      textAlign: 'right',
      fontFamily:'Roboto',
      fontWeight: 700,
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
      fontWeight: 'normal'
    },
    second: {
      marginBottom: 25,
      display: 'flex',
      flexDirection: 'column'
    },
    sectionTwo: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 25,
    },
    custDtl: {
      marginBottom: 10,
    },

    briefDtl: {
      fontSize: 10,
      fontWeight: 'light',
      
    },

    gst: {
      marginTop: 8,
    },

    shipAdd: {
      fontSize: 10,
    },
    comRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      borderBottom: '1px solid #7B7B7B',
      paddingTop: 8,
      paddingBottom: 8,
      alignItems: 'center'
    },

    lastRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      paddingTop: 8,
      paddingBottom: 8,

    },
    lastSec: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '30%',
      borderBottom: '1px solid #7B7B7B',
      paddingTop: 8,
      paddingBottom: 18,
    },

    rsLabel: {
      fontSize: 10,
      fontWeight:400,
      fontFamily:'Roboto-Regular',
    },

    rsvLabel:{
       fontSize:10,
       width:'20%',
       textAlign: 'center',
       fontWeight:400,
       fontFamily:'Roboto-Regular',
    },
    nameDtl: {
      flexDirection:'row',
      gap:'2px',
      display:'flex'
    },
    subName:{
      fontSize:10,
      color:"#4963A0"
    },
    productName:{
      width:'20%',
      color:'#0071E3',
      fontSize: 10,
      paddingLeft:10,
      paddingRight:10,
      textAlign:'center'
    }
  });

  const rs = "₹";


  // const order = {
  //   id: '123456789',
  //   date: '24 December 2022',
  //   customerName: 'Mihir Vaze',
  //   customerEmail: 'customer@gmail.com',
  //   customerPhone: '+91 9876543210',
  //   shippingAddress: 'Shop Address Line 2\nState, Country',
  //   items: [
  //     { code: '99920KISH', name: 'Elcom Power Strip', link: 'http://example.com', color: 'White', quantity: 1, price: '₹200' },
  //   ],
  //   subtotal: '₹600',
  //   cgst: '₹50',
  //   sgst: '₹50',
  //   shipping: '₹50',
  //   total: '₹750',
  // };


  let address = '';
  if (orderInfo) {
    const { address_1, address_2, city, state, postcode, country } = orderInfo.billing;
    if (address_1 != '') {
      address += address_1
    }
    if (address_2 != '') {
      address += `, ${address_2}`;
    }
    if (city != '') {
      address += `, ${city}`;
    }
    if (postcode != '') {
      address += `- ${postcode}`;
    }
    if (state != '') {
      const foundState = IndiaStatesList.filter((item, index) => item.id == state)
      if (foundState.length > 0) {
        address += `, ${foundState[0].name}`;
      } else {
        address += `, ${state}`;
      }
    }
    if (country != '') {
      address += `, ${country == 'IN' ? 'India' : country}`;
    }
  }

  // console.log('pdfAddressInfo', data.pdfAddressInfo);
  // return "ok"
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* <Image style={styles.logo} src={"https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/Logo.png"} /> */}
          <Image style={styles.logo} src={"/Logo.png"} />
          <View style={styles.companyDetails}>
            {pdfAddressInfo && <Text>{pdfAddressInfo}</Text>}
            {/* <Text>20, Prabhadevi Industrial Estate 408,</Text>
              <Text>Veer Savarkar Marg, Prabhadevi,</Text>
              <Text>Mumbai, Maharashtra 400 025, India</Text> */}
            {pdfGstInfo && <Text style={styles.gst}>{pdfGstInfo}</Text>}
          </View>
        </View>
        <View style={styles.second}>
          <Text style={styles.title}>{pdfInvoiceText || "Invoice: "} #{orderInfo?.id}</Text>
          <Text style={styles.smallTitle}>{pdfOrderDateText || "Order Date:"} {formatDate(orderInfo.date_modified)}</Text>
        </View>
        <View style={styles.sectionTwo}>
          <View style={styles.custDtl}>
            <Text style={styles.sectionTitle}>{pdfCustomerDetailsText || "Customer Details"}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.nameDtl}>
              <Text style={styles.briefDtl}>Name: </Text>
              <Text style={styles.subName}>{orderInfo?.billing?.first_name} {orderInfo?.billing?.last_name}</Text>
            </View>
            <View style={styles.nameDtl}>
              <Text style={styles.briefDtl}>Email: </Text>
              <Text style={styles.subName}>{orderInfo?.billing?.email}</Text>
            </View>
            <View style={styles.nameDtl}>
              <Text style={styles.briefDtl}>Phone No: </Text>
              <Text style={styles.subName}>{orderInfo?.billing?.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{pdfShippingAddressText && "Shipping Address"}</Text>
          <Text style={styles.shipAdd}>{address}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>{pdfProductCodeText || "Product Code"}</Text>
            <Text style={styles.tableCell}>{pdfProductNameText || "Product Name"}</Text>
            <Text style={styles.tableCell}>{pdfColorText || "Color"}</Text>
            <Text style={styles.tableCell}>{pdfQuantityText || "Quantity"}</Text>
            <Text style={styles.tableCell}>{pdfPriceText || "Price"}</Text>
          </View>
          {orderInfo.line_items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item?.sku ? item?.sku : '-'}</Text>
              <Text style={styles.productName}>{item?.name}</Text>
              <Text style={styles.tableCell}>{item?.meta_data[0]?.display_value}</Text>
              <Text style={styles.tableCell}>{item?.quantity}</Text>
              <Text style={styles.rsvLabel}>{rs}{item?.subtotal}</Text>
            </View>
          ))}
        </View>
        <View style={styles.totalRow}>
          <View style={styles.comRow}>
            <Text style={styles.totalLabel}>{pdfSubtotalText || "Subtotal:"}</Text>
            <Text style={styles.rsLabel}>{rs}{(orderInfo?.total - (orderInfo?.total_tax || 0)).toFixed(2)}</Text>
          </View>
          {orderInfo?.tax_lines?.length > 0 &&
            orderInfo?.tax_lines?.map((tax, index) => {
              return (
                <View style={styles.comRow} key={index}>
                  <Text style={styles.totalLabel}>{tax.label}:</Text>
                  <Text style={styles.rsLabel}>{rs}{tax.tax_total}</Text>
                </View>
              )
            })
          }
          <View style={styles.lastSec}>
            <Text style={styles.totalLabel}>{pdfShippingText || "Shipping:"}</Text>
            <Text style={styles.rsLabel}>{rs}{0}</Text>
          </View>
          <View style={styles.lastRow}>
            <Text style={styles.totalLabel}>{pdfTotalText || "Total:"}</Text>
            <Text style={styles.rsLabel}>{rs}{orderInfo?.total}</Text>
          </View>
        </View>
        {pdfThankYouText || <View style={styles.footer}>
          <Text>{pdfThankYouText}</Text>
        </View>}
      </Page>
    </Document>
  )
}

