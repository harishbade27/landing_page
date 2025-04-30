import React, { useState, useEffect } from "react";
import "../App.css";
import { FaLightbulb, FaBullseye, FaUsers, FaUniversity, FaUserGraduate, FaGlobe } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const testimonials = [
  {
    message:
      "BeeS digital evaluation has made things very easy and time-bound. We published our results in just 15 working days.",
    name: "Sri Dr. N. V. Jagannadha Rao",
    designation: "Registrar, GIET University",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/3-1.jpg",
  },
  {
    message:
      "Our institution's evaluation process has completely transformed. Highly accurate and time-efficient.",
    name: "Dr. Anita Mehra",
    designation: "Dean, XYZ Institute",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/1-1.jpg",
  },
  {
    message:
      "Thanks to BeeS, exam results are now processed seamlessly and with incredible speed and accuracy.",
    name: "Prof. Ramesh Kumar",
    designation: "Controller of Exams, ABC University",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/5.jpg",
  },
];

const blogData = [
  {
    title:
      "Bees Software Solutions Partners with Presidency University to Digitize Examination Process and Enhance Academic Efficiency",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-06-05-at-18.36.27.jpg",
    author: "Bees-Admin",
    category: "Blog",
  },
  {
    title:
      "BeeS Software Solutions Private Limited and Institute of Actuaries of India (IAI) Join Forces to Digitize Examination Process for Enhanced Efficiency and Accuracy",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-06-05-at-18.30.02.jpg",
    author: "Bees-Admin",
    category: "Blog",
  },
  {
    title:
      "Revolutionizing Engineering Education: BeeS Software Company’s Impact at the Sixth International Conference on ICTIEE 2019",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/team.jpg",
    author: "Bees-Admin",
    category: "Blog",
  },
  {
    title:
      "Cutting-Edge Cloud–Enabled Software Product Unveiled by BeeS Software Solutions Private Limited, Revolutionizing Work Processes",
    image: "https://www.beessoftware.in/wp-content/uploads/2023/05/News-3-Image.png",
    author: "Bees-Admin",
    category: "News",
  },
];

