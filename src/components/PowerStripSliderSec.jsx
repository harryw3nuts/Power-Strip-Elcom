import Link from "next/link";
import PowerStripSlider from "./PowerStripSlider";

const PowerStripSliderSec = ({ selectTestimonials }) => {

  return (
    <div className="powerstrip-slidersec-main">
      <div className="powerstrip-slidersec-main-wrap">
        <div className="row justify-content-center">
          <div className="col-lg-3">
              <div className="powerstrip-slider-text">
                <h3>Explore our <br /> Power Strip</h3>
                <div className="btnbox">
                  <Link href="#" className="border-btn blue-fill" >Buy now</Link>
                </div>
              </div>
          </div>
          <div className="col-lg-7">
              <PowerStripSlider />
          </div>
        </div>
      </div>
    </div>
  )

};

export default PowerStripSliderSec;
