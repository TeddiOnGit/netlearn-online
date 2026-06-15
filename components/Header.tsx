"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled || open ? " scrolled" : ""}`}>
      <div className="nav">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <LogoMark className="mark" />
          <span className="name">
            Net<b className="text-grad">learn</b>
          </span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`burger${open ? " is-open" : ""}`} />
        </button>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
