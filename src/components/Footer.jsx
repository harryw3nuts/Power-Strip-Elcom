import Link from "next/link";
import Image from "next/image";
import twitter from '@/asset/images/twitter.svg';
import linkedin from '@/asset/images/linkedin.svg';
import facebook from '@/asset/images/facebook.svg';
import youtube from '@/asset/images/youtube.svg';

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
                                <li><Link href={'#'}><Image src={twitter} alt="twitter"/></Link></li>
                                <li><Link href={'#'}><Image src={linkedin} alt="linkedin"/></Link></li>
                                <li><Link href={'#'}><Image src={facebook} alt="facebook"/></Link></li>
                                <li><Link href={'#'}><Image src={youtube} alt="youtube"/></Link></li>
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