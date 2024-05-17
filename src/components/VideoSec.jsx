import Image from "next/image"
import Link from 'next/link';
import ivideoimg from "@/asset/images/ivideoimg.png";


const VideoSec = () => {
    return (
        <>
        <div className="videoGrp">
            <div className="videoPlayer">
                <div className="videoWrapper">
                    <div className="videoFrame">
                        <Image src={ivideoimg} alt="ivideoimg"/>
                    </div>
                    <div className="trailerText">
                        <div className="trailorSec">
                            <p>ELcom power strip Trailer</p>
                        </div>
                        <div className="blueBtn">
                            <Link href="/">watch video</Link>
                        </div>
                        <div className="timerSec">
                            <span>00 : 30 : 00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoSec;