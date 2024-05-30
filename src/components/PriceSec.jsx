
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactReadMoreReadLess from "react-read-more-read-less";

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
import Swal from 'sweetalert2';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const PriceSec = ({ productData, sectionRef }) => {
    console.log("productData : ", productData)
    const { productExtraOptions, galleryImages, featuredImage } = productData;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const swiperRef = useRef();
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [productPrice, setProductPrice] = useState(productData?.price || 0);
    const router = useRouter();
    const { products, setProductsHandler } = useContext(ThemeContext);

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    const handleAttributeChange = (attributeName, value) => {
        setSelectedAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attributeName]: value,
        }));
    };

    const getMatchingVariation = () => {
        return productData?.variations?.nodes.find((variation) =>
            variation.attributes.nodes.every((attr) => {
                return selectedAttributes[attr.name] && selectedAttributes[attr.name] === attr.value
            })
        );
    };

    // const getMatchingVariation = () => {
    //     return productData.variations.nodes.find((variation) =>
    //         variation.attributes.nodes.every((attr) => {
    //             const selectedValue = selectedAttributes[attr.name];
    //             if (attr.name === 'pa_size' && selectedValue === '') {
    //                 // If the selected value for size is empty, consider it as a match
    //                 return true;
    //             }
    //             return selectedValue === attr.value;
    //         })
    //     );
    // };

    const buyNowHandler = () => {
        const matchingVariation = getMatchingVariation();

        console.log("matchingVariation : ", matchingVariation);
        if (matchingVariation == undefined && num <= 0) {
            Swal.fire({
                title: 'Attributes and Quantity is required!',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        } else if (matchingVariation == undefined && num > 0) {
            Swal.fire({
                title: 'Please select attribute!',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        } else if (matchingVariation != undefined && num <= 0) {
            Swal.fire({
                title: 'Quantity should be greater then 0',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        } else {
            matchingVariation.selectedQty = num;
            setProductsHandler(matchingVariation);
            router.push('/checkout')
        }
    }

    useEffect(() => {
        const matchingVariation = getMatchingVariation();
        if (matchingVariation != undefined) {
            setProductPrice(matchingVariation?.price)
        }
    }, [selectedAttributes])

    // const [readMore , setReadMore] = useState(false);
    const longText = "Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy. Our Power strip is crafted with premium materials like PC FR V2 Grade Plastic, Conductive Integral Brass Components, Heavy-duty Copper Wire, and Molded Plug with Copper Alloy. ";

    if (productData?.__typename == "VariableProduct") {
        return (
            <div className='priceImg' id="detailSec" ref={sectionRef}>
                <div className='container'>
                    <div className='priceWrapper'>
                        <div className='row'>
                            {(galleryImages?.nodes.length > 0 || featuredImage) &&
                                <div className='col-lg-2 col-md-2 col-xl-1'>
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
                                            {galleryImages?.nodes.map((image, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className='thumbBox'>
                                                            <Image src={image?.sourceUrl} alt='thumbfull1' width={100} height={50} ></Image>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                            {(galleryImages?.nodes.length == 0 && galleryImages) &&
                                                <SwiperSlide>
                                                    <div className='thumbBox'>
                                                        <Image src={featuredImage?.node?.sourceUrl} alt='thumbfull1' width={100} height={50} ></Image>
                                                    </div>
                                                </SwiperSlide>
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                            }
                            {(galleryImages?.nodes.length > 0 || featuredImage) && <div className='col-lg-6 col-md-10 col-xl-7'>
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
                                        {galleryImages?.nodes.map((image, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className='thumbfullBox'>
                                                        <Image src={image?.sourceUrl} alt='thumbfull1' width={727} height={200}></Image>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                        {(galleryImages?.nodes.length == 0 && galleryImages) &&
                                            <SwiperSlide>
                                                <div className='thumbfullBox'>
                                                    <Image src={featuredImage?.node?.sourceUrl} alt='thumbfull1' width={727} height={200} ></Image>
                                                </div>
                                            </SwiperSlide>
                                        }
                                    </Swiper>
                                    <div className="switer_btn">
                                        <button onClick={() => swiperRef.current?.slidePrev()} className={`group ${isBeginning ? 'disable_arrow' : ''}`}>
                                            <svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6" /></svg>
                                        </button>
                                        <button onClick={() => swiperRef.current?.slideNext()} className={`group ${isEnd ? 'disable_arrow' : ''}`}>
                                            <svg className="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>}
                            <div className='col-lg-4 col-md-12 col-xl-4'>
                                <div className='priceList'>
                                    <div className='headSec'>
                                        <h4>{productData?.name}</h4>
                                        {productPrice && <span>{productPrice}</span>}
                                    </div>
                                    <div className='colorQun'>
                                        {productData?.attributes?.nodes.map((attribute, index) => {
                                            const { label, optionsWithFields, options, name, id } = attribute;
                                            return (
                                                <div className='colorSec' key={id}>
                                                    <span className='textBlog'>{label}</span>
                                                    {(name == "pa_color") ?
                                                        (<div className='colorBtn'>
                                                            {optionsWithFields?.map(option => {
                                                                return (
                                                                    <div className='difBtn' key={option.value}>
                                                                        <label for={option.slug}>
                                                                            <input type="radio" id={option.slug} name={name} onChange={(e) => handleAttributeChange(name, e.target.value)} value={option.slug} />
                                                                            <span style={{
                                                                                background: option
                                                                                    .colorCode
                                                                            }}></span>
                                                                        </label>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>)
                                                        :
                                                        (
                                                            // <div className='colorBtn'>
                                                            //     {optionsWithFields?.map(option => {
                                                            //         return (
                                                            //             <div className='difBtn' key={option}>
                                                            //                 <label for={option.slug}>
                                                            //                     <input type="radio" id={option.slug} name={name} value={option.slug} onChange={(e) => handleAttributeChange(name, e.target.value)} />
                                                            //                     <span>{option.name}</span>
                                                            //                 </label>
                                                            //             </div>
                                                            //         )
                                                            //     })}
                                                            // </div>
                                                            ""
                                                        )
                                                    }
                                                </div>
                                            )
                                        })}
                                        <div className='qunSec'>
                                            <span className='textBlog'>quantity</span>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                                </div>
                                                <input type="number" class="form-control" value={num} onChange={handleChange} />
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='buyNow'>
                                        <button className='buybtn' onClick={() => buyNowHandler()}>Buy Now</button>
                                    </div>

                                    {productExtraOptions && <div className='warrantySec'>
                                        {productExtraOptions?.isProductMadeInIndia && <div className='flagSec'>
                                            <ul>
                                                <li><i><Image src={flag} alt='flag'></Image></i></li>
                                                <li className='mii'>Made In India</li>
                                            </ul>
                                        </div>}
                                        {productExtraOptions?.productWarranty && <div className='warGrp'>
                                            <ul>
                                                <li><i><Image src={correct} alt='correct'></Image></i></li>
                                                <li className='corr'>{productExtraOptions?.productWarranty}</li>
                                            </ul>
                                        </div>}
                                    </div>}
                                    <div className='productContent'>
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
                {productExtraOptions?.productInfo && <div className='container'>
                    <div className='productDetail'>
                        <ul>
                            {productExtraOptions?.productInfo.map((info, index) => {
                                const { heading, value } = info;
                                if (heading || value) {
                                    return (
                                        <li key={index}>
                                            <span className='title'>{heading}</span>
                                            <span className='value' dangerouslySetInnerHTML={{ __html: value }}></span>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>}
            </div>
        );
    } else {
        return <h4 className="text-center my-5">Selected product is not a variable product, Please select variable product to see here.</h4>
    }
}

export default PriceSec;
