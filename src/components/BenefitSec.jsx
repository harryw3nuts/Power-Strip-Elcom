import Image from "next/image"
import benefitimg1 from '@/asset/images/icon_1.svg';

const BenefitSec = () => {
    return (
        <>
            <div className="benefitWrap">
                <div className="container">
                    <div className="benefitGrp">
                        <div className="benefitHead">
                            <h3>Benefits</h3>
                        </div>
                        <div className="benefitsecBox">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="benefitBox">
                                        <div className="benefitText">
                                            <span className="lebalText">01</span>
                                            <h5>Durable for Decades</h5>
                                        </div>
                                        <div className="benefitImg">
                                            <Image src={benefitimg1} alt="benefitimg1"></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="benefitBox">
                                        <div className="benefitText">
                                            <span className="lebalText">01</span>
                                            <h5>Durable for Decades</h5>
                                        </div>
                                        <div className="benefitImg">
                                            <Image src={benefitimg1} alt="benefitimg1"></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="benefitBox">
                                        <div className="benefitText">
                                            <span className="lebalText">01</span>
                                            <h5>Durable for Decades</h5>
                                        </div>
                                        <div className="benefitImg">
                                            <Image src={benefitimg1} alt="benefitimg1"></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="benefitBox">
                                        <div className="benefitText">
                                            <span className="lebalText">01</span>
                                            <h5>Durable for Decades</h5>
                                        </div>
                                        <div className="benefitImg">
                                            <Image src={benefitimg1} alt="benefitimg1"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitSec;