import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import Image from 'next/image';
import thumb1 from '@/asset/images/thumb1.png';
import thumb2 from '@/asset/images/thumb2.png';
import thumb3 from '@/asset/images/thumb3.png';
import thumb4 from '@/asset/images/thumb4.png';
import futuremain from '@/asset/images/features-main-imge.png';
import stripimg3 from '@/asset/images/stripimg3.png';

import thumbfull1 from '@/asset/images/thumbfull1.png';
import flag from '@/asset/images/flag.svg';
import correct from '@/asset/images/correct.svg';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';






const PriceSec = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const swiperRef = useRef();

    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }

    // const [readMore , setReadMore] = useState(false);
    const longText = "Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy. Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy. ";

    return (
        <>

            <div className='priceImg'>
                <div className='container'>
                    <div className='priceWrapper'>
                        <div className='row'>
                            <div className='col-lg-1'>
                                <div className='priceSwiper'>
                                    <Swiper 
                                      onSwiper={setThumbsSwiper}
                                      spaceBetween={10}
                                      slidesPerView={4}
                                      freeMode={true}
                                      watchSlidesProgress={true}
                                      modules={[FreeMode, Navigation, Thumbs]}
                                      className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumbfull1} alt='thumbfull1' width={100} height={50} ></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={futuremain} alt='futuremain'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb3} alt='thumb3'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={stripimg3} alt='stripimg3'></Image>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    {/* <Swiper
                                        modules={[Thumbs]} 
                                        loop={true}
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumbfull1} alt='thumbfull1' width={100} height={50} ></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb2} alt='thumb2'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb3} alt='thumb3'></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbBox'>
                                                <Image src={thumb4} alt='thumb4'></Image>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper > */}
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='pricefullImg'>
                                    <Swiper
                                        spaceBetween={10}
                                        // navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                            }}
                                            onSlideChange={(swiper) => {
                                                setIsBeginning(swiper.isBeginning);
                                                setIsEnd(swiper.isEnd);
                                      }}
                                     onReachBeginning={() => setIsBeginning(true)}
                                     onReachEnd={() => setIsEnd(true)}
                                        className="mySwiper2"

                                    >
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumbfull1} alt='thumbfull1' width={727} height={200}></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={futuremain} alt='futuremain' width={727} height={400}></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={thumb3} alt='thumb3' width={727} height={400}></Image>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='thumbfullBox'>
                                                <Image src={stripimg3} alt='stripimg3' width={727} height={300}></Image>
                                            </div>
                                        </SwiperSlide>
                                    
                                    </Swiper>
                                    <div className="switer_btn">
                                        <button onClick={() => swiperRef.current?.slidePrev()} className={`group ${isBeginning ? 'disable_arrow' : ''}`}>
                                            <svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"/></svg>
                                        </button>
                                        <button onClick={() => swiperRef.current?.slideNext()} className={`group ${isEnd ? 'disable_arrow' : ''}`}>
                                            <svg className="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='priceList'>
                                    <div className='headSec'>
                                        <h4>Elcom Power Strip</h4>
                                        <span>₹ 1099/-</span>
                                    </div>
                                    <div className='colorQun'>
                                        <div className='colorSec'>
                                            <span className='textBlog'>Color</span>
                                            <div className='colorBtn'>
                                                <div className='difBtn'>
                                                    <label for="gray">
                                                        <input type="radio" id="gray" name="colors"/>
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div className='difBtn'>
                                                    <label for="red">
                                                        <input type="radio" id="red" name="colors" />
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div className='difBtn'>
                                                    <label for="yellow">
                                                        <input type="radio" id="yellow" name="colors" />
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='qunSec'>
                                            <span className='textBlog'>quantity</span>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                                </div>
                                                <input type="text" class="form-control" value={num} onChange={handleChange}/>
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='buyNow'>
                                        <button className='buybtn'>Buy Now</button>
                                    </div>
                                    <div className='warrantySec'>
                                        <div className='flagSec'>
                                            <ul>
                                                <li><i><Image src={flag} alt='flag'></Image></i></li>
                                                <li className='mii'>Made In India</li>
                                            </ul>
                                        </div>
                                        <div className='warGrp'>
                                            <ul>
                                                <li><i><Image src={correct} alt='correct'></Image></i></li>
                                                <li className='corr'>2 Years Warranty</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='productContent'>
                                        {/* <p>Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy.
                                         <Link href={'#'} onClick = {() => setReadMore(!readMore)}><ReadMore/></Link></p> */}
                                         <ReactReadMoreReadLess
                                            charLimit={200}
                                            readMoreText={"Read more"}
                                            readLessText={"Read less"}
                                            readMoreClassName="read-more-less--more"
                                            readLessClassName="read-more-less--less"
                                        >
                                            {longText}
                                        </ReactReadMoreReadLess>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='productDetail'>
                        <ul>
                            <li>
                                <span className='title'>Input Voltage</span>
                                <span className='value'>100-240V AC</span>
                            </li>
                            <li>
                                <span className='title'>Output Voltage</span>
                                <span className='value'>5V DC (USB), <br /> 120V AC (Outlets)</span>
                            </li>
                            <li>
                                <span className='title'>Power Rating</span>
                                <span className='value'>6A, 240V</span>
                            </li>
                            <li>
                                <span className='title'>Cord Length</span>
                                <span className='value'>6ft (1.8m)</span>
                            </li>
                            <li>
                                <span className='title'>Dimensions</span>
                                <span className='value'>11.5" x 2.5" x 1.2"</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    );
}

export default PriceSec;
