import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useRef } from "react";

const ReviewSec = () => {

    const swiperRef = useRef();
	const sliderSettings = {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 1,
		},
        1500: {
			slidesPerView: 2,
		},
	};

    return (
        <>
            <div className="reviewBox">
                
                    <div className="benefitHead">
                        <h3>Reviews</h3>
                    </div>
                    <div className="reviewSlider">
                        <Swiper className="swiper_slider"
                            loop={false}
                            slidesPerView={2}
                            spaceBetween={20}
                            breakpoints={sliderSettings}
                            centeredSlides={true}
                            // navigation={true}
                            // modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            <SwiperSlide>
                                <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>Jyoti Thakur</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>This power strip is a game-changer. With 10 outlets, surge protection, and a sturdy build, it's perfect for my home office. The long cord is a plus, and the LED indicators are handy. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip. While it's a bit bulky, the benefits far outweigh the minor inconvenience. I highly recommend it for anyone looking to upgrade their power strip... <Link href={'#'}>Read More</Link></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>rohit mahadeshwar</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>I recently purchased this power strip for my home office, and I couldn't be happier with the results. As someone who relies on multiple electronic devices and peripherals to get through the workday, finding the right power strip was crucial. This one exceeded my expectations in every way. This one exceeded my expectations in every way.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>mahindra bhairat</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>This power strip is fantastic. It offers plenty of outlets, surge protection, and a solid build. The long cord and LED indicators are handy.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>mahindra bhairat</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>This power strip is fantastic. It offers plenty of outlets, surge protection, and a solid build. The long cord and LED indicators are handy.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>mahindra bhairat</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>This power strip is fantastic. It offers plenty of outlets, surge protection, and a solid build. The long cord and LED indicators are handy.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="box_slider">
                                    <div className="text_box_slider">
                                        <span>mahindra bhairat</span>
                                    </div>
                                    <div className="text_slider_dtl">
                                        <p>This power strip is fantastic. It offers plenty of outlets, surge protection, and a solid build. The long cord and LED indicators are handy.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="switer_btn">
                            <button onClick={() => swiperRef.current?.slidePrev()} className="group">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2" />
                                    <path d="M18 27L11 20M11 20L18 13M11 20L29 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button onClick={() => swiperRef.current?.slideNext()} className="group">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2" />
                                    <path d="M22 13L29 20M29 20L22 27M29 20L11 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default ReviewSec;