import Image from "next/image"

const BenefitSec = ({ benefitsHeading, benefitsInfo }) => {
    if (benefitsInfo) {
        return (
            <div className="benefitWrap" id="benefitsSec">
                <div className="container">
                    <div className="benefitGrp">
                        {benefitsHeading && <div className="benefitHead">
                            <h3>{benefitsHeading}</h3>
                        </div>}
                        <div className="benefitsecBox">
                            <div className="row">
                                {benefitsInfo.map((benefit, index) => {
                                    const { title, image } = benefit;
                                    return (
                                        <div className="col-lg-6 col-6 col-xl-3" key={index}>
                                            <div className="benefitBox">
                                                <div className="benefitText">
                                                    <span className="lebalText">{(index + 1) < 10 ? `0${index + 1}` : index + 1}</span>
                                                    {title && <h5>{title}</h5>}
                                                </div>
                                                {image && <div className="benefitImg">
                                                    <Image src={image?.sourceUrl} width={150} height={150} alt="benefitimg1"></Image>
                                                </div>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

export default BenefitSec;