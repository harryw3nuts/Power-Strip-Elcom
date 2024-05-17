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
import VideoSec from "@/components/VideoSec";
import SucessSec from "@/components/SucessPage";
import ScrollTextColor from "@/components/ScrollTextColor";
import FeaturesSecNew from "@/components/FeaturesSecNew";
import PowerStripSliderSec from "@/components/PowerStripSliderSec";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <Banner/>
    <ScrollTextColor />
    <PriceSec/>
    <FeaturesSecNew />
    <VideoSec/>
    <StripBox/>
    <ReviewSec/>
    <InsightSec/>
    <BenefitSec/>
    <PowerStripSliderSec />
    <QuestionSec/>
    <SucessSec/>
   </>
     
  );
}
