import Image from "next/image";
import PsImage from "@/asset/images/ps-text-image.png";





const MobileTextColor = () => {
    return(
        <>
        <div className="mobileText">
            <div className="container">
                <div className="mobileGrp">
                    <div className="mobileImg">
                        <Image src={PsImage} alt="PsImage"></Image>
                    </div>
                    <div className="psText">
                        <h2>Power</h2>
                        <h2 className="heading2">Strip</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MobileTextColor;