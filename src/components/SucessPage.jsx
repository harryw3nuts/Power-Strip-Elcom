import Image from "next/image";
import Link from "next/link";
import sucess from "@/asset/images/sucess.svg";



const SucessSec = () => {
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
                            <Link href={'#'}>Download receipt</Link>
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