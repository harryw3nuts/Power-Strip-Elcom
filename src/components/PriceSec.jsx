import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
import thumbfull1 from '@/asset/images/thumbfull1.png';
import flag from '@/asset/images/flag.svg';
import correct from '@/asset/images/correct.svg';
import Swal from 'sweetalert2';
import ReactReadMoreReadLess from "react-read-more-read-less";

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const PriceSec = ({ productData }) => {
    // console.log("productData : ",productData)
    const {productExtraOptions} = productData; 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const swiperRef = useRef();
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [productPrice, setProductPrice] = useState(productData?.price || 0);
    const router = useRouter();
    const { products, setProductsHandler } = useContext(ThemeContext);

    let [num, setNum] = useState(0);
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
            <>

                <div className='priceImg' id="detailSec">
                    <div className='container'>
                        <div className='priceWrapper'>
                            <div className='row'>
                                <div className='col-lg-1'>
                                    <div className='priceSwiper'>
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }}
                                            loop={true}
                                            spaceBetween={10}
                                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >
                                            <SwiperSlide>
                                                <div className='thumbBox'> 
                                                    <Image src={thumb1} alt='thumb1'></Image>
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
                                        </Swiper >
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <div className='pricefullImg'>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            loop={false}
                                            slidesPerView={1}
                                            freeMode={true}
                                            // navigation={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            onBeforeInit={(swiper) => {
                                                swiperRef.current = swiper;
                                            }}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <div className='thumbfullBox'>
                                                    <Image src={thumbfull1} alt='thumbfull1'></Image>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='thumbfullBox'>
                                                    <Image src={thumbfull1} alt='thumbfull1'></Image>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='thumbfullBox'>
                                                    <Image src={thumbfull1} alt='thumbfull1'></Image>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='thumbfullBox'>
                                                    <Image src={thumbfull1} alt='thumbfull1'></Image>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="switer_btn">
                                            <button onClick={() => swiperRef.current?.slidePrev()} className="group">
                                                <svg className="feather feather-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6" /></svg>
                                            </button>
                                            <button onClick={() => swiperRef.current?.slideNext()} className="group">
                                                <svg className="feather feather-chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
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
                                            <button className='buybtn'  onClick={() => buyNowHandler()}>Buy Now</button>
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
                                {productExtraOptions?.productInfo.map((info,index) => {
                                    const {heading,value} = info;
                                    if(heading || value){
                                        return (
                                            <li key={index}>
                                                <span className='title'>{heading}</span>
                                                <span className='value' dangerouslySetInnerHTML={{__html:value}}></span>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>}
                </div>


            </>
        );
    } else {
        return <h4 className="text-center my-5">Selected product is not a variable product, Please select variable product to see here.</h4>
    }
}

export default PriceSec;