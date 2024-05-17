import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import PsImage from '@/asset/images/ps-text-image.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollTextColor = ()=> {

    gsap.registerPlugin(ScrollTrigger);

    const pinRef = useRef(null);
    const intextRef = useRef(null);
    const textClipperRef = useRef(null);
    const imageClipperRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const outerLeftTextRef = useRef(null);
    const outerRightTextRef = useRef(null);

    useEffect(()=>{
            
    },[]);


    useEffect(()=>{

            const animationHandler = () => {

                const scaleImg = 0.465;
                const textDivWidth = imageClipperRef.current.getBoundingClientRect().width
                const textDivHeight = imageClipperRef.current.getBoundingClientRect().height
                let initilWidth = ( 1 * textDivWidth ) / scaleImg
                let initilHeight = ( 1 * textDivHeight ) / scaleImg

                // width : "44.44%"
                // height : "25%"
                gsap.fromTo(intextRef.current, {  width: textDivWidth, height: textDivHeight }, {
                    width: initilWidth,
                    height: initilHeight,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.2,
                        onEnterBack: () => {

                        },
                    }
                })
                //scale: 0.465
                gsap.fromTo(imageClipperRef.current, { scale: 0.465 }, {
                    scale: 1,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.2,   
                    }
                })
                console.log(textDivWidth);

                gsap.fromTo(outerLeftTextRef.current, { x: 0 }, {
                    x: 250,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.5,   
                    }
                })

                gsap.fromTo(leftTextRef.current, { x: 0 }, {
                    x: 250,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.5,
                    }
                })

                gsap.fromTo(outerRightTextRef.current, { x: 0 }, {
                    x: -250,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.5,   
                    }
                })

                gsap.fromTo(rightTextRef.current, { x: 0 }, {
                    x: -250,
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: 'top top',
                        end: '200% bottom',
                        scrub: 0.5,
                    }
                })
                //console.log({scaleImg, textDivHeight, textDivWidth, initilHeight, initilWidth});
            }

            animationHandler()

            // PinSec
            const pinHandler = () => {
                const pin = gsap.to(pinRef.current, {
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: "top top",
                        end: '200% bottom',
                        pin: true,
                        markers: true
                    },
              });
            }

            const pinDelayTime = 2000;
            const pinHandlerTimeout = setTimeout(pinHandler, pinDelayTime);

            return () => {
                clearTimeout(pinHandlerTimeout);
            };
    },[])

    return (
        <div className="zoomer-wrap">
            <div class="zoomer" ref={pinRef}>
            <div class="text textwrapout">
                <div class="clipper" ref={textClipperRef}>
                    <h2 ref={leftTextRef}>Power</h2>
                    <h2 ref={rightTextRef} className="heading2">Strip</h2>
                </div>
            </div>
            <div class="images">
                <div class="clipper" ref={imageClipperRef}>
                    <Image src={PsImage} alt="PsImage" />
                </div>
            </div>
            <div class="textwrap">
                <div class="intextwrap" ref={intextRef}>
                    <div class="inner_intextwrap">
                        <h2 ref={outerLeftTextRef}>Power</h2>
                        <h2 ref={outerRightTextRef} className="heading2" >Strip</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ScrollTextColor;