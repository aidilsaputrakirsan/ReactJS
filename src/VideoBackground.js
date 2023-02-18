import React from "react";

function VideoBackground() {
  return (
    <div className="video-background">
      <video loop autoPlay muted>
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
