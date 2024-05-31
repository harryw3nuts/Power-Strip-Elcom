import FailedSec from '@/components/FailPage'
import { THEME_SETTINGS } from '@/queries/graphql_queries'
import { sendGraphQLQuery } from '@/utils/utils'
import React from 'react'

const PaymentFail = ({data}) => {
  return (
    <FailedSec data={data?.data?.themeGeneralSettings?.themeGeneralSettings}/>
  )
}

export default PaymentFail

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