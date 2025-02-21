import { useEffect, useState } from "react";

const Video = () => {
  const [videoData,setVideodata]=useState({});

  useEffect(()=>{
    fetch("http://localhost:8989/videos")
    .then((res)=>res.json())
    .then((data)=>setVideodata(data[0]))
    .catch(error =>console.error('Error:', error))
  },[])

  return (
    <div className="video-container">
    <h2>{videoData.title}</h2>
      <p>{videoData.description}</p>
      <iframe
        width="475"
        height="315"
        src={videoData.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> 
    </div>
  );
};

export default Video;
