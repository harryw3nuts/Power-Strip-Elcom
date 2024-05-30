
import Image from "next/image";
import Link from "next/link";
import mobileImg from "@/asset/images/mobileImg.png";
import React from "react";
import Slider from "react-slick";
import vactor1 from "@/asset/images/vactor1.png";
import vactor2 from "@/asset/images/vactor2.png";





const MobileFutureSlider = () => {

    const ArrowLeft = (props) => (
		<button {...props} className="left group">
			<svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right group">
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
      };
    return (
        <>
        <div className="mobileSlider">
            
                <div className="mobileGrp">
                    <div className="mobileFuture">
                        <div className="mobileTitle">
                            <h2>Features</h2>
                        </div>
                    </div>
                    <div className="sliderWrap">
                        <Slider {...settings}>
                            <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textOne">
                                    <h3>Surge & Overcurrent Protection</h3>
                                    <span>Inbuilt MOV provides surge protection</span>
                                </div>
                                <div className="lineBox1">
                                    <Image src={vactor1} alt="vactor1"></Image>
                                </div>
                            </div>
                            <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textTwo">
                                    <h3>Heavy Duty Copper Cable</h3>
                                    <span>0.75 sq. mm Heavy-duty 1.8m copper wire</span>
                                </div>
                                <div className="lineBox2">
                                    <Image src={vactor1} alt="vactor1" height={550}></Image>
                                </div>
                            </div>
                            <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textThree">
                                    <h3>Four Universal Sockets</h3>
                                    <span>Suitable for all 6 Ampere Plugs</span>
                                </div>
                                <div className="lineBox3">
                                    <Image src={vactor1} alt="vactor1" height={400}></Image>
                                </div>
                            </div>
                            <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textfour">
                                    <h3>Shock & Fire Resistant Material</h3>
                                    <span>Fire Resistant V2 Grade Nylon Plastic body</span>
                                </div>
                                <div className="lineBox4">
                                    <Image src={vactor1} alt="vactor1" height={350}></Image>
                                </div>
                            </div>
                            <div className="textBoxgrp">
                                <div className="mobileImgBox">
                                    <Image src={mobileImg} alt="mobileImg"></Image>
                                </div>
                                <div className="textFive">
                                    <h3>Illuminated Push Button Switch</h3>
                                    <span>Indicates power ON status</span>
                                </div>
                                <div className="lineBox5">
                                    <Image src={vactor1} alt="vactor1" height={450}></Image>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            
        </div>
        </>
    )
}

export default MobileFutureSlider;