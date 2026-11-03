import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            VELORA <span>ESTATES</span>
          </div>
          <p>Extraordinary spaces. Exceptional living.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/#about">Our Story</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VELORA Estates. Portfolio concept.</span>
        <span>CRAFTED FOR EXCEPTIONAL LIVING</span>
      </div>
    </footer>
  );
}
