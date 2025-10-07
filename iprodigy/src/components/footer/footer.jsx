import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* Full width background */}
      <div className="footer-full-width">
        {/* Container for content with max-width */}
        <div className="footer-container">
          {/* ===== Contact Us Heading ===== */}
          <div className="footer-header">
            <h2 className="footer-title">CONTACT US</h2>
            <p className="footer-subtext">
              To watch your child transform into the next generation of innovators
              and leaders, contact us today!
            </p>
          </div>

          {/* ===== Contact Info Sections ===== */}
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-box">
                <div className="footer-line"></div>
                <h3>Find Us Here</h3>
                <p>Based in Girraween, Sydney NSW</p>
                <div className="footer-socials">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>

              <div className="footer-box">
                <div className="footer-line"></div>
                <h3>Get In Touch</h3>
                <p>1300 032 566</p>
                <p>info@iprodigy.com.au</p>
              </div>

              <div className="footer-box">
                <div className="footer-line"></div>
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 9am - 8pm</p>
                <p>Saturday: 10am - 4pm</p>
              </div>
            </div>

            {/* ===== Newsletter Section ===== */}
            <div className="newsletter">
              <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
              <p className="newsletter-subtext">
                Stay up to date, learn about our courses and gain first access to
                our course specials.
              </p>

              <form className="newsletter-form">
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="* Email Address" required />
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}