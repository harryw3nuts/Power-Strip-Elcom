import Image from "next/image"
import Link from 'next/link';
import ivideoimg from "@/asset/images/ivideoimg.png";
import { useEffect, useState } from "react";
import { checkVideoPlatform, formatDuration, getVimeoEmbeddedUrl, getYouTubeEmbeddedUrl, parseDuration } from "@/utils/utils";
import axios from "axios";


const VideoSec = ({videoBackgroundImage,videoUrl:videoUrlData,videoButtonText}) => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const [videoDetails,setVideoDetails] = useState();
    const url = videoUrlData;
    let updatedURL = '';
    let videoPlatForm = '';

    if(videoUrlData){
        //getting plateform of given URL (eg. Youtube,Vimeo)
        videoPlatForm = checkVideoPlatform(url);
        if(videoPlatForm == 'YouTube'){
            updatedURL = getYouTubeEmbeddedUrl(url)
        }else if(videoPlatForm == 'Vimeo'){
            updatedURL = getVimeoEmbeddedUrl(url)
        }else{
            updatedURL = url;
        }
    }

    //get Youtube video id from url
    const getVideoIdFromUrl = (url) => {
        let videoId;
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            videoId = match[1];
        }
        return videoId
    };

    //fetch Youtube video details from video id
    const fetchYoutubeVideoDetails = async (videoId) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`
            );
            const video = response.data.items[0];
            const title = video.snippet.title;
            const duration = parseDuration(video.contentDetails.duration);
            setVideoDetails({
                title,
                duration,
            });
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    };

    const fetchVimeoVideoDetails = async (oEmbedUrl) => {
        fetch(oEmbedUrl)
        .then(response => response.json())
        .then(data => {
            const title = data.title;
            const duration = formatDuration(data.duration); // Duration is in seconds
            setVideoDetails({
                title,
                duration,
            });
        })
        .catch(error => console.error('Error fetching video details:', error));
    }

    useEffect(() => {
        if(videoPlatForm == 'YouTube'){
            const videoId = getVideoIdFromUrl(url);
            fetchYoutubeVideoDetails(videoId);
        }else if(videoPlatForm == 'Vimeo'){
            const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`;
            fetchVimeoVideoDetails(oEmbedUrl);
        }
    }, []);

    if(videoUrlData){
        return (
            <>
                <div className="videoGrp">
                    <div className="container">
                        <div className="videoPlayer">
                            <div className="videoWrapper">
                                {!showVideo && <div className="videoFrame">
                                    <Image src={videoBackgroundImage?.sourceUrl} alt="ivideoimg" width={1376} height={688} />
                                </div>}
                                <div className="video-blk">
                                    <iframe width="1000" height="500" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                {!showVideo && <div className="trailerText">
                                    {videoDetails?.title && <div className="trailorSec">
                                        <p>{videoDetails?.title}</p>
                                    </div>}
                                    <div className="blueBtn">
                                        <Link href="/" onClick={(e) => { e.preventDefault(); setVideoUrl(updatedURL); setShowVideo(true) }}>{videoButtonText ? videoButtonText:  "watch video"}</Link>
                                    </div>
                                    {videoDetails?.duration && <div className="timerSec">
                                        <span>{videoDetails?.duration}</span>
                                    </div>}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return ''
}

export default VideoSec;