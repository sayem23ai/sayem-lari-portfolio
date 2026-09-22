import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
export const navigation = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Resume",
  "Contact",
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label="Sayem portfolio home">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span>
            SAYEM<span className="muted">.DEV</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((name, i) => (
            <NavLink key={name} to={i === 0 ? "/" : `/${name.toLowerCase()}`}>
              {({ isActive }) => (
                <>
                  <span>{name}</span>
                  {isActive && (
                    <motion.span
                      className="nav-indicator"
                      layoutId="active-nav"
                      transition={{ duration: 0.35 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map((name, i) => (
            <Link
              key={name}
              to={i === 0 ? "/" : `/${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={
                pathname === (i === 0 ? "/" : `/${name.toLowerCase()}`)
                  ? "page"
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
