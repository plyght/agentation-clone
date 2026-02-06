"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#automate", label: "Automate" },
  { href: "#partner", label: "Partner" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-header">
        <div className="mobile-typed-logo">
          <div className="ai-logo">
            <span className="ai-logo-bracket">[</span>
            <span className="ai-logo-text">AI</span>
            <span className="ai-logo-bracket">]</span>
            <span className="ai-logo-name">Agent Integrator</span>
          </div>
        </div>
        <button
          className={`mobile-nav-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="mobile-nav-icon">
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div className={`mobile-nav-links ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-links-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
