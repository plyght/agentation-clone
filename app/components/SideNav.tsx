"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BunnyLogo from "./BunnyLogo";

export default function SideNav() {
  const pathname = usePathname();
  const [typedChars, setTypedChars] = useState<string[]>([]);
  const fullText = "agentation";

  useEffect(() => {
    const chars = fullText.split("");
    chars.forEach((_, index) => {
      setTimeout(() => {
        setTypedChars((prev) => [...prev, chars[index]]);
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <nav className="side-nav">
      <div className="side-nav-logo">
        <div className="bunny-slide-container">
          <a tabIndex={-1} href="/" style={{ display: "flex", cursor: "default", pointerEvents: "none" }}>
            <BunnyLogo />
          </a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <span className="typed-slash">/</span>
          {typedChars.map((char, index) => (
            <span
              key={index}
              className="typed-char"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/" ? " active" : ""}`} href="/">
            Overview
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/install" ? " active" : ""}`} href="/install">
            Install
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/features" ? " active" : ""}`} href="/features">
            Features
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/output" ? " active" : ""}`} href="/output">
            Output
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/schema" ? " active" : ""}`} href="/schema">
            Schema
            <span className="nav-badge">v1.0</span>
          </a>
        </div>
        <div className="nav-section">Tools</div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/mcp" ? " active" : ""}`} href="/mcp">
            MCP
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/api" ? " active" : ""}`} href="/api">
            API
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/webhooks" ? " active" : ""}`} href="/webhooks">
            Webhooks
          </a>
        </div>
        <div className="nav-section">Resources</div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/changelog" ? " active" : ""}`} href="/changelog">
            Changelog
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname.startsWith("/blog") ? " active" : ""}`} href="/blog">
            Blog
          </a>
        </div>
        <div className="nav-item-wrapper">
          <a className={`nav-link${pathname === "/faq" ? " active" : ""}`} href="/faq">
            FAQ
          </a>
        </div>
      </div>
      <div className="nav-meta">
        <a
          href="https://www.npmjs.com/package/agentation"
          className="nav-version"
          target="_blank"
          rel="noopener noreferrer"
        >
          v2.1.1
        </a>
        <span className="nav-dot">·</span>
        <a
          href="https://github.com/benjitaylor/agentation"
          className="nav-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
