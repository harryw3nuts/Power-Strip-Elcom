import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import "@/styles/globals.css";
import '@/styles/responsive.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  ;
}
