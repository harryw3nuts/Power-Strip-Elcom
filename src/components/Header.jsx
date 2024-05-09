import Image from "next/image";
import Link from "next/link";
// import Logo from "@/asset/images/Logo.svg";
import { Fragment } from "react";
import Logo from "@/asset/images/Logo.svg";





const Header = () => {
    return (
        // <header>header</header>
        <header className="navigationBar">
            <div className="navWrap">
                <div className="container">
                    <div className="navBar">
                        <div className="navLogo">
                            <Link href="#">
                                <Image src={Logo} alt="Logo" width={43} height={40}></Image>
                            </Link>
                        </div>
                        <div className="navInner">
                            <ul>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Details</Link></li>
                                <li><Link href="#">Features</Link></li>
                                <li><Link href="#">Benefits</Link></li>
                                <li><Link href="#">Highlights</Link></li>
                                <li><Link href="#">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="navBtn">
                            <ul>
                                <li><Link href="#">Contact</Link></li>
                                <li className="buyNow"><Link href="#">Buy now</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;