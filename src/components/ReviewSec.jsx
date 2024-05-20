import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import React, { Component } from "react";
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const ReviewSec = () => {

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

      const longText = "This power strip is a game-changer. With 10 outlets, surge protection, and a sturdy build, it's perfect for my home office. The long cord is a plus, and the LED indicators are handy. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip...the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip...";


    return (
        <>
            <div className="reviewBox">
                
                <div className="benefitHead">
                    <h3>Reviews</h3>
                </div>
                <div className="reviewSlider">
                    <Slider {...settings}>
                        <div className="box_slider">
                            <div className="text_box_slider">
                                <span>Jyoti Thakur</span>
                            </div>
                            <div className="text_slider_dtl">
                                <ReactReadMoreReadLess
                                            charLimit={475}
                                            readMoreText={"Read more"}
                                            readLessText={"Read less"}
                                            readMoreClassName="read-more-less--more"
                                            readLessClassName="read-more-less--less"
                                        >
                                            {longText}
                                        </ReactReadMoreReadLess>
                            </div>
                        </div>

                        <div className="box_slider">
                            <div className="text_box_slider">
                                <span>rohit mahadeshwar</span>
                            </div>
                            <div className="text_slider_dtl">
                                <p>I recently purchased this power strip for my home office, and I couldn't be happier with the results. As someone who relies on multiple electronic devices and peripherals to get through the workday, finding the right power strip was crucial. This one exceeded my expectations in every way. This one exceeded my expectations in every way.</p>
                            </div>
                        </div>

                        <div className="box_slider">
                            <div className="text_box_slider">
                                <span>mahindra bhairat</span>
                            </div>
                            <div className="text_slider_dtl">
                                <p>This power strip is fantastic. It offers plenty of outlets, surge protection, and a solid build. The long cord and LED indicators are handy.</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default ReviewSec;