import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import PriceSec from "@/components/PriceSec";
import StripBox from "@/components/StripBox";
import InsightSec from "@/components/InsightSec";
import QuestionSec from "@/components/QuestionSec";
import BenefitSec from "@/components/BenefitSec";
import ReviewSec from "@/components/ReviewSec";
import { useEffect } from "react";
import { sendGraphQLQuery } from "@/utils/utils";
import { HOME_PAGE, THEME_SETTINGS } from "@/queries/graphql_queries";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({data,error}) {
  // console.log("data : ",data?.data?.pageBy?.template?.homePageFields)
  const {bannerHeading,bannerSubHeading,bannerLeftSideImage,rightSideImage,bannerButtonInfo} = data?.data?.pageBy?.template?.homePageFields;

  const BannerData = {bannerHeading,bannerSubHeading,bannerLeftSideImage,rightSideImage,bannerButtonInfo}
  if(error){
    return (
      <h2>Error : {JSON.stringify(error)}</h2>
    )
  }

  return (
    <>
      <Head>
        <title>Elcom | Power Strip</title>
      </Head>
      <Banner {...BannerData} />
      <PriceSec />
      <StripBox />
      <ReviewSec />
      <InsightSec />
      <BenefitSec />
      <QuestionSec />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await sendGraphQLQuery(HOME_PAGE);
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

