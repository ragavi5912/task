import React from "react";
import "./mains.css";
import FAQ from '../Faq/faq.jsx';
import Footer from "../footer/footer.jsx";

const Main = () => {
  return (
    <>
      <section className="main-section">
        <div className="main-container">
          <div className="main-content">
            <h1 className="main-title">CREATING TOMORROW'S LEADERS TODAY</h1>
            <p className="main-subtitle">
              Join us on Australia's Number 1 AI learning platform for kids and teens and watch your kids thrive online!
            </p>
            <div className="main-buttons">
              <button className="btn get-started">Get Started</button>
              <button className="btn book-demo">Book a Demo</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Section */}
      <section className="img-section">
        <div className="img-container">
          <h2 className="img-title">HOW CAN YOUR CHILD BECOME A CRITICAL<br/> THINKER WITH IPRODUGY?</h2>
          <div className="img-content">
            <p>
              Learning Artificial Intelligence (AI) with IPnology is an excellent way for kids to develop critical thinking skills. Our Automation Services breaking down tasks into smaller components and automating those using robots, which requires a logical and analytical approach.
            </p>
            <p>
              By learning this technology, kids can develop problem-solving and critical thinking skills as they identify the most efficient way to automate a task, convey potential errors or exceptions, and troubleshoot issues that arise.
            </p>
            <p>
              Additionally, the program provides opportunities for kids to experiment with different solutions and evaluate the effectiveness of their automation. Overall, IPnology provides a hands-on and practical way for kids to develop critical thinking skills, which are essential for success in many aspects of life.
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/BtiSek5ofCI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="wavee-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="wavee-shape"
              opacity="0.3"
              d="M473,67c-203.9,88.3-263.1-34-320.3,0C66,119.8,7,59,7,59V100h1000V59c-62.1-26.1-94.9,29.3-322.8,8.3C623.2,38.3,582,12,473,67z"
            />
            <path
              className="wavee-shape"
              opacity="0.66"
              d="M734,67c-45.5,0-77.2-23.2-129-19.3c-28.6,2.1-53.6,18.3-81.8,18.3C479,66,455,54,392,66s-68,23-127,23c-59,0-113-32-163-32V100h1000V67c-65,0-104,31-176,31c-71,0-90-32-176-31z"
            />
            <path
              className="wavee-shape"
              d="M766,28.9c-207.5,57-266.6,55-395.1,19.5C242.5,4.8,148,35.8,0,39.9V100h1000V0C921,0,837-27.5,766,28.9z"
            />
          </svg>
        </div>

        {/* Start Content Section */}
        <div className="start-content">
          <div className="start-text">
            <h1>WHY START CODING FOR KIDS WITH iPRODIGY</h1>
            <p>iProdigy is the only platform that's Empowering Young Innovators! In a world that is constantly evolving, it's time to embark on an exciting journey of education, empowerment and exploration with your child. Prepare them for the AI Revolution and watch them shine as future leaders!</p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/EQYDnA1kdzg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Baby Content Section */}
        <div className="baby-content">
          <div className="baby-text">
            <h1>TRANSFORMATION STORY FROM BABY<br/> PRODIGY TO iPRODIGY</h1>
            <p>Every child is born with a natural curiosity and a thirst for knowledge. But for some children, that thirst for knowledge turns into a passion for learning and a desire to excel beyond their peers. These children are known as baby prodigies, and they're the first step on the path to becoming an iProdigy.</p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/W8wkjr_2Id4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <FAQ/>
        <Footer/>
      </section>
    </>
  );
};

export default Main;