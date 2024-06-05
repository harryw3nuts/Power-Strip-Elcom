import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import React, { Component } from "react";
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Autoplay } from "swiper/modules";

const ReviewSec = ({reviewsHeading,reviewsInfo}) => {

    const ArrowLeft = (props) => (
		<button {...props} className="left group">
			  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5147 1.51472L2.02944 10L10.5147 18.4853" stroke="#101010" strokeWidth="1.5" />
        </svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right group">
			  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48528 1.51472L9.97056 10L1.48528 18.4853" stroke="#101010" strokeWidth="1.5" />
        </svg>
		</button>
	);

    var settings = {
        dots: true,
        arrows: true,
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay:true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        animation:true,
        prevArrow: <ArrowLeft />,
		    nextArrow: <ArrowRight />,
        responsive: [
			{
				breakpoint: 1399,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1300,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
			  breakpoint: 1199,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
                centerMode:false,
                centerPadding: 0,
                slidesToScroll:1,
			  }
			}
		]
	
        
        
        // cssEase: 'linear'
      };

      const longText = "This power strip is a game-changer. With 10 outlets, surge protection, and a sturdy build, it's perfect for my home office. The long cord is a plus, and the LED indicators are handy. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip...the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip...";


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
                                        {/* <p>{description}{des_length > 80 && (<>{'...'} <Link href={'#'}>Read More</Link></>)}</p> */}
                                        <ReactReadMoreReadLess
                                            charLimit={450}
                                            readMoreText={"Read more"}
                                            readLessText={"Read less"}
                                            readMoreClassName="read-more-less--more"
                                            readLessClassName="read-more-less--less"
                                        >
                                            {description}
                                        </ReactReadMoreReadLess>
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