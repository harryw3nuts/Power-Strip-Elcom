import Image from "next/image";
import Link from "next/link";
import fail from "@/asset/images/fail.svg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const FailedSec = () => {
    const ctx = useContext(ThemeContext);
    console.log(ctx);
    return (
        <>
        <div className="sucessWrap">
            <div className="container">
                <div className="sucessDtl">
                    <div className="sucessImg">
                        <Image src={fail} alt="sucess"></Image>
                    </div>
                    <div className="sucessText">
                        <h2>Payment Failed!</h2>
                        <p>Unfortunately payment was rejected, seems like there was some trouble We are there with you, just hold back.</p>
                        <p>Order ID: {ctx?.paymentErrorMessage?.metadata?.order_id}</p>
                        <p>Payment ID: {ctx?.paymentErrorMessage?.metadata?.payment_id}</p>
                        <div className="btnbox">
                            <Link href={'/'}>Retry</Link>
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

export default FailedSec;