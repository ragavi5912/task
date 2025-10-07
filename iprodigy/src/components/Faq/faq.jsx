import React, { useState } from 'react';
import './faq.css';
import insightImage from "../../assets/bgimage1.jpg"; // ✅ replace with your image path


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How long is each session?",
      answer: "Each session is 60 minutes long, designed to keep young learners engaged and focused."
    },
    {
      question: "Do students need any experience with Intelligent Robotic Process Automation (RPA)?",
      answer: "No prior experience is needed! Our courses are designed for beginners and we start with the fundamentals."
    },
    {
      question: "What's the age range for IProdigy's super fun RPA classes?",
      answer: "Our RPA classes are designed for students aged 10-16 years old."
    },
    {
      question: "I have a Mac laptop, but I'd like to join a course that supports only Windows. What are my options?",
      answer: "You can use Boot Camp or virtualization software like Parallels Desktop to run Windows on your Mac, or consider our Mac-compatible alternative courses."
    },
    {
      question: "Which digital playground do you use for your workshops?",
      answer: "We use UiPath for our RPA workshops, which provides an intuitive and engaging platform for young learners."
    },
    {
      question: "Is there the opportunity to have a 'smask-peek' with a free trial lesson before signing up?",
      answer: "Yes! We offer a free trial lesson so students can experience our teaching style and course content before committing."
    },
    {
      question: "Can parents tag along to support our special needs superstars during online workshops?",
      answer: "Absolutely! We welcome parental support and encourage parents to be involved in their child's learning journey."
    },
    {
      question: "Do you offer make-up lessons or refunds for missed classes?",
      answer: "We offer make-up lessons for missed classes when notified in advance. Refunds are subject to our cancellation policy."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      
      <div className="insights-section">
        <h2 className="insights-title">LATEST INSIGHTS</h2>

        <div className="insights-card">
          <img src={insightImage} alt="Insight" className="insight-image" />

          <div className="insight-content">
            <h3 className="insight-heading">
              Celebrating success of iProdigy School Holiday Program!
            </h3>

            <a href="#" className="insight-link">
              READ MORE »
            </a>

            <p className="insight-date">May 3, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;