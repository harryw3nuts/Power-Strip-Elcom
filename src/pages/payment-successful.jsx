import SucessSec from '@/components/SucessPage'
import { THEME_SETTINGS } from '@/queries/graphql_queries'
import { sendGraphQLQuery } from '@/utils/utils'
import React from 'react'

const PaymentSuccessful = ({data}) => {
  console.log("data : ",data)
  // if(data){
  //   const {pdfAddressInfo,pdfColorText,pdfCustomerDetailsText,pdfGstInfo,pdfInvoiceText,pdfLogo,pdfOrderDateText,pdfPriceText,pdfProductCodeText,pdfProductNameText,pdfQuantityText,pdfShippingText,successBackHomeButtonText,successBackHomeText,successDescription,successDownloadInvoiceButtonText,successHeading,successImage,} = data?.themeGeneralSettings?.themeGeneralSettings;
  // }
  return (
    <SucessSec/>
  )
}

export default PaymentSuccessful

export async function getStaticProps() {
  try {
    const data = await sendGraphQLQuery(THEME_SETTINGS);
    return {
      props: {
        data
      }
    }
  } catch (error) {
    return {
      props: {
        error
      }
    }
  }
}