const FeatureCard = ({ feature, isExpanded, onClick }) => {
  return (
    <div className={`feature-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
      <div className="card-header">
        <div className="feature-icon">
          <div className="main-icon">✓</div>
        </div>
        <h3>{feature.title}</h3>
        <span className="toggle-icon">
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>
      <div className="card-content">
        <p>{feature.content}</p>
      </div>
    </div>
  );
};

const Metric = ({ icon: Icon, target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div className="metric">
      <Icon className="metric-icon" />
      <h2>{count.toLocaleString()}+</h2>
      <p>{label}</p>
    </div>
  );
};

const logos = [
  "https://www.beessoftware.in/wp-content/uploads/2023/06/112.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/110.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/108.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/106.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/105.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/104.png",
  "https://www.beessoftware.in/wp-content/uploads/2023/06/91.png",
];


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [index, setIndex] = useState(0);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + itemsPerSlide) % logos.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) =>
      (prev - itemsPerSlide + logos.length) % logos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentImages = () => {
    const end = currentSlideIndex + itemsPerSlide;
    return logos
      .slice(currentSlideIndex, end)
      .concat(logos.slice(0, Math.max(0, end - logos.length)));
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index]);


  const features = [
    { title: "Comprehensive", content: "Able to manage and automate...", isMain: true },
    { title: "Flexibility", content: "Flexible enough to adapt...", isMain: true },
    { title: "Customizablity", content: "Allows for customization...", isMain: true },
    { title: "Scalability", content: "Able to scale up or down...", isMain: true },
    { title: "Integration", content: "Integrates with other systems...", isMain: true },
    { title: "User-friendly", content: "User-friendly interface...", isMain: true },
    { title: "Cost-effective", content: "Cost-effective solution...", isMain: true },
    { title: "Analytics", content: "Provides analytics and reporting...", isMain: true },
    { title: "Security", content: "Ensures the security of data...", isMain: true },
    { title: "Collaboration", content: "Facilitates collaboration...", isMain: true }
  ];

  const leftColumnFeatures = features.slice(0, 5);
  const rightColumnFeatures = features.slice(5);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const slides = ["https://www.beessoftware.in/wp-content/uploads/2023/09/1-3.png", "https://www.beessoftware.in/wp-content/uploads/2023/09/3.png", "https://www.beessoftware.in/wp-content/uploads/2023/09/4-2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <>
      <div id="heroCarousel" className="hero-carousel">
        <div
          className="carousel-inner"
          style={{ display: "flex", transition: "transform 1s ease", transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              style={{ minWidth: "100%", backgroundImage: `url(${slide})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
          ))}
        </div>
        <button onClick={handlePrev} className="carousel-button prev" aria-label="Previous">&#10094;</button>
        <button onClick={handleNext} className="carousel-button next" aria-label="Next">&#10095;</button>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <img src="https://www.beessoftware.in/wp-content/uploads/2023/05/bees-banner.png" alt="Banner" className="hero-image" />
        </div>
        <div className="hero-right">
          <h1 className="hero-heading">Futuristic Cloud ERP – <br /><span className="highlight">Cloudilya</span></h1>
          <p className="hero-description">Cloudilya - The ERP Sutra aims to transform traditional business operations...</p>
          <button className="hero-button">Discover More +</button>
        </div>
      </div>

      <div className="app-container">
        <div className="left-content">
          <div className="hero-container">
            <div className="about-us-button">ABOUT US</div>
            <h1 className="hero-title">why our app useful to you?</h1>
            <p className="hero-description">Work on the go - BeeS mobile application lets you work from anywhere...</p>
          </div>
          <div className="mission-vision-container">
            <div className="mission-block">
              <div className="icon-container">
                <FaLightbulb size={50} color="#3498db" />
              </div>
              <h3>Our Mission</h3>
              <p>Our mission is to offer the best automation solution...</p>
            </div>
            <div className="vision-block">
              <div className="icon-container">
                <FaBullseye size={50} color="#2ecc71" />
              </div>
              <h3>Our Vision</h3>
              <p>Our vision is to bring in a revolutionary change...</p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="image-container">
            <img src="https://www.beessoftware.in/wp-content/uploads/2023/05/Manage-your-daily-tasks-1-768x673.png" alt="App Showcase" className="main-image" />
          </div>
        </div>
      </div>

      <div className="simple-process-container">
        <div className="process-header">
          <h1>OUR SIMPLE PROCESS</h1>
        </div>
        <div className="process-content">
          <div className="main-title">
            <h2>Future ready applications</h2>
          </div>
          <div className="process-grid">
            {/* Left Column Item 1 */}
            <div className="grid-item left-item">
              <div className="icon-text-group">
                <img
                  src="https://www.beessoftware.in/wp-content/uploads/2023/05/667.png"
                  alt="Cloud Application"
                  className="process-icon"
                />
                <div className="text-content">
                  <h3>ONE CLOUD APPLICATION FOR</h3>
                  <h3>ALL YOUR BUSINESS NEEDS</h3>
                </div>
              </div>
            </div>

            {/* Right Column Item 1 */}
            <div className="grid-item right-item">
              <div className="icon-text-group reverse">
                <img
                  src="https://www.beessoftware.in/wp-content/uploads/2023/05/2-1-1.png"
                  alt="Latest Technologies"
                  className="process-icon"
                />
                <div className="text-content">
                  <h3>POWERED WITH LATEST</h3>
                  <h3>TECHNOLOGIES</h3>
                </div>
              </div>
            </div>

            {/* Left Column Item 2 */}
            <div className="grid-item left-item">
              <div className="icon-text-group">
                <img
                  src="https://www.beessoftware.in/wp-content/uploads/2023/05/3-2.png"
                  alt="Savings"
                  className="process-icon"
                />
                <div className="text-content">
                  <h3>SAVES INVESTMENT ON</h3>
                  <h3>SOFTWARE, IMPROVES</h3>
                  <h3>PRODUCTIVITY</h3>
                </div>
              </div>
            </div>

            {/* Right Column Item 2 */}
            <div className="grid-item right-item">
              <div className="icon-text-group reverse">
                <img
                  src="https://www.beessoftware.in/wp-content/uploads/2023/05/5.png"
                  alt="Analytics"
                  className="process-icon"
                />
                <div className="text-content">
                  <h3>ANALYTICS AND DASHBOARDS</h3>
                  <h3>HELP IN BETTER DECISION</h3>
                  <h3>MAKING</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="split-accordion-container">
        <div className="accordion-header">
          <h2>Why Cloudilya is Important to your organization?</h2>
          <p className="subtitle">Cloudilya-The ERP Sutra integrates all critical business processes...</p>
        </div>
        <div className="columns-container">
          <div className="accordion-column">
            {leftColumnFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} isExpanded={expandedIndex === index} onClick={() => toggleAccordion(index)} />
            ))}
          </div>
          <div className="accordion-column">
            {rightColumnFeatures.map((feature, index) => (
              <FeatureCard key={index + 5} feature={feature} isExpanded={expandedIndex === index + 5} onClick={() => toggleAccordion(index + 5)} />
            ))}
          </div>
        </div>
      </div>

      <div className="metrics-section">
        <Metric icon={FaUsers} target={120} label="Team members" />
        <Metric icon={FaUniversity} target={150} label="Top Institutions" />
        <Metric icon={FaUserGraduate} target={1000000} label="Students" />
        <Metric icon={FaGlobe} target={20} label="Years of excellence" />
      </div>

      <div className="video-section">
        <h2 className="video-title">
          BeeS <span className="highlight-text">Cloudilya</span> – The ERP Sutra Launch
        </h2>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ObfnGIU9jEU"
            title="BeeS Cloudilya – The ERP Sutra Launch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-image">
          <img
            src="https://www.beessoftware.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-12.05.48.jpg"
            alt="Bee Robot"
          />
        </div>
        <div className="contact-form">
          <span className="form-label">GET IN TOUCH</span>
          <h2 className="form-title">
            Bringing Your <span className="highlight">Vision</span>
          </h2>
          <form>
            <div className="input-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Your Subject" />
            </div>
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <section className="blog-section">
        <div className="blog-header">
          <span className="blog-badge">LATEST NEWS & BLOGS</span>
        </div>

        <div className="blog-grid">
          {blogData.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <button className="read-more-btn">
                  Read More <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-badge">TESTIMONIAL</div>
        <h2 className="testimonial-heading">
          What Client <span>Think</span> About US ?
        </h2>

        <div className="testimonial-box">
          <p className="testimonial-message">"{testimonials[index].message}"</p>
          <div className="testimonial-avatar-wrapper">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="testimonial-avatar"
            />
          </div>
        </div>

        <div className="testimonial-info">
          <h4>{testimonials[index].name}</h4>
          <p>{testimonials[index].designation}</p>
        </div>

        <div className="testimonial-arrow testimonial-arrow-left" onClick={prev}>
          <FaChevronLeft />
        </div>
        <div className="testimonial-arrow testimonial-arrow-right" onClick={next}>
          <FaChevronRight />
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`testimonial-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </section>

      <section className="client-section">
        <div className="client-badge">OUR ESTEEMED CLIENTS</div>

        <div className="slider-container">
       

          <div className="logo-slide">
            {getCurrentImages().map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`client-${i}`}
                className="client-logo"
              />
            ))}
          </div>

       
        </div>

        <div className="map-container">
          <iframe
            title="bees software map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4773221551486!2d78.42911631487762!3d17.43787138804964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c4efbfcfbb%3A0x1a52b2c65aa0bc2c!2sbees%20software%20solutions%20private%20limited!5e0!3m2!1sen!2sin!4v1684562407054!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </>
  );
};

export default HeroSection;