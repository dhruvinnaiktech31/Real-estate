import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const images = property.image || [property.image];
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    
      <div className="card h-100 shadow-sm border-0 mx-auto">
        {/* Image */}
        <img
          src={images[0]}
          className="card-img-top"
          alt={property.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Content */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{property.title}</h5>
          <p className="text-muted mb-2">{property.location}</p>
          <p className="fw-semibold text-primary mb-3">₹{property.price}</p>
          <Link to={`/property/${property.id}`} className="text-decoration-none text-dark" onClick={scrollToTop}>
          <button className="btn btn-outline-primary mt-auto">
            View Details
          </button> </Link>
        </div>
      </div>
   
  );
}

export default PropertyCard;
