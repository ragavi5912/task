import React from "react";
import "./youtube.css";
import bgImage from "../../assets/four.jpg"; 

const Youtube = () => {
  const videos = [
    "https://www.youtube.com/embed/7iB1rXZ2AFE",
    "https://www.youtube.com/embed/y7b36nEb9rs",
    "https://www.youtube.com/embed/93IVdeVRP4I",
    "https://www.youtube.com/embed/SbkEHzVCI2I",
    "https://www.youtube.com/embed/URe8wCCKX_A",
  ];
 return (
    <div className="youtube-section">
      <h2 className="youtube-title">TESTIMONIALS & DEMOS</h2>

      <div className="videos-container">
        {/* First Row - 2 videos */}
        <div className="video-row">
          <iframe src={videos[0]} title="video1" allowFullScreen></iframe>
          <iframe src={videos[1]} title="video2" allowFullScreen></iframe>
        </div>

        {/* Second Row - 2 videos */}
        <div className="video-row">
          <iframe src={videos[2]} title="video3" allowFullScreen></iframe>
          <iframe src={videos[3]} title="video4" allowFullScreen></iframe>
        </div>

        {/* Third Row - 1 centered video */}
        <div className="video-row single">
          <iframe src={videos[4]} title="video5" allowFullScreen></iframe>
        </div>
      </div>

      {/* Full Width Image Section (uses imported image) */}
      <div
        className="image-section"
        style={{ backgroundImage: `url(${bgImage})` }} // ✅ image from assets
      >
        <div className="overlay">
          <h2>WHERE IMAGINATION MEETS<br/> INNOVATION IN AI EDUCATION</h2>
          <div className="buttons">
            <button className="btn start-btn">Get Started</button>
            <button className="btn demo-btns">Book a Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
