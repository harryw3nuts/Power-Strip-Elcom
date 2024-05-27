import Image from "next/image";
import Link from "next/link";
import sucess from "@/asset/images/sucess.svg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { InvoiceDocument } from "./InvoiceDocument";



const SucessSec = () => {
    const { orderInfo } = useContext(ThemeContext)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    console.log("orderInfo : ", orderInfo)
    return (
        <>
            <div className="sucessWrap">
                <div className="container">
                    <div className="sucessDtl">
                        <div className="sucessImg">
                            <Image src={sucess} alt="sucess"></Image>
                        </div>
                        <div className="sucessText">
                            <h2>Your Payment is Successful!</h2>
                            <p>Thank you for your payment. An automated payment receipt will be sent to your registered email.</p>
                            <div className="btnbox">
                                {(isClient && orderInfo) &&
                                    <PDFDownloadLink document={<InvoiceDocument orderInfo={orderInfo} />} fileName="invoice.pdf">
                                        {({ loading }) => (loading ? 'Loading invoice ...' : 'Download receipt')}
                                    </PDFDownloadLink>
                                }
                                {/* <Link href={'#'}>Download receipt</Link> */}
                            </div>
                        </div>
                        <div className="backHome">
                            <p>Page while be automatically redirected to the main page or click button <Link href={'/'}>Back home</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SucessSec;