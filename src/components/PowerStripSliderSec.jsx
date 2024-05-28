import Link from "next/link";
import PowerStripSlider from "./PowerStripSlider";

const PowerStripSliderSec = ({ exploreHeading, exploreButtonInfo, exploreImagesInfo }) => {
  if(exploreImagesInfo){
    return (
      <div className="powerstrip-slidersec-main" id="highlightSec">
        <div className="powerstrip-slidersec-main-wrap">
          <div className="row justify-content-center">
            {(exploreHeading && exploreButtonInfo) && <div className="col-lg-3 col-md-4">
              <div className="powerstrip-slider-text">
                {exploreHeading && <h3 dangerouslySetInnerHTML={{ __html: exploreHeading }}></h3>}
                {exploreButtonInfo && <div className="btnbox">
                  <Link href={exploreButtonInfo.url} target={exploreButtonInfo.target} className="border-btn blue-fill" >{exploreButtonInfo.title}</Link>
                </div>}
              </div>
            </div>}
            {exploreImagesInfo && <div className="col-lg-7 col-md-7">
              <PowerStripSlider imagesInfo={exploreImagesInfo}/>
            </div>}
          </div>
        </div>
      </div>
    )
  }
  return ''
};

export default PowerStripSliderSec;
