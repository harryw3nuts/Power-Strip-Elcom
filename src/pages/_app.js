import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/context/ThemeContext';
import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  const themeSettings = pageProps?.data?.data?.themeGeneralSettings?.themeGeneralSettings;
  const headerData = {
    headerLogo: themeSettings?.headerLogo,
    ctaOneInfo: themeSettings?.ctaOneInfo,
    ctaTwoInfo: themeSettings?.ctaTwoInfo,
    menuInfo: themeSettings?.menuInfo,
  }

  const footerData = {
    footerCopyrightInfo: themeSettings?.footerCopyrightInfo,
    footerElcomLink: themeSettings?.footerElcomLink,
    twitterUri: themeSettings?.twitterUri,
    linkedinUri: themeSettings?.linkedinUri,
    facebookUri: themeSettings?.facebookUri,
    youtubeUri: themeSettings?.youtubeUri,
  }

  // useEffect(()=>{
  //   (async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll({
  //         smooth: true,
  //         multiplier: 0.1,
  //         lenisOptions: {
  //           easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  //         }
  //       });

  //       return () => {
  //         locomotiveScroll.destroy();
  //       };
  //   })();
  // },[])
  return (
    <>
      <ThemeProvider>
        <NextNProgress color='#0071E3' height={6}/>
        <Header {...headerData} />
        <Component {...pageProps} />
        <Footer {...footerData} />
      </ThemeProvider>
    </>
  )
    ;
}
