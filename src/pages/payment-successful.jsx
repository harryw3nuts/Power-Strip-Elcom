import SucessSec from '@/components/SucessPage'
import { THEME_SETTINGS } from '@/queries/graphql_queries'
import { sendGraphQLQuery } from '@/utils/utils'
import React from 'react'

const PaymentSuccessful = ({data}) => {
  console.log("data : ",data.data.themeGeneralSettings.themeGeneralSettings)
  return (
    <SucessSec data={data?.data?.themeGeneralSettings?.themeGeneralSettings}/>
  )
}

export default PaymentSuccessful

export async function getStaticProps() {
  try {
    const data = await sendGraphQLQuery(THEME_SETTINGS);
    return {
      props: {
        data
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