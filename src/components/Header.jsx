import Image from "next/image";
import Link from "next/link";
// import Logo from "@/asset/images/Logo.svg";
import { Fragment } from "react";
import Logo from "@/asset/images/Logo.svg";

const Header = ({ headerLogo, ctaOneInfo, ctaTwoInfo }) => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 90; // adjust this value to account for the height of the header or any other fixed element
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        // <header>header</header>
        <header className="navigationBar">
            <div className="navWrap">
                <div className="container">
                    <div className="navBar">
                        <div className="navLogo">
                            <Link href="/">
                                {/* <Image src={headerLogo?.sourceUrl} alt="Logo" width={43} height={40}></Image> */}
                                <Image src={Logo} alt="Logo" width={43} height={40}></Image>
                            </Link>
                        </div>
                        <div className="navInner">
                            <ul>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="#" onClick={(e) => { e.preventDefault();scrollToSection("detailSec") }}>Details</Link></li>
                                <li><Link href="#" onClick={(e) => { e.preventDefault();scrollToSection("featuresSec") }}>Features</Link></li>
                                <li><Link href="#" onClick={(e) => { e.preventDefault();scrollToSection("benefitsSec") }}>Benefits</Link></li>
                                <li><Link href="#" onClick={(e) => { e.preventDefault();scrollToSection("highlightSec") }}>Highlights</Link></li>
                                <li><Link href="#" onClick={(e) => { e.preventDefault();scrollToSection("faqSec") }}>FAQs</Link></li>
                            </ul>
                        </div>
                        {(ctaOneInfo || ctaTwoInfo) && <div className="navBtn">
                            <ul>
                                {ctaOneInfo && <li><Link href={ctaOneInfo.url} target={ctaOneInfo.target}>{ctaOneInfo.title}</Link></li>}
                                {ctaTwoInfo && <li className="buyNow"><Link href={"#"} onClick={(e) => { e.preventDefault();scrollToSection("detailSec") }}>{ctaTwoInfo.title}</Link></li>}
                                {/* {ctaTwoInfo && <li className="buyNow"><Link href={ctaTwoInfo.url} target={ctaTwoInfo.target}>{ctaTwoInfo.title}</Link></li>} */}
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;