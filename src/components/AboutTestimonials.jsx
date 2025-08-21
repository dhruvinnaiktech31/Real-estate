import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";

const testimonials = [
  { name: "Priya S.", text: "Finding my rental was so easy! The platform is user-friendly." },
  { name: "Rahul K.", text: "Excellent service and support. I recommend it to all my friends." },
  { name: "Ankit M.", text: "Very convenient and fast. Helped me find the perfect apartment!" },
  { name: "Sneha P.", text: "Great customer service and verified listings. Highly recommend." },
  { name: "Rohit D.", text: "A seamless experience from start to finish. Reliable." },
];

const AboutTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="about-testimonials">
      <h2>What Our Users Say</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AboutTestimonials;
