import Image from "next/image";
import Link from "next/link";
import stripbox1 from '@/asset/images/stripbox1.png';

Image

const InsightSec = () => {
    return (
        <>
            <div className="insightWrap">
                <div className="container">
                    <div className="insightSec">
                        <div className="insightHead">
                            <h3>Power Strip Insights</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="insightBox">
                                    <div className="boxImage">
                                        <Image src={stripbox1} alt="stripbox1"></Image>
                                    </div>
                                    <div className="boxText">
                                        <div className="lebalText">
                                            <span>BLOG</span>
                                        </div>
                                        <div className="headTitle">
                                            <h5>Stay Plugged In: Choosing the Right Power Strip for Your Needs</h5>
                                        </div>
                                        <div className="btnbox">
                                            <Link href={'#'}>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="insightBox">
                                    <div className="boxImage">
                                        <Image src={stripbox1} alt="stripbox1"></Image>
                                    </div>
                                    <div className="boxText">
                                        <div className="lebalText">
                                            <span>BLOG</span>
                                        </div>
                                        <div className="headTitle">
                                            <h5>Stay Plugged In: Choosing the Right Power Strip for Your Needs</h5>
                                        </div>
                                        <div className="btnbox">
                                            <Link href={'#'}>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="insightBox">
                                    <div className="boxImage">
                                        <Image src={stripbox1} alt="stripbox1"></Image>
                                    </div>
                                    <div className="boxText">
                                        <div className="lebalText">
                                            <span>BLOG</span>
                                        </div>
                                        <div className="headTitle">
                                            <h5>Stay Plugged In: Choosing the Right Power Strip for Your Needs</h5>
                                        </div>
                                        <div className="btnbox">
                                            <Link href={'#'}>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxbtn">
                            <Link href={'#'}>read all insights</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsightSec;