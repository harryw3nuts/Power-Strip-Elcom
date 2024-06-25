import CheckoutSec from "@/components/CheckoutSec";
import { useEffect, useState } from "react";
import Script from "next/script";
import { sendGraphQLQuery } from "@/utils/utils";
import { CHECKOUT_PAGE, THEME_SETTINGS } from "@/queries/graphql_queries";
import SeoData from "@/components/SeoData";

export default function CheckoutPage({checkoutseo}) {
  const seoData = checkoutseo?.data?.pageBy?.seoData;
  const title = checkoutseo?.data?.pageBy?.title;
  const [rzpLoaded, setRzpLoaded] = useState(false);

  useEffect(() => {
    setRzpLoaded(true)
  },[])
  return (
   <>
    <SeoData pageTitle={title || "Checkout | Elcom Powerstrip"} seodata={seoData} />
    <CheckoutSec rzpLoaded={rzpLoaded}/>
    <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      onLoad={() => setRzpLoaded(true)}
    />
   </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await sendGraphQLQuery(THEME_SETTINGS);
    const checkoutseo = await sendGraphQLQuery(CHECKOUT_PAGE);
    return {
      props: {
        data,
        checkoutseo
      },
    }
  } catch (error) {
    return {
      props: {
        error
      }
    }
  }
}