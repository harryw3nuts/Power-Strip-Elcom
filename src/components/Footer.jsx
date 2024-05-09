import Link from "next/link";
import Image from "next/image";
import twitter from '@/asset/images/twitter.svg';
import linkedin from '@/asset/images/linkedin.svg';
import facebook from '@/asset/images/facebook.svg';
import youtube from '@/asset/images/youtube.svg';

const Footer = ({footerCopyrightInfo,footerElcomLink,twitterUri,linkedinUri,facebookUri,youtubeUri}) => {
    const currentYear = new Date().getFullYear();

    if(footerCopyrightInfo || footerElcomLink || twitterUri || linkedinUri || youtubeUri){
        return (
            <>
            <footer className="footerNav">
                <div className="footerBar">
                    <div className="container">
                        <div className="footerSec">
                            {footerCopyrightInfo && <div className="nameSec">
                                <span>{footerCopyrightInfo.replace(/%s/g,currentYear)}</span>
                            </div>}
                            {footerElcomLink && 
                            <div className="webLink">
                                <Link href={footerElcomLink.url} target={footerElcomLink.target}>{footerElcomLink.title}</Link>
                            </div>
                            }
                            {(twitterUri.trim() != '' || linkedinUri.trim() != '' || facebookUri.trim() != '' || youtubeUri.trim() != '') && <div className="socialLink">
                                <ul>
                                    {twitterUri && <li><Link href={twitterUri} target="_blank"><Image src={twitter} alt="twitter"/></Link></li>}
                                    {linkedinUri && <li><Link href={linkedinUri} target="_blank"><Image src={linkedin} alt="linkedin"/></Link></li>}
                                    {facebookUri && <li><Link href={facebookUri} target="_blank"><Image src={facebook} alt="facebook"/></Link></li>}
                                    {youtubeUri && <li><Link href={youtubeUri} target="_blank"><Image src={youtube} alt="youtube"/></Link></li>}
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