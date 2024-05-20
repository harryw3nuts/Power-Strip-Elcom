import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PsImage from "@/asset/images/ps-text-image.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollTextColor = () => {
    gsap.registerPlugin(ScrollTrigger);

    const pinRef = useRef(null);
    const intextRef = useRef(null);
    const textClipperRef = useRef(null);
    const imageClipperRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const outerLeftTextRef = useRef(null);
    const outerRightTextRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageClipperDimensions, setImageClipperDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // const handleResize = () => {
        setImageClipperDimensions({
            width: imageClipperRef.current.getBoundingClientRect().width,
            height: imageClipperRef.current.getBoundingClientRect().height,
        });
        // };
        // window.addEventListener("resize", handleResize);

        // Initial load
        // handleResize();

        // Remove event listener on cleanup
        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };
    }, [imageLoaded]);

    useEffect(() => {
        if (!imageLoaded) return;

        // const animationHandler = () => {

        const scaleImg = 0.465;
        const textDivWidth = imageClipperDimensions.width * scaleImg;
        const textDivHeight = imageClipperDimensions.height * scaleImg;
        console.log("textDivWidth", textDivWidth);
        console.log("imageClipperDimensions.width", imageClipperDimensions.width);

        gsap.fromTo(
            intextRef.current,
            { width: textDivWidth, height: textDivHeight },
            {
                width: imageClipperDimensions.width,
                height: imageClipperDimensions.height,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                    onUpdate: (self) => {
                        // console.log('self', self);
                        // console.log('imageClipperDimensions.width', imageClipperDimensions.width);
                        // const progress = self.progress;
                        // const newWidth = textDivWidth * (1 - progress) + scaleImg * textDivWidth * progress;
                        // const newHeight = textDivHeight * (1 - progress) + scaleImg * textDivHeight * progress;
                        // gsap.set(intextRef.current, { width: newWidth, height: newHeight });
                    },
                },
            }
        );

        gsap.fromTo(
            imageClipperRef.current,
            { scale: 0.465 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                },
            }
        );

        gsap.fromTo(
            outerLeftTextRef.current,
            { x: 0 },
            {
                x: 250,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                },
            }
        );

        gsap.fromTo(
            leftTextRef.current,
            { x: 0 },
            {
                x: 250,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                },
            }
        );

        gsap.fromTo(
            outerRightTextRef.current,
            { x: 0 },
            {
                x: -250,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                },
            }
        );

        gsap.fromTo(
            rightTextRef.current,
            { x: 0 },
            {
                x: -250,
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    scrub: 0.5,
                },
            }
        );
        //console.log({scaleImg, textDivHeight, textDivWidth, initilHeight, initilWidth});
        // }

        // animationHandler()

        // PinSec
        const pinHandler = () => {
            const pin = gsap.to(pinRef.current, {
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "200% bottom",
                    pin: true,
                    //markers: true,
                },
            });
        };

        const pinDelayTime = 2000;
        const pinHandlerTimeout = setTimeout(pinHandler, pinDelayTime);

        return () => {
            clearTimeout(pinHandlerTimeout);
        };
    }, [imageLoaded]);

    return (
        <div className="zoomer-wrap">
            <div class="zoomer" ref={pinRef}>
                <div class="text textwrapout">
                    <div class="clipper" ref={textClipperRef}>
                        <h2 ref={leftTextRef}>Power</h2>
                        <h2 ref={rightTextRef} className="heading2">
                            Strip
                        </h2>
                    </div>
                </div>
                <div class="images">
                    <div class="clipper" ref={imageClipperRef}>
                        <Image
                            src={PsImage}
                            alt="PsImage"
                            onLoad={() => {
                                setImageClipperDimensions({
                                    width: imageClipperRef.current.getBoundingClientRect().width,
                                    height:
                                        imageClipperRef.current.getBoundingClientRect().height,
                                });
                                setImageLoaded(true);
                            }}
                        />
                    </div>
                </div>
                <div class="textwrap">
                    <div class="intextwrap" ref={intextRef}>
                        <div class="inner_intextwrap">
                            <h2 ref={outerLeftTextRef}>Power</h2>
                            <h2 ref={outerRightTextRef} className="heading2">
                                Strip
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollTextColor;
