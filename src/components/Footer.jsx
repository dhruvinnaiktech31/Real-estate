import { Link } from "react-router-dom";
import {scrollToTop} from "../utils/Scroll.js";
function Footer() {


  return (
<>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or suggestions, feel free to contact us at{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvin.naik.tech31@gmail.com&su=Query%20Request">dhruvin.naik.tech31@gmail.com</a>.
        </p>
      </section>
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">DreamHomes</h5>
            <p>Your reliable partner in finding the ideal rental property.</p>
            <p><i>"Where every door leads to a new beginning, and every home holds a story worth living."</i></p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-3">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/listings" className="text-light text-decoration-none" onClick={scrollToTop}>Listings</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none" onClick={scrollToTop}>Contact</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none" onClick={scrollToTop}>FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-md-2 mb-3">
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3">
            <h6 className="mb-3">Connect with us</h6>
            <a href="https://wa.me/919876543210" className="text-light me-3" target="_blank"
  rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.linkedin.com" className="text-light me-3" target="_blank"
  rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" className="text-light me-3" target="_blank"
  rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" className="text-light" target="_blank"
  rel="noopener noreferrer">Twitter</a>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} DreamHomes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
