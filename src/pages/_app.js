import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  ;
}
