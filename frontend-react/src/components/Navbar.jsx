import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const home = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled || !home ? "scrolled" : ""}`}>
      <Link className="logo" to="/">
        VELORA <span>ESTATES</span>
      </Link>

      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-controls="navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="navigation" className={`navigation ${open ? "open" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/properties">Properties</NavLink>
        <Link to="/#about">Our Story</Link>
        <Link className="nav-contact" to="/#contact">Enquire Now</Link>
      </nav>
    </header>
  );
}
