import Link from "next/link";
import Image from "next/image";
import leftstrip from "@/asset/images/leftstrip.png";
import rightstrip from "@/asset/images/rightstrip.png";

Link

const Banner = () => {
    return (
        <>
            <div className="brackerwrap">
                <div className="brackerInner">
                    <div className="brackerleft">
                        <Image src={leftstrip} width={681} height={454} alt="leftstrip"></Image>
                    </div>
                    <div className="brackerright">
                        <Image src={rightstrip} width={582} height={402} alt="rightstrip"></Image>
                    </div>
                    <div className="container">
                        <div className="brackerdtl">
                            <h1>The Ultimate Power Strip for All Your Needs</h1>
                            <p>Power your space with our innovative Power Strip. Experience advanced features and seamless power for all your devices.</p>
                            <div className="btnbox">
                                <Link href={'#'}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;