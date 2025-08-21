// LocationCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/locationcards.css";
import { locations } from "../data.js";
import { scrollToTop } from "../utils/Scroll.js";

export default function LocationCards() {

  return (
    <div className="location-container">
      <h2 className="location-title">Explore Properties by Location</h2>
      <div className="location-grid">
        {locations.map((loc, i) => (
          <Link
            key={i}
            to={`/listings?location=${encodeURIComponent(loc.name)}`}
            className="location-card-link"
            onClick={scrollToTop}
          >
            <div className="location-card">
              <img src={loc.image} alt={loc.name} className="location-img" />
              <div className="overlay">
                <h3>{loc.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
