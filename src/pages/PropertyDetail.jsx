import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data";
import "../styles/propertydetails.css";
import Marquee from "react-fast-marquee";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <p className="not-found">Property not found.</p>;

  const images = property.image || [property.image];
  const addressLine = `${property.type} > ${property.city} > ${property.state} > ${"India"}`;

  return (
    <div className="property-detail-container">
      {/* Left Main Content */}
      <div className="property-left">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        {/* Continuous Image Marquee */}
        <div className="property-image-marquee">
          <Marquee pauseOnHover speed={50} gradient={false}>
            {images.map((img, idx) => (
              <div key={idx} className="marquee-item">
                <img src={img} alt={`${property.title} ${idx + 1}`} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Address and Name */}
        <p className="property-address">{addressLine}</p>
        <h1 className="property-title">{property.title}</h1>

        {/* Rent and Area */}
        <div className="property-rent-area">
          <p className="rent">💰 ₹{property.price} / month</p>
          <p className="area">📏 {property.size} m²</p>
        </div>

        {/* Rooms and Area Details */}
        <p className="property-rooms-area"><strong>🛏 {property.rooms} rooms | 📏 {property.size} m²</strong></p>

        {/* Short Details */}
        <div className="property-short-details">
          <p>{property.description || "No description available."}</p>
        </div>

        {/* About This Property */}
        <h3>Details about this property</h3>
        <div className="property-about-grid">
          <div>Type: {property.type}</div>
          <div>Rooms: {property.rooms}</div>
          <div>Area: {property.size} m²</div>
          <div>Rent: ₹{property.price}/month</div>
          <div>Location: {property.location}</div>
          <div>Available From: {property.availableFrom || "ASAP"}</div>
          <div>Rental Period: {property.rentalPeriod || "Unlimited"}</div>
          <div>City: {property.city || "-"}</div>
          <div>State: {property.state || "-"}</div>
        </div>

        {/* Map */}
        <div className="property-map">
          <iframe
            title="Property Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="property-right">
        <div className="rent-info">
          <p className="rent-sidebar">₹{property.price} / month</p>
          <hr />
          <p><strong>Rental Period:</strong> <span className="blue">{property.rentalPeriod || "Unlimited"}</span></p>
          <p><strong>Available From:</strong> <span className="blue">{property.availableFrom || "ASAP"}</span></p>
          <button className="contact-btn">Contact Landlord</button>
        </div>

        <div className="landlord-info">
          <h4>Landlord</h4>
          <p>✅ Approved by rentola.com</p>
          <p>🕒 Last active: about 1 hour ago</p>
          <p className="credibility">About landlord credibility</p>
          <p className="report">Any concerns about this listing? <span>Report it</span></p>
        </div>
      </div>
    </div>
  );
}
