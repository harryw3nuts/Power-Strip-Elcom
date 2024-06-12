import SeoData from '@/components/SeoData'
import SucessSec from '@/components/SucessPage'
import { PAYMENT_SUCCESS_PAGE, THEME_SETTINGS } from '@/queries/graphql_queries'
import { sendGraphQLQuery } from '@/utils/utils'
import React from 'react'

const PaymentSuccessful = ({data,paymentSuccessData}) => {
  const seoData = paymentSuccessData?.data?.pageBy?.seoData;
  // console.log("data : ",data.data.themeGeneralSettings.themeGeneralSettings)
  return (
    <>
    <SeoData pageTitle={""} seodata={seoData}/>
    <SucessSec data={data?.data?.themeGeneralSettings?.themeGeneralSettings}/>
    </>
  )
}

export default PaymentSuccessful

export async function getStaticProps() {
  try {
    const data = await sendGraphQLQuery(THEME_SETTINGS);
    const paymentSuccessData = await sendGraphQLQuery(PAYMENT_SUCCESS_PAGE);
    return {
      props: {
        data,
        paymentSuccessData
      },
      revalidate: 10
    }
  } catch (error) {
    return {
      props: {
        error
      }
    }
  }
}