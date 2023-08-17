import React, { useEffect, useRef } from "react";
import video from "../../assets/loading.mp4";
import Styles from '../Loading/Loading.module.css'

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={Styles.container} >
      <video src={Styles.video} ref={videoRef} autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;