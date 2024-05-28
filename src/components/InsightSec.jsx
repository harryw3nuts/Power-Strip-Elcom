import Image from "next/image";
import Link from "next/link";
import stripbox1 from '@/asset/images/stripbox1.png';

const InsightSec = ({insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,latest3Posts,insightsInfo}) => {
    if(insightsInfo){
        return (
            <>
                <div className="insightWrap">
                    <div className="container">
                        <div className="insightSec">
                            {insightsHeading && <div className="insightHead">
                                <h3>{insightsHeading}</h3>
                            </div>}
                            <div className="row">
                                {insightsInfo.map((post,index) => {
                                    // console.log(post)
                                    const {title,link,categoryName,image} = post;
                                    return (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div class="insightBox">
                                                {image && <div class="boxImage">
                                                    <Image src={image?.sourceUrl} width={416} height={278} alt="stripbox1"></Image>
                                                </div>}
                                                <div class="boxText">
                                                    {categoryName && <div class="lebalText">
                                                        <span>{categoryName}</span>
                                                    </div>}
                                                    <div class="headTitle">
                                                        <h5>{title}</h5>
                                                    </div>
                                                    {link && <div class="btnbox">
                                                        <Link href={link} target="_blank">{insightsReadMoreLinkText && "Read more"}</Link>
                                                    </div>}
                                                </div>
                                            </div>
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
            </>
        )
    }
    return ''
}

export default InsightSec;