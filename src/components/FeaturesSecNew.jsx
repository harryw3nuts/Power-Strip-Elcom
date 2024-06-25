import { useRef, useEffect, } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturesSecNew = ({featuresHeading,featuresImage,features1Heading,features2Heading,features3Heading,features4Heading,features5Heading,features1Subheading,features2Subheading,features3Subheading,features4Subheading,features5Subheading}) => {

    // References
    const pinRef = useRef(null);
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const triggerRef = useRef(null);

    // References to the SVG elements
    const pathRef = useRef(null);
    const circle1Ref = useRef(null);
    const circle2Ref = useRef(null);

    useEffect(() => {
        const animationDuration = 1;
        let timeline;
        function AnimationHandler() {
            if (pinRef.current) {
                timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinRef.current,
                        start: "top top",
                        end: "+=500%",
                        scrub: 1,
                        pin: true,
                        //markers: true
                    }
                });

                timeline
                    .fromTo(".feture_text_box-1", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, })
                    .fromTo(".feture_text_box-1 .circle-1", { opacity: 0 }, { opacity: 1, },)
                    .fromTo(".feture_text_box-1 path", { strokeDasharray: "0, 600" }, { strokeDasharray: "600, 600", duration: animationDuration },)
                    .fromTo(".feture_text_box-1 .circle-2", { opacity: 0 }, { opacity: 1, })

                    .fromTo(".feture_text_box-2", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
                    .fromTo(".feture_text_box-2 .circle-1", { opacity: 0 }, { opacity: 1 })
                    .fromTo(".feture_text_box-2 path", { strokeDasharray: "0, 600" }, { strokeDasharray: "600, 600", duration: animationDuration })
                    .fromTo(".feture_text_box-2 .circle-2", { opacity: 0 }, { opacity: 1 })

                    .fromTo(".feture_text_box-3", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
                    .fromTo(".feture_text_box-3 .circle-1", { opacity: 0 }, { opacity: 1 })
                    .fromTo(".feture_text_box-3 path", { strokeDasharray: "0, 600" }, { strokeDasharray: "600, 600", duration: animationDuration })
                    .fromTo(".feture_text_box-3 .circle-2", { opacity: 0 }, { opacity: 1 })

                    .fromTo(".feture_text_box-4", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
                    .fromTo(".feture_text_box-4 .circle-1", { opacity: 0 }, { opacity: 1 })
                    .fromTo(".feture_text_box-4 path", { strokeDasharray: "0, 600" }, { strokeDasharray: "600, 600", duration: animationDuration })
                    .fromTo(".feture_text_box-4 .circle-2", { opacity: 0 }, { opacity: 1 })

                    .fromTo(".feture_text_box-5", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
                    .fromTo(".feture_text_box-5 .circle-1", { opacity: 0 }, { opacity: 1 })
                    .fromTo(".feture_text_box-5 path", { strokeDasharray: "0, 600" }, { strokeDasharray: "600, 600", duration: animationDuration })
                    .fromTo(".feture_text_box-5 .circle-2", { opacity: 0 }, { opacity: 1 })

            }
        }

        const pinDelayTime = 3000;
        const pinHandlerTimeout = setTimeout(AnimationHandler, pinDelayTime);

        return () => {
            // CleanUp
            clearTimeout(pinHandlerTimeout);
            // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // timeline.kill()
        };
    }, []);

    return (
        <div id="featuresSec">
            <div className="features-sec" ref={pinRef}>
                <div className="features-wrap">
                    {featuresHeading && <div className="title">
                        <h2>{featuresHeading}</h2>
                    </div>}
                    {featuresImage?.sourceUrl && <div className="imgbox" ref={triggerRef}>
                        <Image src={featuresImage?.sourceUrl} width={847} height={671} alt="Main" />
                    </div>}
                    <div className="features_text-wrap">
                        {/* feture_text_box-1 */}
                        {(features1Heading || features1Subheading) && <div className="feture_text_box-1 featurs_class">
                            {features1Heading && <div className="feture_box-title" ref={textRef}>{features1Heading}</div>}
                            {features1Subheading && <div className="feture_box-subtitle" ref={subtextRef} >{features1Subheading}</div>}
                            <div className="line">
                                <svg width="144" height="343" viewBox="0 0 144 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={pathRef} d="M134.498 19L7.83839 325.127" stroke="#5BDE84" strokeWidth="1.5" />
                                    <circle className="circle-1" cx="133.998" cy="19" r="6" transform="rotate(90 133.998 19)" fill="#5BDE84" stroke="#5BDE84" />
                                    <circle className="circle-2" cx="7.83964" cy="325.126" r="6" transform="rotate(106.173 7.83964 325.126)" fill="#5BDE84" stroke="#5BDE84" />
                                </svg>
                            </div>
                        </div>}
                        {/* feture_text_box-1 */}
                        {/* feture_text_box-2 */}
                        {(features2Heading || features2Subheading) &&  <div className="feture_text_box-2 featurs_class">
                            {features2Heading && <div className="feture_box-title">{features2Heading}</div>}
                            {features2Subheading && <div className="feture_box-subtitle">{features2Subheading}</div>}
                            <div className="line">
                                <svg width="292" height="277" viewBox="0 0 292 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M192.5 8.00097L99.7965 268.133" stroke="#5BDE84" strokeWidth="1.5" />
                                    <circle className="circle-1" cx="6" cy="6" r="6" transform="matrix(0.616282 0.787526 0.787526 -0.616282 184 7.39453)" fill="#5BDE84" stroke="#5BDE84" />
                                    <circle className="circle-2" cx="6" cy="6" r="6" transform="matrix(0.616282 0.787526 0.787526 -0.616282 91.3711 267.105)" fill="#5BDE84" stroke="#5BDE84" />
                                </svg>
                            </div>
                        </div>}
                        {/* feture_text_box-2 */}
                        {/* feture_text_box-3 */}
                        {(features3Heading || features3Subheading) && <div className="feture_text_box-3 featurs_class">
                            {features3Heading && <div className="feture_box-title">{features3Heading}</div>}
                            {features3Subheading && <div className="feture_box-subtitle">{features3Subheading}</div>}
                            <div className="line">
                                <svg width="145" height="14" viewBox="0 0 145 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 6.99999L74.819 7.00001L134 7.00001" stroke="#5BDE84" strokeWidth="1.5" />
                                    <circle className="circle-1" cx="7" cy="7" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                    <circle className="circle-2" cx="138" cy="7" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                </svg>
                            </div>
                        </div>}
                        {/* feture_text_box-3 */}
                        {/* feture_text_box-4 */}
                        {(features4Heading || features4Subheading) &&  <div className="feture_text_box-4 featurs_class">
                            {features4Heading && <div className="feture_box-title">{features4Heading}</div>}
                            {features4Subheading && <div className="feture_box-subtitle">{features4Subheading}</div>}
                            <div className="line">
                                <svg width="182" height="14" viewBox="0 0 182 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7L96.7133 6.99999L175 6.99999" stroke="#5BDE84" strokeWidth="1.5" />
                                    <circle className="circle-1" cx="7" cy="7" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                    <circle className="circle-2" cx="175" cy="7" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                </svg>
                            </div>
                        </div>}
                        {/* feture_text_box-4 */}
                        {/* feture_text_box-5 */}
                        {(features5Heading || features5Subheading) &&  <div className="feture_text_box-5 featurs_class">
                            {features5Heading && <div className="feture_box-title">{features5Heading}</div>}
                            {features5Subheading && <div className="feture_box-subtitle">{features5Subheading}</div>}
                            <div className="line">
                                <svg width="380" height="29" viewBox="0 0 380 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 21L373 6.99997" stroke="#5BDE84" strokeWidth="1.5" />
                                    <circle className="circle-1" cx="7" cy="22" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                    <circle className="circle-2" cx="373" cy="7" r="6" fill="#5BDE84" stroke="#5BDE84" />
                                </svg>
                            </div>
                        </div>}
                        {/* feture_text_box-5 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSecNew;