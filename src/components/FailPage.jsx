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
                        <h2>Your Payment is Successful!</h2>
                        <p>Thank you for your payment. An automated payment receipt will be sent to your registered email.</p>
                        <div className="btnbox">
                            <Link href={'#'}>Download receipt</Link>
                        </div>
                    </div>
                    <div className="backHome">
                        <p>Page while be automatically redirected to the main page or click button <Link href={'#'}>Back home</Link></p>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default FailedSec;