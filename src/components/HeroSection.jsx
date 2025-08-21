import { Link } from "react-router-dom";
import heroImg from "../assets/properties/house-1.png"; // Replace with your own hero image
import { scrollToTop } from "../utils/Scroll";

function HeroSection() {

  return (
    <section
      className="hero d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div className="container">
      
        <Link to="/listings" className="btn btn-dark btn-lg shadow animate__animated animate__zoomIn" style={{marginTop:"250px", marginRight:"20px"}}onClick={scrollToTop}>
          Explore Listings
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
