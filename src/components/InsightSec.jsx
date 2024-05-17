import Image from "next/image";
import Link from "next/link";
import stripbox1 from '@/asset/images/stripbox1.png';

const InsightSec = ({insightsHeading,insightsReadMoreLinkText,insightsAllInsightsLink,latest3Posts}) => {
    if(latest3Posts){
        return (
            <>
                <div className="insightWrap">
                    <div className="container">
                        <div className="insightSec">
                            {insightsHeading && <div className="insightHead">
                                <h3>{insightsHeading}</h3>
                            </div>}
                            <div className="row">
                                {latest3Posts.map((post,index) => {
                                    console.log(post)
                                    const {title,uri,categories,featuredImage} = post;
                                    return (
                                        <div className="col-lg-4" key={index}>
                                            <div class="insightBox">
                                                {featuredImage?.node && <div class="boxImage">
                                                    <Image src={featuredImage?.node?.sourceUrl} width={416} height={278} alt="stripbox1"></Image>
                                                </div>}
                                                <div class="boxText">
                                                    {categories?.nodes && <div class="lebalText">
                                                        {categories?.nodes.map((cat,index) => {
                                                            return (
                                                                <span key={index}>{cat.name}</span>
                                                            )
                                                        })}
                                                    </div>}
                                                    <div class="headTitle">
                                                        <h5>{title}</h5>
                                                    </div>
                                                    <div class="btnbox">
                                                        <Link href={uri}>{insightsReadMoreLinkText && "Read more"}</Link>
                                                    </div>
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