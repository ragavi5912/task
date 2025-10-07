import { useState } from "react";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false); // Dropdown toggle

  // Smooth scroll handler
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after click
      setShowCourses(false); // Close mobile dropdown
    }
  };

  // Courses list
  const courses = [
    { name: "Junior Prodigy", id: "junior" },
    { name: "Tween Prodigy", id: "tween" },
    { name: "Teen Prodigy", id: "teen" },
    { name: "PiProdigy", id: "pi" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <div className="logo">
          <img 
            src="/src/assets/logo.png" 
            alt="Logo" 
            className="logo-img"
          />
        </div>

        {/* MENU (Desktop) */}
        <ul className="menu">
          <li onClick={() => handleScroll("home")}>HOME</li>

          {/* Courses Dropdown */}
          <li 
            className="dropdown"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            COURSES <span className="dropdown-icon">▼</span>
            {showCourses && (
              <ul className="dropdown-menu">
                {courses.map((course) => (
                  <li key={course.id} onClick={() => handleScroll(course.id)}>
                    {course.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li onClick={() => handleScroll("about-us")}>ABOUT</li>
          <li onClick={() => handleScroll("whyus")}>WHY US?</li>
          <li onClick={() => handleScroll("faq")}>FAQ</li>
          <li onClick={() => handleScroll("insights")}>INSIGHTS</li>
          <li onClick={() => handleScroll("contact")}>CONTACT</li>
        </ul>

        {/* Button (Desktop) */}
        <button className="demo-btn">
          Book a Demo →
        </button>

        {/* Mobile Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Blue Line */}
      <div className="navbar-underline"></div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => handleScroll("home")}>HOME</li>

            {/* Mobile Dropdown */}
            <li onClick={() => setShowCourses(!showCourses)} style={{ cursor: "pointer" }}>
              COURSES <span className="dropdown-icon">▼</span>
            </li>

            {showCourses && (
              <ul className="mobile-dropdown">
                {courses.map((course) => (
                  <li key={course.id} onClick={() => handleScroll(course.id)}>
                    {course.name}
                  </li>
                ))}
              </ul>
            )}

            <li onClick={() => handleScroll("about-us")}>ABOUT</li>
            <li onClick={() => handleScroll("whyus")}>WHY US?</li>
            <li onClick={() => handleScroll("faq")}>FAQ</li>
            <li onClick={() => handleScroll("insights")}>INSIGHTS</li>
            <li onClick={() => handleScroll("contact")}>CONTACT</li>

            <li>
              <button className="demo-btn full-width">
                Book a Demo →
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
