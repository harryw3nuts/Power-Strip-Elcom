import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import React, { Component } from "react";
import React from "react";

const ReviewSec = ({reviewsHeading,reviewsInfo}) => {

    const ArrowLeft = (props) => (
		<button {...props} className="left group">
			<svg class="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right group">
			<svg class="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
		</button>
	);

    var settings = {
        dots: true,
        arrows: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        prevArrow: <ArrowLeft />,
		nextArrow: <ArrowRight />,
        
        
        // cssEase: 'linear'
      };
    return (
        <>
            <div className="reviewBox">
                {reviewsHeading && <div className="benefitHead">
                    <h3>{reviewsHeading}</h3>
                </div>}
                <div className="reviewSlider">
                    <Slider {...settings}>
                        {reviewsInfo.map((review,index) => {
                            const {name,description} = review;
                            const des_length = description.split(' ').length;
                            return (
                                <div className="box_slider" key={index}>
                                    {name && <div className="text_box_slider">
                                        <span>{name}</span>
                                    </div>}
                                    {description && <div className="text_slider_dtl">
                                        <p>{description}{des_length > 80 && (<>{'...'} <Link href={'#'}>Read More</Link></>)}</p>
                                    </div>}
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default ReviewSec;