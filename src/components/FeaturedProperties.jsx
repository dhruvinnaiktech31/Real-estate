import PropertyCard from "./PropertyCard";
import properties from "../data";
import { Link } from "react-router-dom";

function FeaturedProperties() {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Properties</h2>
          <p className="text-muted">
            Explore our top hand-picked properties just for you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="row g-4">
          {properties.slice(-6).map((property) => (
            <div key={property.id} className="col-12 col-sm-6 col-lg-4">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <Link to="/listings" className="btn btn-primary px-4 py-2" onClick={scrollToTop}>
          Show More
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProperties;
