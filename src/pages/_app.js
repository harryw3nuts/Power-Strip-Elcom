import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/context/ThemeContext';
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
    footerLinks:themeSettings?.footerLinks
  }

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
