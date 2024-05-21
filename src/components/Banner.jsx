import Link from "next/link";
import Image from "next/image";
import leftstrip from "@/asset/images/leftstrip.png";
import rightstrip from "@/asset/images/rightstrip.png";

const Banner = ({bannerHeading,bannerSubHeading,bannerLeftSideImage,bannerRightSideImage,bannerButtonInfo}) => {
    return (
        <>
            <div className="brackerwrap">
                <div className="brackerInner">
                    {bannerLeftSideImage && <div className="brackerleft">
                        <Image src={bannerLeftSideImage?.sourceUrl} width={520} height={781} alt="leftstrip"></Image>
                    </div>}
                    {bannerRightSideImage && <div className="brackerright">
                        <Image src={bannerRightSideImage?.sourceUrl} width={364} height={676} alt="rightstrip"></Image>
                    </div>}
                    <div className="container">
                        <div className="brackerdtl">
                            {bannerHeading && <h1>{bannerHeading}</h1>}
                            {bannerSubHeading && <p>{bannerSubHeading}</p>}
                            {bannerButtonInfo && <div className="btnbox">
                                <Link href={bannerButtonInfo.url} target={bannerButtonInfo.target}>{bannerButtonInfo.title}</Link>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;