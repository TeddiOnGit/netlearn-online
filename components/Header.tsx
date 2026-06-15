"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="nav">
        <a href="#top" className="brand">
          <LogoMark className="mark" />
          <span className="name">
            Net<b className="text-grad">learn</b>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <a href="#donate" className="btn btn-outline btn-text">
            Donate
          </a>
          <a href="#contact" className="btn btn-primary">
            Get Involved
          </a>
        </div>
      </div>
    </header>
  );
}
