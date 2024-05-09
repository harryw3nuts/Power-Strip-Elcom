import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const themeSettings = pageProps?.data?.data?.themeGeneralSettings?.themeGeneralSettings;
  const headerData = {
    headerLogo: themeSettings?.headerLogo,
    ctaOneInfo: themeSettings?.ctaOneInfo,
    ctaTwoInfo: themeSettings?.ctaTwoInfo,
  }

  const footerData = {
    footerCopyrightInfo: themeSettings?.footerCopyrightInfo,
    footerElcomLink: themeSettings?.footerElcomLink,
    twitterUri: themeSettings?.twitterUri,
    linkedinUri: themeSettings?.linkedinUri,
    facebookUri: themeSettings?.facebookUri,
    youtubeUri: themeSettings?.youtubeUri,
  }
  return (
    <>
      <Header {...headerData}/>
      <Component {...pageProps} />
      <Footer {...footerData}/>
    </>
  )
    ;
}
