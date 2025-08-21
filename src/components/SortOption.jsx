import React from "react";

export default function SortOptions({ sortValue, setSortValue }) {
  return (
    <div className="sort-options">
      <label>Sort By: </label>
      <select
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="newest">Newest → Oldest</option>
        <option value="oldest">Oldest → Newest</option>
      </select>
    </div>
  );
}
