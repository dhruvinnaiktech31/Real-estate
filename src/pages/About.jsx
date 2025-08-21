import React from "react";
import "../styles/about.css";
import AboutTestimonials from "../components/AboutTestimonials";
import mission from "../assets/mission.jpg";
import whyus from "../assets/whyus.jpg";
const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted platform for renting properties quickly and easily.</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2022, our journey began with a simple idea – to make renting
          hassle-free for everyone. From connecting landlords with tenants to
          providing a transparent rental experience, we’ve grown into a
          platform trusted by thousands.
        </p>
      </section>

      {/* Mission & Image */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            We aim to simplify the renting process, connecting property owners
            with tenants seamlessly. Our goal is to make renting transparent,
            convenient, and secure for everyone.
          </p>
        </div>
        <div className="mission-image">
          <img
            src={mission}
            alt="Mission"
          />
        </div>
      </section>
 {/* Why Choose Us */}

   <section className="about-why">
  <div className="why-container">
    <div className="why-image">
      <img
        src={whyus}
        alt="Why Choose Us"
      />
    </div>
    <div className="why-content">
      <h2>Why Choose Us</h2>
      <ul>
        <li>Verified listings with real photos and details</li>
        <li>Easy online booking and rental agreements</li>
        <li>Customer support available 24/7</li>
        <li>Trusted by thousands of satisfied users</li>
      </ul>
    </div>
  </div>
</section>


      {/* Our Values */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Trust</h3>
            <p>We prioritize transparency and integrity in every transaction.</p>
          </div>
          <div className="value-card">
            <h3>Convenience</h3>
            <p>Our platform is designed to make renting fast and easy.</p>
          </div>
          <div className="value-card">
            <h3>Support</h3>
            <p>We provide dedicated customer service for landlords and tenants.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We constantly improve our platform to deliver the best experience.</p>
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" />
            <h3>Jane Smith</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Team member" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
    <AboutTestimonials/>

    </div>
  );
};
export default About;
