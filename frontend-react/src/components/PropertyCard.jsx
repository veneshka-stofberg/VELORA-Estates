import { Link } from "react-router-dom";

export function formatPrice(value) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function PropertyCard({ property }) {
  return (
    <Link className="listing-card" to={`/properties/${property.id}`}>
      <div className="listing-image">
        <img
          src={property.images[0]}
          alt={`${property.name} illustrative photograph`}
          loading="lazy"
        />
        <span className="listing-badge">
          {property.featured ? "SIGNATURE COLLECTION" : "EXCLUSIVE RESIDENCE"}
        </span>
      </div>

      <div className="listing-info">
        <span className="listing-location">{property.location}</span>
        <h3>{property.name}</h3>
        <p className="listing-price">{formatPrice(property.price)}</p>

        <div className="listing-specs">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} m²</span>
        </div>

        <span className="listing-action">EXPLORE RESIDENCE ↗</span>
      </div>
    </Link>
  );
}
