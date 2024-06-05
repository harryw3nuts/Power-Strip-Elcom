
import Image from "next/image";
import Link from "next/link";
import mobileImg from "@/asset/images/mobileImg.png";

import Slider from "react-slick";
import vactor1 from "@/asset/images/vactor1.png";
import vactor2 from "@/asset/images/vactor2.png";
import React, { useState } from "react";





const MobileFutureSlider = ({featuresHeading,featuresImage,featuresImageMobile,features1Heading,features2Heading,features3Heading,features4Heading,features5Heading,features1Subheading,features2Subheading,features3Subheading,features4Subheading,features5Subheading}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const ArrowLeft = (props) => {
        return (
		<button {...props}  className={`left group ${currentSlide === 0 ? "disabled" : ""}`}>
			<svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>
		</button>
	)};
	const ArrowRight = (props) => (
		<button {...props}  className={`right group ${(currentSlide + 1) === props.slideCount ? "disabled" : ""}`}>
			<svg className="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
		</button>
	);

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
		nextArrow: <ArrowRight />,
        fade:true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      };
    return (
        <>
        <div className="mobileSlider">
            
                <div className="mobileGrp">
                    {featuresHeading && <div className="mobileFuture">
                        <div className="mobileTitle">
                            <h2>{featuresHeading}</h2>
                        </div>
                    </div>}
                    <div className="sliderWrap">
                        <Slider {...settings}>
                            {(features1Heading || features1Subheading || featuresImageMobile) && <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={featuresImageMobile.sourceUrl} width={274} height={525} alt="mobileImg"></Image>
                                </div>
                                <div className="textOne">
                                    {features1Heading && <h3>{features1Heading}</h3>}
                                    {features1Subheading && <span>{features1Subheading}</span>}
                                </div>
                                <div className="lineBox1">
                                    <Image src={vactor1} alt="vactor1"></Image>
                                </div>
                            </div>}
                            {(features2Heading || features2Subheading) && <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textTwo">
                                    {features2Heading && <h3>{features2Heading}</h3>}
                                    {features2Subheading && <span>{features2Subheading}</span>}
                                </div>
                                <div className="lineBox2">
                                    <Image src={vactor1} alt="vactor1" height={550}></Image>
                                </div>
                            </div>}
                            {(features3Heading || features3Subheading) && <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textThree">
                                    {features3Heading && <h3>{features3Heading}</h3>}
                                    {features3Subheading && <span>{features3Subheading}</span>}
                                </div>
                                <div className="lineBox3">
                                    <Image src={vactor1} alt="vactor1" height={400}></Image>
                                </div>
                            </div>}
                            {(features4Heading || features4Subheading) && <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textfour">
                                    {features4Heading && <h3>{features4Heading}</h3>}
                                    {features4Subheading && <span>{features4Subheading}</span>}
                                </div>
                                <div className="lineBox4">
                                    <Image src={vactor1} alt="vactor1" height={350}></Image>
                                </div>
                            </div>}
                            {(features5Heading || features5Subheading) && <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textFive">
                                    {features5Heading && <h3>{features5Heading}</h3>}
                                    {features5Subheading && <span>{features5Subheading}</span>}
                                </div>
                                <div className="lineBox5">
                                    <Image src={vactor1} alt="vactor1" height={450}></Image>
                                </div>
                            </div>}
                        </Slider>
                    </div>
                </div>
            
        </div>
        </>
    )
}

export default MobileFutureSlider;