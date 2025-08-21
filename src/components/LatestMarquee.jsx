// LatestMarquee.js
import React from "react";
import properties from "../data";
import Marquee from "react-fast-marquee";
import "../styles/latestmarquee.css";

function LatestMarquee() {
  return (
    <section className="latest-marquee py-4">
      <h2 className="text-center fw-bold mb-4">🔥 Latest Dropped Properties</h2>
      <Marquee pauseOnHover>
        <div className="marquee">
          <div className="marquee-content">
            {properties.map((property, i) => (
              <div key={i} className="marquee-card shadow-sm">
                <img
                  src={property.image}
                  alt={property.title}
                  className="img-fluid rounded"
                />
                <div className="marquee-info">
                  <h6 className="fw-bold">{property.title}</h6>
                  <p className="mb-1">{property.location}</p>
                  <p className="text-danger fw-bold">₹{property.price}</p>
                </div>

                {/* Hidden extra details */}
                <div className="marquee-hover">
                  <p>More Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Marquee>
    </section>
  );
}

export default LatestMarquee;
