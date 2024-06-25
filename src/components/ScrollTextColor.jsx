import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
        setImageClipperDimensions({
            width: imageClipperRef.current.getBoundingClientRect().width,
            height: imageClipperRef.current.getBoundingClientRect().height,
        });
    }, [imageLoaded]);

    useEffect(() => {
        if (!imageLoaded) return;

        const scaleImg = 0.465;
        const textDivWidth = imageClipperDimensions.width * scaleImg;
        const textDivHeight = imageClipperDimensions.height * scaleImg;

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
                    onUpdate: (self) => {},
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
                <div className="btnbox">
                    <a href="#" className="border-btn">View Details</a>
                </div>
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
