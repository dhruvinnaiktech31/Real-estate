import React, { useState, useEffect } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Formspree
    const response = await fetch("https://formspree.io/f/mgvzdjbn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("✅ Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Oops! There was a problem sending your message.");
    }
  };

  // Auto-hide status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions or need help finding your dream property? We’re here to assist you!</p>
      </section>

      {/* Contact Section */}
      <section className="contact-main">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Reach out to us via any of the following ways:</p>
          <ul>
            <li>📞 Phone: +91 9876543210</li>
            <li>✉ Email: support@dreamhomes.com</li>
            <li>📍 Address: Sagar Apartment, Kailash Nagar, Majura Gate, Surat, Gujarat 395002</li>
          </ul>

          {/* Google Map */}
          <div className="map-container" style={{ marginTop: "20px", height: "300px" }}>
            <iframe
              title="DreamHomes Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.189376687044!2d72.81848897432265!3d21.18463468050394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3ed6355d63%3A0x453e8332e1178c53!2sWebforest!5e0!3m2!1sen!2sin!4v1755763404723!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          {/* Show success/error message */}
          {status && <p className="status-message">{status}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">
              Send Message <span id="mail-arrow">→</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
