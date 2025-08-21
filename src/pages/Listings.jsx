// Listings.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import properties from "../data";
import "../styles/listing.css";
import SortOptions from "../components/SortOption";
import { scrollToTop } from "../utils/Scroll";

export default function Listings() {
  const locationObj = useLocation();
  const queryParams = new URLSearchParams(locationObj.search);
  const typeFromQuery = queryParams.get("type");
  const locationFromQuery = queryParams.get("location");

  const [filters, setFilters] = useState({
    type: typeFromQuery ? [typeFromQuery] : [],
    location: locationFromQuery || "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    minRooms: "",
    maxRooms: "",
  });

  const [sortValue, setSortValue] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
   
  // Update filters when URL changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      type: typeFromQuery ? [typeFromQuery] : [],
      location: locationFromQuery || "",
    }));
  }, [typeFromQuery, locationFromQuery]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else if (name === "location") {
      setFilters((prev) => ({ ...prev, location: value }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value === "" ? "" : Number(value) }));
    }
  };

  const normalizePrice = (priceStr) => parseInt(priceStr.toString().replace(/[^0-9]/g, ""), 10) || 0;
const knownLocations = ["Bangalore", "Pune", "Surat", "Hyderabad", "Delhi"];
  const filtered = properties.filter((p) => {
    const price = normalizePrice(p.price);
    if (filters.type.length && !filters.type.includes(p.type)) return false;
     if (filters.location) {
    if (filters.location.toLowerCase() === "other") {
      if (knownLocations.some((loc) => p.location.toLowerCase().includes(loc.toLowerCase()))) {
        return false; // Exclude known locations
      }
    } else {
      if (!p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    }
  }
    if (filters.minPrice !== "" && price < filters.minPrice) return false;
    if (filters.maxPrice !== "" && price > filters.maxPrice) return false;
    if (filters.minSize !== "" && p.size < filters.minSize) return false;
    if (filters.maxSize !== "" && p.size > filters.maxSize) return false;
    if (filters.minRooms !== "" && p.rooms < filters.minRooms) return false;
    if (filters.maxRooms !== "" && p.rooms > filters.maxRooms) return false;
    return true;
  });

  let sorted = [...filtered];
  if (sortValue === "price-low") sorted.sort((a, b) => normalizePrice(a.price) - normalizePrice(b.price));
  else if (sortValue === "price-high") sorted.sort((a, b) => normalizePrice(b.price) - normalizePrice(a.price));
  else if (sortValue === "newest") sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sortValue === "oldest") sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

  const handlePrev = (id, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : imagesLength - 1,
    }));
  };

  const handleNext = (id, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: prev[id] < imagesLength - 1 ? prev[id] + 1 : 0,
    }));
  };

  // Pagination
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sorted.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="listing-page">
      {/* Sidebar Filters */}
      <aside className="filters">
        <h4>Location</h4>
        <input
          type="text"
          name="location"
          placeholder="Search location..."
          value={filters.location}
          onChange={handleFilterChange}
        />

        <h4>Property Type</h4>
        {["Villa", "Cottage", "Apartment", "Row House", "Farm House", "Beach House", "Commercial", "Pent House"].map((t) => (
          <label key={t} className="filter-check">
            <input type="checkbox" name="type" value={t} onChange={handleFilterChange} checked={filters.type.includes(t)} /> {t}
          </label>
        ))}

        <h4>Total Rent</h4>
        <div className="range-inputs">
          <input type="number" name="minPrice" placeholder="Min" onChange={handleFilterChange} />
          <input type="number" name="maxPrice" placeholder="Max" onChange={handleFilterChange} />
        </div>

        <h4>Size (m²)</h4>
        <div className="range-inputs">
          <input type="number" name="minSize" placeholder="Min" onChange={handleFilterChange} />
          <input type="number" name="maxSize" placeholder="Max" onChange={handleFilterChange} />
        </div>

        <h4>Number of Rooms</h4>
        <div className="range-inputs">
          <input type="number" name="minRooms" placeholder="Min" onChange={handleFilterChange} />
          <input type="number" name="maxRooms" placeholder="Max" onChange={handleFilterChange} />
        </div>
      </aside>

      {/* Listings */}
      <main className="listings">
        <SortOptions sortValue={sortValue} setSortValue={setSortValue} />
        <h2>{sorted.length} Properties Found</h2>
        <div className="property-grid">
          {currentItems.map((p) => {
            const images = Array.isArray(p.image) ? p.image : [p.image];
            const currentIndex = currentImageIndex[p.id] || 0;
            return (
              <Link to={`/property/${p.id}`} key={p.id} className="property-card-link" onClick={scrollToTop}>
                <div className="property-card">
                  <div className="image-wrapper">
                    <img src={images[currentIndex]} alt={p.title} />
                    <button className="prev-btn" onClick={(e) => { e.preventDefault(); handlePrev(p.id, images.length); }}>‹</button>
                    <button className="next-btn" onClick={(e) => { e.preventDefault(); handleNext(p.id, images.length); }}>›</button>
                  </div>
                  <div className="property-info">
                    <h5>{p.title}</h5>
                    <p>{p.location}</p>
                    <p className="price">₹{p.price} / month</p>
                    <p className="details">🛏 {p.rooms} | 📏 {p.size} m²</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
