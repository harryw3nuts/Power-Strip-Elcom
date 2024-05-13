import Link from "next/link";
import Image from "next/image";
import Twitter from '@/components/Svgs/Twitter';
import Linkedin from "@/components/Svgs/Linkedin";
import Facebook from "@/components/Svgs/Facebook";
import Youtube from "./Svgs/Youtube";


const Footer = () => {
    return (
        <>
        <footer className="footerNav">
            <div className="footerBar">
                <div className="container">
                    <div className="footerSec">
                        <div className="nameSec">
                            <span>© Elcom International 2023</span>
                        </div>
                        <div className="webLink">
                            <Link href={'#'}>elcom-in.com</Link>
                        </div>
                        <div className="socialLink">
                            <ul>
                                <li><Link href="#"><Twitter/></Link></li>
                                <li><Link href="#"><Linkedin/></Link></li>
                                <li><Link href="#"><Facebook/></Link></li>
                                <li><Link href="#"><Youtube/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;