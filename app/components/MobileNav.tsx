"use client";
import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-header">
        <Link href="/" className="mobile-typed-logo">
          <div className="mobile-bunny-container show">
            <img src="/assets/bunny-logo-nav.svg" alt="" width={28} height={28} />
          </div>
          <div style={{transform:"translateY(1px)"}}>
            <span style={{color:"#4c74ff"}}>/</span>agentation
          </div>
        </Link>
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
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
