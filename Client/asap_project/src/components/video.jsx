const Video = () => {
  const videoData = {
    title: "Lionel Messi Header Vs Manchester United UEFA Final",
    description: "Messi's header in UEFA Final against Man United 2009",
    url: "https://www.youtube.com/embed/TAOmaC5XTnE"
  };

  return (
    <div className="video-container">
      <h2>{videoData.title}</h2>
      <p>{videoData.description}</p>
      <iframe
        width="560"
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
