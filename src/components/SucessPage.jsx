import Image from "next/image";
import Link from "next/link";
import sucess from "@/asset/images/sucess.svg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { InvoiceDocument } from "./InvoiceDocument";



const SucessSec = ({data}) => {
    const { orderInfo } = useContext(ThemeContext)
    const [isClient, setIsClient] = useState(false)
    const {pdfAddressInfo,pdfColorText,pdfCustomerDetailsText,pdfGstInfo,pdfInvoiceText,pdfLogo,pdfOrderDateText,pdfPriceText,pdfProductCodeText,pdfProductNameText,pdfQuantityText,pdfShippingText,successBackHomeButtonText,successBackHomeText,successDescription,successDownloadInvoiceButtonText,successHeading,successImage} = data;


    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            <div className="sucessWrap">
                <div className="container">
                    <div className="sucessDtl">
                        {successImage?.sourceUrl && <div className="sucessImg">
                            <Image src={successImage?.sourceUrl} width={405} height={236} alt="sucess"></Image>
                        </div>}
                        <div className="sucessText">
                            {successHeading && <h2>{successHeading}</h2>}
                            {successDescription && <p>{successDescription}.</p>}
                            <div className="btnbox">
                                {(isClient && orderInfo) &&
                                    <PDFDownloadLink document={<InvoiceDocument orderInfo={orderInfo} data={data} />} fileName="invoice.pdf">
                                        {({ loading }) => (loading ? 'Loading invoice ...' : (successDownloadInvoiceButtonText || 'Download receipt'))}
                                    </PDFDownloadLink>
                                }
                                {/* <Link href={'#'}>Download receipt</Link> */}
                            </div>
                        </div>
                        {(successBackHomeText || successBackHomeButtonText) && <div className="backHome">
                            <p>{successBackHomeText} <Link href={'/'}>{successBackHomeButtonText || "Back home"}</Link></p>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SucessSec;