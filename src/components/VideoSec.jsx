import Image from "next/image"
import Link from 'next/link';
import ivideoimg from "@/asset/images/ivideoimg.png";
import { useState } from "react";


const VideoSec = () => {
    const [showVideo,setShowVideo] = useState(false);
    const [videoUrl,setVideoUrl] = useState("");
    return (
        <>
        <div className="videoGrp">
            <div className="container">
            <div className="videoPlayer">
                <div className="videoWrapper">
                    {!showVideo && <div className="videoFrame">
                        <Image src={ivideoimg} alt="ivideoimg"/>
                    </div>}
                    <div class="video-blk">
                        <iframe width="1000" height="500" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    {!showVideo && <div className="trailerText">
                        <div className="trailorSec">
                            <p>ELcom power strip Trailer</p>
                        </div>
                        <div className="blueBtn">
                            <Link href="/" onClick={(e) => {e.preventDefault();setVideoUrl("https://www.youtube.com/embed/D0UnqGm_miA?si=O4ZU6dXgK_rPyEsM&autoplay=1&muted=1");setShowVideo(true)}}>watch video</Link>
                        </div>
                        <div className="timerSec">
                            <span>00 : 30 : 00</span>
                        </div>
                    </div>}
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default VideoSec;