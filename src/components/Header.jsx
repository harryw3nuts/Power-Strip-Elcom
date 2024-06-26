import { scrollToSection } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ headerLogo, menuInfo, ctaOneInfo, ctaTwoInfo }) => {
    const router = useRouter();
    const route = router?.route;
    return (
        <>
            <header className="navigationBar">
                <div className="navWrap">
                    <div className="container">
                        <div className="navBar">
                            {headerLogo?.sourceUrl && <div className="navLogo">
                                <Link href="/">
                                    <Image src={headerLogo?.sourceUrl} alt="Logo" width={43} height={40} />
                                </Link>
                            </div>}
                            {(menuInfo && (route != '/checkout')) && <div className="navInner">
                                <ul>
                                    {menuInfo.map((menu, index) => {
                                        if (menu?.scrollToSectionLink) {
                                            return (
                                                <li key={index}><Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(menu?.link?.url, route) }}>{menu?.link?.title}</Link></li>
                                            )
                                        } else {
                                            return (
                                                <li key={index}><Link href={menu?.link?.url} target={menu?.link?.target}>{menu?.link?.title}</Link></li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>}
                            {(ctaOneInfo || ctaTwoInfo) && <div className="navBtn">
                                <ul>
                                    {ctaOneInfo && <li><Link href={ctaOneInfo.url == '#' ? process.env.NEXT_PUBLIC_ELCOM_CONTACT_PAGE_URL : ctaOneInfo.url} target={ctaOneInfo.url == '#' ? '_blank' : ctaOneInfo.target}>{ctaOneInfo.title}</Link></li>}
                                    {(ctaTwoInfo && route != '/checkout') && <li className="buyNow"><Link href={"#"} onClick={(e) => { e.preventDefault(); scrollToSection(ctaTwoInfo.url, route) }}>{ctaTwoInfo.title}</Link></li>}
                                    {/* {ctaTwoInfo && <li className="buyNow"><Link href={ctaTwoInfo.url} target={ctaTwoInfo.target}>{ctaTwoInfo.title}</Link></li>} */}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;