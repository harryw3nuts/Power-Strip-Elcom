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
import VideoSec from "@/components/VideoSec";
import SucessSec from "@/components/SucessPage";
import ScrollTextColor from "@/components/ScrollTextColor";
import FeaturesSecNew from "@/components/FeaturesSecNew";
import PowerStripSliderSec from "@/components/PowerStripSliderSec";
import MobileTextColor from "@/components/MobileTextColor";


// const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, error }) {
  // console.log("data : ",data?.data?.pageBy?.template?.homePageFields)
  const { 
    bannerHeading, bannerSubHeading, bannerLeftSideImage, bannerRightSideImage, bannerButtonInfo,
    powerStripimage,powerStripleftText,powerStriprightText,
    otherHeading,otherProductInfo,
    reviewsHeading,reviewsInfo,
    insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,insightsInfo,
    benefitsHeading,benefitsInfo,
    faqHeading,faqInfo,selectProduct,
    featuresHeading,featuresImage,features1Heading,features1Subheading,features2Heading,features2Subheading,features3Heading,features3Subheading,features4Heading,features4Subheading,features5Heading,features5Subheading,
    exploreHeading,exploreButtonInfo,exploreImagesInfo,
    videoBackgroundImage,videoUrl,videoButtonText
  } = data?.data?.pageBy?.template?.homePageFields;

  const latest3Posts = data?.data?.posts?.nodes;

  const BannerData = { bannerHeading, bannerSubHeading, bannerLeftSideImage, bannerRightSideImage, bannerButtonInfo }
  const otherInfoData = {otherHeading,otherProductInfo}
  const reviewsData = {reviewsHeading,reviewsInfo}
  const insightsData = {insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,latest3Posts,insightsInfo
  }
  const benefitsData = {benefitsHeading,benefitsInfo}
  const faqData = {faqHeading,faqInfo}
  const powerStripData = {powerStripimage,powerStripleftText,powerStriprightText}
  const featuresData = {featuresHeading,featuresImage,features1Heading,features2Heading,features3Heading,features4Heading,features5Heading,features1Subheading,features2Subheading,features3Subheading,features4Subheading,features5Subheading}
  const exploreData = {exploreHeading,exploreButtonInfo,exploreImagesInfo}
  const videoData = {videoBackgroundImage,videoUrl,videoButtonText}
  if (error) {
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
      <ScrollTextColor {...powerStripData}/>
      <MobileTextColor/>
      <PriceSec productData={selectProduct}/>
      <FeaturesSecNew {...featuresData}/>
      {videoUrl && <VideoSec {...videoData}/>}
      <BenefitSec {...benefitsData}/>
      <PowerStripSliderSec {...exploreData}/>
      <StripBox {...otherInfoData}/>
      <ReviewSec {...reviewsData}/>
      <InsightSec {...insightsData}/>
      <QuestionSec {...faqData}/>
      {/* <SucessSec/> */}
    </>
  )

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

