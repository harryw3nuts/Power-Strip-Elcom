import Image from "next/image";

const MobileTextColor = ({powerStripMobileImage,powerStripleftText,powerStriprightText}) => {
    if(powerStripMobileImage || powerStripleftText || powerStriprightText){
        return(
            <div className="mobileText">
                <div className="container">
                    <div className="mobileGrp">
                        {powerStripMobileImage && <div className="mobileImg">
                            <Image src={powerStripMobileImage?.sourceUrl} width={1376} height={688} alt="PsImage"></Image>
                        </div>}
                        {(powerStripleftText || powerStriprightText) && <div className="psText">
                            {powerStripleftText && <h2>{powerStripleftText}</h2>}
                            {powerStriprightText && <h2 className="heading2">{powerStriprightText}</h2>}
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

export default MobileTextColor;