import Image from "next/image";
import Link from "next/link";
import fail from "@/asset/images/fail.svg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const FailedSec = ({data}) => {
    const ctx = useContext(ThemeContext);
    // console.log(ctx);
    // console.log("FIAL ",data );
    const {failBackHomeButtonText,failBackHomeText,failDescription,failHeading,failImage,failRetryButtonText} = data;
    return (
        <>
        <div className="sucessWrap">
            <div className="container">
                <div className="sucessDtl">
                    {failImage?.sourceUrl && <div className="sucessImg">
                        <Image src={failImage?.sourceUrl} width={363} height={236} alt="sucess"></Image>
                    </div>}
                    <div className="sucessText">
                        {failHeading && <h2>{failHeading}</h2>}
                        {failDescription && <p>{failDescription}</p>}
                        <p>Order ID: {ctx?.paymentErrorMessage?.metadata?.order_id}</p>
                        <p>Payment ID: {ctx?.paymentErrorMessage?.metadata?.payment_id}</p>
                        <div className="btnbox">
                            <Link href={'/'}>{failRetryButtonText || "Retry"}</Link>
                        </div>
                    </div>
                    {(failBackHomeText || failBackHomeButtonText ) && <div className="backHome">
                        <p>{failBackHomeText} <Link href={'/'}>{failBackHomeButtonText && "Back home"}</Link></p>
                    </div>}
                </div>
            </div>
        </div> 
        </>
    )
}

export default FailedSec;