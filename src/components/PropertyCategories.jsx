import React from "react";
import { categories } from "../data";
import "../styles/propertycategories.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/Scroll";

function PropertyCategories() {

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Explore Property Types</h2>
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-3">
              {/* Link to Listings with query parameter */}
              <Link to={`/listings?type=${encodeURIComponent(cat.name)}`} className="text-decoration-none" onClick={scrollToTop}>
                <div className="category-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid rounded"
                  />
                  <div className="category-overlay">
                    <h5>{cat.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyCategories;
