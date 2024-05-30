import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PsImage from "@/asset/images/ps-text-image.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollTextColor = ({powerStripimage,powerStripleftText,powerStriprightText}) => {
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
        // console.log("textDivWidth", textDivWidth);
        // console.log("imageClipperDimensions.width", imageClipperDimensions.width);

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
        <div className="zoomer-wrap" id="aboutSec">
            <div className="zoomer" ref={pinRef}>
                <div className="text textwrapout">
                    <div className="clipper" ref={textClipperRef}>
                        <h2 ref={leftTextRef}>{powerStripleftText}</h2>
                        <h2 ref={rightTextRef} className="heading2">
                            {powerStriprightText}
                        </h2>
                    </div>
                </div>
                <div className="images">
                    <div className="clipper" ref={imageClipperRef}>
                        <Image
                            src={powerStripimage?.sourceUrl}
                            width={1376}
                            height={688}
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
                <div className="textwrap">
                    <div className="intextwrap" ref={intextRef}>
                        <div className="inner_intextwrap">
                            <h2 ref={outerLeftTextRef}>{powerStripleftText}</h2>
                            <h2 ref={outerRightTextRef} className="heading2">
                                {powerStriprightText}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollTextColor;
