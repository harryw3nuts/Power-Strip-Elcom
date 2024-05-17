import Link from "next/link";
import Image from "next/image";
import slideImg1 from "@/asset/images/client-image-1.png"
import slideImg2 from "@/asset/images/client-image-2.png"
import slideImg3 from "@/asset/images/client-image-3.png"
import { useEffect } from "react";

const PowerStripSlider = () => {

    useEffect(()=>{
    
    const elements = document.querySelectorAll(".powerstrips-slide");
    const elementSpans = document.querySelectorAll(".powerstripslider-dots span");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    let currentIndex = 0;

    // Function to update classes based on current index
    function updateClasses() {
        elements.forEach((element, index) => {
          const className =
            index === currentIndex
              ? "powerstrips-slide active"
              : `powerstrips-slide client-${(index - currentIndex + elements.length) % elements.length
              }`;
          element.className = className;
          // elementContainer.appendChild(elements);
        });
        elementSpans.forEach((element, index) => {
            const className =
              index === currentIndex
                ? "powerstripslider-dots span active"
                : `powerstripslider-dots span client-${(index - currentIndex + elements.length) % elements.length
                }`;
            element.className = className;
            // elementContainer.appendChild(elements);
        });
    }
    // Initial class setup
    updateClasses();
    // Listen for next button click
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % elements.length;
        updateClasses();
      });
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + elements.length) % elements.length;
        updateClasses();
      })

    },[])


    return(
        <div className="powerstripslider">
            <div className="powerstripslider-mainbox">
                <div className="powerstrips-slide slide-1">
                    <Image src={slideImg1} alt="slideImg1" />
                </div>
                <div className="powerstrips-slide slide-2"> 
                    <Image src={slideImg2} alt="slideImg2" />
                </div>
                <div className="powerstrips-slide slide-3">
                    <Image src={slideImg3} alt="slideImg3" />
                </div>
            </div>
            <div className="powerstripslider-uitis">
                <div className="powerstripslider-dots">
                    <span className="dot-1"></span>
                    <span className="dot-2 active"></span>
                    <span className="dot-3"></span>
                </div>
                <div className="powerstripslider-btnbox">
                    <button id="prevButton">
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5147 1.51472L2.02944 10L10.5147 18.4853" stroke="#101010" stroke-width="1.5"/>
                        </svg>
                    </button>
                    <button href="#" id="nextButton">
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.48528 1.51472L9.97056 10L1.48528 18.4853" stroke="#101010" stroke-width="1.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PowerStripSlider;