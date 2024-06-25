import Image from "next/image";

const StripBox = ({ otherHeading, otherProductInfo }) => {
    if (otherProductInfo) {
        return (
            <div className="stripWrap">
                <div className="container">
                    <div className="stripSec">
                        {otherHeading && <div className="stripHead">
                            <h3>{otherHeading}</h3>
                        </div>}
                        {otherProductInfo &&
                            <div className="row">
                                {otherProductInfo.map((product, index) => {
                                    const { productName, productImage, largeWidthBox } = product;
                                    return (
                                        <div className={`col-lg-${largeWidthBox ? 6 : 3} col-${largeWidthBox ? 12 : 6}`} key={index}>
                                            <div className="stripImg">
                                                {productImage && <div className="stripBox">
                                                    <Image src={productImage.sourceUrl} alt="stripimg1" width={625} height={200}></Image>
                                                </div>}
                                                {productName && <div className="stripText">
                                                    <span>{productName}</span>
                                                </div>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

export default StripBox;