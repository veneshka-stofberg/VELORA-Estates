import { useEffect } from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties.js";

export default function Home() {
  useEffect(() => {
    document.title = "VELORA Estates | Exceptional Living";

    const elements = document.querySelectorAll(".reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach(el => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = properties.filter(p => p.featured);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow reveal">AN EXCLUSIVE COLLECTION</p>

          <h1 className="reveal">
            Where Architecture<br />
            Meets <em>Extraordinary.</em>
          </h1>

          <p className="hero-description reveal">
            Discover remarkable residences, thoughtfully curated
            for those who appreciate exceptional living.
          </p>

          <div className="hero-actions reveal">
            <Link to="/properties" className="btn btn-gold">
              Explore Properties <span>↗</span>
            </Link>
            <a href="#about" className="text-link">Discover VELORA</a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>CURATED LUXURY REAL ESTATE</span>
          <a href="#properties">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="intro section-padding" id="about">
        <div className="section-label reveal">
          <span className="label-line"></span>
          THE VELORA PHILOSOPHY
        </div>

        <div className="intro-grid">
          <h2 className="section-title reveal">
            More than a home.<br />
            <em>A way of life.</em>
          </h2>

          <div className="intro-copy reveal">
            <p>
              We believe the finest properties are more than
              extraordinary spaces. They are places where
              architecture, atmosphere and lifestyle become one.
            </p>
            <p>
              VELORA Estates presents a carefully selected
              collection of distinctive residences, celebrating
              exceptional design and timeless elegance.
            </p>
            <a href="#contact" className="underlined-link">
              Connect With Us ↗
            </a>
          </div>
        </div>
      </section>

      <section className="properties section-padding" id="properties">
        <div className="section-heading reveal">
          <div>
            <div className="section-label">
              <span className="label-line"></span>
              THE COLLECTION
            </div>
            <h2 className="section-title">
              Exceptional <em>Residences.</em>
            </h2>
          </div>
          <p>
            Explore our showcase of distinctive architectural
            spaces and inspired living.
          </p>
        </div>

        <div className="property-grid">
          {featured.map(property => (
            <article className="property-card reveal visible" key={property.id}>
              <Link className="featured-card-link" to={`/properties/${property.id}`}>
                <div className="property-image">
                  <img
                    src={property.images[0]}
                    alt={`${property.name} illustrative photograph`}
                    loading="lazy"
                  />
                  <span className="property-tag">FEATURED</span>
                </div>

                <div className="property-info">
                  <span className="property-location">
                    {property.location.toUpperCase()}
                  </span>
                  <h3>{property.name}</h3>
                  <p>{property.description}</p>
                  <span className="property-link">
                    DISCOVER RESIDENCE ↗
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="collection-cta">
          <Link className="btn btn-dark" to="/properties">
            VIEW ALL RESIDENCES ↗
          </Link>
        </div>

        <p className="demo-note">
          Fictional portfolio residences. Images are illustrative.
        </p>
      </section>

      <section className="experience">
        <div className="experience-image"></div>
        <div className="experience-shade"></div>

        <div className="experience-content reveal">
          <p className="eyebrow">THE ART OF LIVING</p>
          <h2>Every Detail.<br /><em>Considered.</em></h2>
          <p>
            A home should be as remarkable as the life lived within it.
          </p>
          <Link to="/properties" className="btn btn-gold">
            Explore The Collection ↗
          </Link>
        </div>
      </section>

      <section className="contact section-padding" id="contact">
        <div className="section-label reveal">
          <span className="label-line"></span>
          PRIVATE ENQUIRIES
        </div>

        <h2 className="section-title reveal">
          Your next chapter<br /><em>begins here.</em>
        </h2>

        <p className="reveal">
          Explore the possibilities of extraordinary living.
          Our dedicated experience begins with a conversation.
        </p>

        <a
          className="btn btn-dark reveal"
          href="mailto:hello@example.com?subject=VELORA%20Estates%20Enquiry"
        >
          Make an Enquiry ↗
        </a>

        <p className="demo-note">
          Demonstration contact address — replace before launch.
        </p>
      </section>
    </>
  );
}
