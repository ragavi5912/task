import React from "react";
import heroBg from "../../assets/bgimage1.jpg";
import "./Home.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
export default function Home() {
  return (
    <div className="home-wrapper" id="home">
      
      <div className="deal-banner">
        <div className="banner-content">
          <span>School Term Program Deal - 50% OFF Ends in</span>
          <div className="deal-timer">
            <span className="blue-number">00</span> Days &nbsp;
            <span className="blue-number">00</span> Hours &nbsp;
            <span className="blue-number">00</span> Minutes &nbsp;
            <span className="blue-number">00</span> Seconds
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            ARTIFICIAL INTELLIGENT (AI) COURSES FOR STUDENTS
          </h1>
          <p className="hero-subtitle">
            See Your Young Minds Thrive Online With Australia's No. 1 AI Learning Platform
          </p>
          <button className="hero-button">Get Started Today</button>
        </div>
      </div>

      <div className="offer-section">
        <div className="offer-container " id="junior">
          <h2 className="offer-heading">WHAT WE OFFER</h2>
          <p className="offer-description">
            At iProdigy, we make learning fun, engaging and practical, making complex concepts accessible to all ages.
          </p>

          <div className="offer-grid">
            <div className="offer-card">
             <img src={one} alt="Junior Prodigy" className="offer-image" />

              <h3 className="offer-title">JUNIOR PRODIGY</h3>
              <p className="offer-age">(6 – 9 YEARS OLD)</p>
              <ul className="offer-list">
                <li><span>&lt;/&gt;</span> A basic introduction to AI, easy to learn and implement</li>
                <li><span>&lt;/&gt;</span> Learners will produce 4+ AI projects over the full duration of the course</li>
              </ul>
            </div>
    
            <div className="offer-card">
             <img src={two} alt="Junior Prodigy" className="offer-image" />

              <h3 className="offer-title">TWEEN PRODIGY</h3>
              <p className="offer-age">(9 – 12 YEARS OLD)</p>
              <ul className="offer-list">
                <li><span>&lt;/&gt;</span> An in-depth exploration into AI</li>
                <li><span>&lt;/&gt;</span> Learners will produce 8+ AI projects over the full duration of the course</li>
              </ul>
            </div>

            <div className="offer-card">
              <img src={three} alt="Junior Prodigy" className="offer-image" />

              <h3 className="offer-title">TEEN PRODIGY</h3>
              <p className="offer-age">(13 – 16 YEARS OLD)</p>
              <ul className="offer-list">
                <li><span>&lt;/&gt;</span> An advanced approach to AI</li>
                <li><span>&lt;/&gt;</span> Learners will produce 8+ AI projects over the full duration of the course</li>
              </ul>
            </div>

            <div className="offer-card">
             <img src={four} alt="Junior Prodigy" className="offer-image" />

              <h3 className="offer-title">iPRODIGY</h3>
              <p className="offer-age">(16+ YEARS OLD)</p>
              <ul className="offer-list">
                <li><span>&lt;/&gt;</span> A deep dive into AI enabling learners to develop multiple projects and applications</li>
                <li><span>&lt;/&gt;</span> Learners will produce 16+ AI Projects over the full duration of the course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
