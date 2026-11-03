import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import properties from "../data/properties.js";
import { formatPrice } from "../components/PropertyCard.jsx";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  const [photoIndex, setPhotoIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    document.title = property
      ? `${property.name} | VELORA Estates`
      : "Residence Not Found | VELORA Estates";
    setPhotoIndex(0);
    setForm({ name: "", email: "", message: "" });
  }, [property]);

  if (!property) {
    return (
      <section className="not-found">
        <h1>Residence Not Found</h1>
        <p>This residence does not exist in our collection.</p>
        <Link className="btn btn-dark" to="/properties">
          View Collection
        </Link>
      </section>
    );
  }

  const images = property.images;

  function changePhoto(direction) {
    setPhotoIndex(current =>
      (current + direction + images.length) % images.length
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(previous => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Enquiry: ${property.name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n` +
      `Property: ${property.name}\n\n${message}`
    );

    window.location.href =
      `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="detail-heading">
        <Link className="back-link" to="/properties">
          ← BACK TO COLLECTION
        </Link>

        <p className="eyebrow">EXCLUSIVE RESIDENCE</p>
        <h1>{property.name}</h1>

        <div className="detail-heading-bottom">
          <span>{property.location}</span>
          <strong>{formatPrice(property.price)}</strong>
        </div>
      </section>

      <section className="detail-gallery">
        <div className="main-photo">
          <img
            src={images[photoIndex]}
            alt={`${property.name} — gallery photo ${photoIndex + 1}`}
          />

          <div className="gallery-controls">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => changePhoto(-1)}
            >
              ←
            </button>
            <span>{photoIndex + 1} / {images.length}</span>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => changePhoto(1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="thumbnail-row">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              className={`thumbnail ${photoIndex === index ? "selected" : ""}`}
              aria-label={`View photo ${index + 1}`}
              aria-pressed={photoIndex === index}
              onClick={() => setPhotoIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery thumbnail ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="detail-content section-padding">
        <div className="detail-main">
          <div className="section-label">
            <span className="label-line"></span>
            PROPERTY OVERVIEW
          </div>

          <h2 className="section-title">
            A remarkable <em>residence.</em>
          </h2>

          <p className="detail-description">
            {property.description}
          </p>

          <div className="detail-stats">
            <div><strong>{property.bedrooms}</strong><span>BEDROOMS</span></div>
            <div><strong>{property.bathrooms}</strong><span>BATHROOMS</span></div>
            <div><strong>{property.garages}</strong><span>GARAGES</span></div>
            <div><strong>{property.area}</strong><span>AREA (m²)</span></div>
          </div>

          <h3 className="features-title">Residence Features</h3>

          <div className="features-grid">
            {property.features.map(feature => (
              <span key={feature}>✧ {feature}</span>
            ))}
          </div>
        </div>

        <aside className="enquiry-panel">
          <p className="eyebrow">PRIVATE ENQUIRY</p>
          <h3>Discover Your<br />Next Chapter.</h3>
          <p>Interested in this residence? Send us an enquiry.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="enquiryName">Full Name</label>
            <input
              id="enquiryName"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="enquiryEmail">Email Address</label>
            <input
              id="enquiryEmail"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="enquiryMessage">Your Message</label>
            <textarea
              id="enquiryMessage"
              name="message"
              rows="4"
              required
              maxLength={2000}
              placeholder="I would like to enquire about this residence."
              value={form.message}
              onChange={handleChange}
            />

            <button className="btn btn-gold" type="submit">
              PREPARE ENQUIRY ↗
            </button>
          </form>

          <p className="form-note">
            Portfolio demonstration only. Opens your email application.
            No data is stored or submitted to a server.
          </p>
        </aside>
      </section>
    </>
  );
}
