import React from "react";
import "./about.css";

import kidImg from "../../assets/kid1.png";
import laptopKids from "../../assets/kid2.png";
import { FaLightbulb } from "react-icons/fa"; // classic bulb



export default function About() {
  return (
    <div className="about-container"  id="about-us">
      {/* Top Wave Background (SVG) */}
      <div className="wave-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="wave-shape"
            opacity="0.3"
            d="M473,67c-203.9,88.3-263.1-34-320.3,0C66,119.8,7,59,7,59V100h1000V59c-62.1-26.1-94.9,29.3-322.8,8.3C623.2,38.3,582,12,473,67z"
          />
          <path
            className="wave-shape"
            opacity="0.66"
            d="M734,67c-45.5,0-77.2-23.2-129-19.3c-28.6,2.1-53.6,18.3-81.8,18.3C479,66,455,54,392,66s-68,23-127,23c-59,0-113-32-163-32V100h1000V67c-65,0-104,31-176,31c-71,0-90-32-176-31z"
          />
          <path
            className="wave-shape"
            d="M766,28.9c-207.5,57-266.6,55-395.1,19.5C242.5,4.8,148,35.8,0,39.9V100h1000V0C921,0,837-27.5,766,28.9z"
          />
        </svg>
      </div>

      {/* Section Title */}
      <h2 className="about-title">EMPOWERING YOUNG INNOVATORS</h2>
      <p className="about-subtitle">
        In a world that is constantly evolving, it's time to embark on an
        exciting journey of education, empowerment and exploration with your
        child. Prepare them for the AI Revolution and watch them shine as future
        leaders!
      </p>

      {/* YouTube Video */}
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/e9jKwU4A7JY"
          title="YouTube video player"
          frameBorder="0"
       
        ></iframe>
      </div>

      {/* Focus + Courses Section */}
      <div className="about-content">
        <div className="text-section">
          <h3>OUR FOCUS</h3>
          <p>
            <b>Intelligent Agentic Automation (IAA):</b> Get hands-on with
            cutting-edge technology that's changing the way we work.
          </p>
          <p>
            <b>Artificial Intelligence (AI):</b> Dive into the world of
            algorithms, machine learning and endless possibilities.
          </p>

          <h3>OUR COURSES</h3>
          <p>
            <b>For ages 8 - 18:</b> We cater to all young minds ready to embark
            on the incredible journey of AI and Intelligent Agentic Automation
            (IAA). Through our AI modules your child will invent, design and
            deliver an AI project. Our hands-on teaching and learning will
            ensure your child is educated, equipped and empowered in the world
            of Artificial Intelligence.
          </p>
        </div>

        <div className="image-section">
          <img src={kidImg} alt="Kid with laptop" />
        </div>
      </div>

      {/* Learners Section */}
      <div className="learners-section">
        <div className="image-circle">
          <img src={laptopKids} alt="Kids learning" />
        </div>
        <div className="learners-text">
          <h3>LEARNERS WILL LEAVE WITH:</h3>
        <ul className="custom-list">
           <li><FaLightbulb className="icon" /> An introduction to Artificial Intelligence.</li>
           <li><FaLightbulb className="icon" /> The skills to build Software Robots and Software Agents.</li>
           <li><FaLightbulb className="icon" /> The tools used within Artificial Intelligence.</li>
          <li><FaLightbulb className="icon" /> The techniques to enhance Artificial Intelligence Solutions.</li>
          <li><FaLightbulb className="icon" /> Automation proficiency to automate various applications.</li>
           <li><FaLightbulb className="icon" /> The opportunity to plan, design and deliver an AI Project.</li>
        </ul>

          <p>
           Don’t let your child miss out on the future. Together let’s shape the leaders of tomorrow, today!
          </p>
          <button className="demo-btnn">Book a Demo →</button>
        </div>
      </div>
    </div>
  );
}