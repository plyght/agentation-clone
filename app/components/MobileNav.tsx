"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/install", label: "Install" },
  { href: "/features", label: "Features" },
  { href: "/output", label: "Output" },
  { href: "/schema", label: "Schema" },
  { href: "/mcp", label: "MCP" },
  { href: "/api", label: "API" },
  { href: "/webhooks", label: "Webhooks" },
  { href: "/changelog", label: "Changelog" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBunny, setShowBunny] = useState(false);
  const [showText, setShowText] = useState(false);
  const pathname = usePathname();
  const timingDelays = [0.1, 0.4, 0.48, 0.54, 0.62, 0.7, 1, 1.08, 1.14, 1.22, 1.3].map(d => d + 0.5);

  useEffect(() => {
    setShowBunny(true);
    const textTimer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-header">
        <div className="mobile-typed-logo">
          <div className={`mobile-bunny-container${showBunny ? " show" : ""}`}>
            {showBunny && (
              <img src="/assets/bunny-logo-nav.svg" alt="" width={28} height={28} />
            )}
          </div>
          <div>
            {showText && "/agentation".split("").map((char, index) => (
              <span
                key={index}
                className="mobile-typed-char"
                style={{
                  color: index === 0 ? "#4C74FF" : "inherit",
                  animationDelay: `${timingDelays[index] - timingDelays[0]}s`,
                }}
              >
                {char}
              </span>
            ))}
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
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
