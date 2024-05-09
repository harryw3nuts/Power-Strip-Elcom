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

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <Banner/>
    <PriceSec/>
    <StripBox/>
    <ReviewSec/>
    <InsightSec/>
    <BenefitSec/>
    <QuestionSec/>

   </>
     
  );
}
