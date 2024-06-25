import Image from "next/image";
import Link from "next/link";

const InsightSec = ({ insightsHeading, insightsReadMoreLinkText, insightsAllInsightsLink, latest3Posts, insightsInfo }) => {
    if (insightsInfo) {
        return (
            <div className="insightWrap">
                <div className="container">
                    <div className="insightSec">
                        {insightsHeading && <div className="insightHead">
                            <h3>{insightsHeading}</h3>
                        </div>}
                        <div className="row">
                            {insightsInfo.map((post, index) => {
                                const { title, link, categoryName, image } = post;
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <Link href={link} target="_blank">
                                            <div className="insightBox">
                                                {image && <div className="boxImage">
                                                    <Image src={image?.sourceUrl} width={416} height={278} alt="stripbox1"></Image>
                                                </div>}
                                                <div className="boxText">
                                                    {categoryName && <div className="lebalText">
                                                        <span>{categoryName}</span>
                                                    </div>}
                                                    <div className="headTitle">
                                                        <h5>{title}</h5>
                                                    </div>
                                                    {link && <div className="btnbox">
                                                        <span>{insightsReadMoreLinkText && "Read more"}</span>
                                                    </div>}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        {insightsAllInsightsLink && <div className="boxbtn">
                            <Link href={insightsAllInsightsLink.url} target={insightsAllInsightsLink.target}>{insightsAllInsightsLink.title}</Link>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

export default InsightSec;