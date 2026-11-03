import { useEffect, useMemo, useState } from "react";
import properties from "../data/properties.js";
import PropertyCard from "../components/PropertyCard.jsx";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");

  useEffect(() => {
    document.title = "Our Collection | VELORA Estates";
  }, []);

  const results = useMemo(() => {
    const term = search.trim().toLowerCase();

    return properties.filter(p => {
      return (
        (p.name.toLowerCase().includes(term) ||
         p.location.toLowerCase().includes(term)) &&
        (!type || p.type === type) &&
        (!maxPrice || p.price <= Number(maxPrice)) &&
        (!minBeds || p.bedrooms >= Number(minBeds))
      );
    });
  }, [search, type, maxPrice, minBeds]);

  function resetFilters() {
    setSearch("");
    setType("");
    setMaxPrice("");
    setMinBeds("");
  }

  return (
    <>
      <section className="collection-hero">
        <div className="collection-hero-overlay"></div>
        <div className="collection-hero-content">
          <p className="eyebrow">THE VELORA COLLECTION</p>
          <h1>Extraordinary <em>Living.</em></h1>
          <p>A curated showcase of architectural excellence.</p>
        </div>
      </section>

      <section className="collection-section section-padding">
        <div className="section-label">
          <span className="label-line"></span>
          DISCOVER YOUR RESIDENCE
        </div>

        <div className="collection-intro">
          <h2 className="section-title">
            Explore the <em>Collection.</em>
          </h2>
          <p>
            Find the residence that reflects your vision
            of exceptional living.
          </p>
        </div>

        <div className="filter-panel">
          <div className="filter-field search-field">
            <label htmlFor="searchInput">SEARCH LOCATION OR NAME</label>
            <input
              id="searchInput"
              type="search"
              placeholder="e.g. Sandton, Aurelia"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-field">
            <label htmlFor="typeFilter">PROPERTY TYPE</label>
            <select
              id="typeFilter"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="priceFilter">MAXIMUM PRICE</label>
            <select
              id="priceFilter"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="5000000">R5 Million</option>
              <option value="10000000">R10 Million</option>
              <option value="15000000">R15 Million</option>
              <option value="20000000">R20 Million</option>
              <option value="25000000">R25 Million</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="bedFilter">MINIMUM BEDROOMS</label>
            <select
              id="bedFilter"
              value={minBeds}
              onChange={e => setMinBeds(e.target.value)}
            >
              <option value="">Any</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>

        <div className="listing-toolbar">
          <p role="status" aria-live="polite">
            {results.length} residences found
          </p>
          <button className="reset-button" onClick={resetFilters}>
            CLEAR FILTERS ↗
          </button>
        </div>

        <div className="listing-grid">
          {results.length > 0 ? (
            results.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="empty-results">
              <h3>No residences found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>

        <p className="demo-note">
          Fictional demonstration listings, prices and specifications.
          Photographs are illustrative.
        </p>
      </section>
    </>
  );
}
