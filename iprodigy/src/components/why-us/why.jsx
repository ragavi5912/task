import React, { useState } from "react";
import "./Why.css";
import whyUsImage from "../../assets/whyus.png";

export default function Why() {
  const [openIndex, setOpenIndex] = useState(null);

  const whyUsData = [
    { question: "1. Expert Instructors", answer: "Our expert instructors are industry professionals with years of experience in AI, automation, and data science. They provide practical knowledge with real-world insights." },
    { question: "2. Unmatched Experience", answer: "Our founder and trainers have over 15+ years of experience in IT and AI sectors, helping students build skills that matter." },
    { question: "3. Award Winning Trainer", answer: "Our trainers are recognized with multiple awards in the AI and Automation training domain." },
    { question: "4. We Focus On Real-Time Projects", answer: "We provide hands-on experience with real-world projects so learners gain practical exposure." },
    { question: "5. Online Learning", answer: "Flexible online learning that fits into your schedule, accessible from anywhere in the world." },
    { question: "6. Global Reach", answer: "Students from multiple countries trust us for our quality and international teaching approach." },
    { question: "7. Personalized Support", answer: "We offer 1-on-1 mentorship and career guidance throughout your learning journey." },
    { question: "8. Certification", answer: "Every student receives an industry-recognized certification upon course completion." },
    { question: "9. Inclusive Learning", answer: "Our courses are designed for learners of all backgrounds — whether beginner or experienced." },
    { question: "9 ½. Passion", answer: "We are passionate about empowering students to shape the future of AI innovation." },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="why-container" id="why-us">
      <div className="wave-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#00B4F1" d="M0,128L60,133.3C120,139,240,149,360,149.3C480,149,600,139,720,117.3C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      <div className="main-heading">
        <h1>LET'S EMPOWER THE NEXT GENERATION TO CONQUER THE <br/>AI REVOLUTION.</h1>
      </div>

      <div className="video-section">
        <div className="video-wrapper">
          <iframe src="https://www.youtube.com/embed/zGXq7HkezSk
          
          
       " title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="why-section" id="whyus">
        <div className="why-left">
          <h2>WHY US?</h2>
          <p className="subtitle">9 ½ reasons why you should engage with iProdigy:</p>
          <div className="accordion">
            {whyUsData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button className={`accordion-question ${openIndex === index ? "active" : ""}`} onClick={() => toggleItem(index)}>
                  {item.question}
                  <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <div className="accordion-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="why-right">
          <img src={whyUsImage} alt="Why Choose Us" />
        </div>
      </div>
    </div>
  );
}