import React from "react";
import "./Content.css";
import laptopKids from "../../assets/content.png";

const Content = () => {
  return (
    <div className="content-container">
      {/* === Header and Reasons in Single Line === */}
      <div className="content-main-section">
        {/* Header Section */}
        <div className="content-header">
          <h2>WHY SHOULD CHILDREN LEARN AI?</h2>
          <p>
            In the age of AI and in the words of Sir Francis Bacon, "Knowledge is power." 
            Encouraging our "future leaders" to dive headfirst into the world of Artificial 
            Intelligence is more than just a smart move — it's a game-changer. Why?
          </p>
        </div>

        {/* 3 Reasons Section */}
        <div className="content-reasons">
          <div className="reason-card">
            <h3>01</h3>
            <h4>Intellectual Development</h4>
            <p>AI sparks creativity, problem-solving and critical thinking.</p>
          </div>

          <div className="reason-card">
            <h3>02</h3>
            <h4>Future Career Opportunities</h4>
            <p>AI has the potential to unlock global career possibilities.</p>
          </div>

          <div className="reason-card">
            <h3>03</h3>
            <h4>Tech Savvy & Engaged</h4>
            <p>
              Equip your child to confidently navigate the technology-driven world around 
              them with innovation and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* === YouTube Video === */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/-yKDNXavTZs"

          
          title="YouTube video player"
          frameBorder="0"
       
        ></iframe>
      </div>

      {/* === Blue Waves === */}
      <div className="wave-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C150,180 350,60 600,120 C850,180 1050,80 1200,120 L1200,200 L0,200 Z"
            fill="#00AEEF"
            opacity="0.9"
          ></path>
          <path
            d="M0,140 C200,200 400,80 600,140 C800,200 1000,100 1200,140 L1200,200 L0,200 Z"
            fill="#4FC3F7"
            opacity="0.7"
          ></path>
          <path
            d="M0,160 C250,220 450,100 600,160 C750,220 1000,120 1200,160 L1200,200 L0,200 Z"
            fill="#81D4FA"
            opacity="0.6"
          ></path>
        </svg>
      </div>

      {/* === Parental Involvement === */}
      <div className="parental-section">
        <div className="parental-text">
          <h3>PARENTAL INVOLVEMENT</h3>
          <p>
            How can parents get involved in creating an iProdigy?  <br/>
            At iProdigy, we believe that parents play a pivotal role in nurturing their child's 
            digital destiny by inspiring a love of learning and innovation.
          </p>
          <p className="enrolling">
            
            By enrolling your child into one of our diverse and exciting courses, they will be 
            equipped with the tools and knowledge they need to succeed in today's everchanging, 
            fast-paced world.
          </p>
          <button>Book a Demo →</button>
        </div>

        <div className="parental-image">
          <img src={laptopKids} alt="Kids learning" />
        </div>
      </div>

      {/* === Extra YouTube Video Below Parental Section === */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/IZ5cvYxA4c8"

          
          title="YouTube video player"
          frameBorder="0"
       
        ></iframe>
      </div>
    </div>
  );
};

export default Content;