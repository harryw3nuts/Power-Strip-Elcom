import Link from "next/link";
import Image from "next/image";
import Twitter from '@/components/Svgs/Twitter';
import Linkedin from "@/components/Svgs/Linkedin";
import Facebook from "@/components/Svgs/Facebook";
import Youtube from "./Svgs/Youtube";
import { useRouter } from "next/router";


const Footer = ({ footerCopyrightInfo, footerElcomLink, twitterUri, linkedinUri, facebookUri, youtubeUri }) => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();
    const route = router?.route;

    if ((footerCopyrightInfo || footerElcomLink || twitterUri || linkedinUri || youtubeUri) && (route == '/' || route == '/checkout')) {
        return (
            <>
                <footer className="footerNav">
                    <div className="footerBar">
                        <div className="container">
                            <div className="footerSec">
                                {footerCopyrightInfo && <div className="nameSec">
                                    <span>{footerCopyrightInfo.replace(/%s/g, currentYear)}</span>
                                </div>}
                                {footerElcomLink &&
                                    <div className="webLink">
                                        <Link href={footerElcomLink.url} target={footerElcomLink.target}>{footerElcomLink.title}</Link>
                                    </div>
                                }
                                {(twitterUri.trim() != '' || linkedinUri.trim() != '' || facebookUri.trim() != '' || youtubeUri.trim() != '') && <div className="socialLink">
                                    
                                        <ul>
                                            {twitterUri && <li><Link href={twitterUri} target="_blank"><Twitter/></Link></li>}
                                            {linkedinUri && <li><Link href={linkedinUri} target="_blank"><Linkedin/></Link></li>}
                                            {facebookUri && <li><Link href={facebookUri} target="_blank"><Facebook/></Link></li>}
                                            {youtubeUri && <li><Link href={youtubeUri} target="_blank"><Youtube/></Link></li>}
                                        </ul>
                                    
                                </div>}
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
    return ''
}

export default Footer;