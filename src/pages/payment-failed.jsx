import FailedSec from '@/components/FailPage'
import SeoData from '@/components/SeoData'
import { PAYMENT_FAILES_PAGE, THEME_SETTINGS } from '@/queries/graphql_queries'
import { sendGraphQLQuery } from '@/utils/utils'
import React from 'react'

const PaymentFail = ({data,paymentFailData}) => {
  const seoData = paymentFailData?.data?.pageBy?.seoData;

  return (
    <>
    <SeoData pageTitle={""} seodata={seoData}/>
    <FailedSec data={data?.data?.themeGeneralSettings?.themeGeneralSettings}/>
    </>
  )
}

export default PaymentFail

export async function getStaticProps() {
  try {
    const data = await sendGraphQLQuery(THEME_SETTINGS);
    const paymentFailData = await sendGraphQLQuery(PAYMENT_FAILES_PAGE);
    return {
      props: {
        data,
        paymentFailData
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