"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BunnyLogo from "./BunnyLogo";

const pageSubNav: Record<string, { label: string; href: string }[]> = {
  "/features": [
    { label: "Annotation Modes", href: "#annotation-modes" },
    { label: "Toolbar Controls", href: "#toolbar-controls" },
    { label: "Marker Types", href: "#marker-types" },
    { label: "Smart Identification", href: "#smart-identification" },
    { label: "Computed Styles", href: "#computed-styles" },
    { label: "React Detection", href: "#react-detection" },
    { label: "Keyboard Shortcuts", href: "#keyboard-shortcuts" },
    { label: "Agent Sync", href: "#agent-sync" },
    { label: "Settings", href: "#settings" },
  ],
};

let hasAnimatedGlobal = false;

export default function SideNav() {
  const pathname = usePathname();
  const [showBunny, setShowBunny] = useState(hasAnimatedGlobal);
  const [hasAnimated, setHasAnimated] = useState(hasAnimatedGlobal);
  const fullText = "agentation";
  const timingDelays = [0.1, 0.4, 0.48, 0.54, 0.62, 0.7, 1, 1.08, 1.14, 1.22, 1.3];
  const bunnyShowTime = 1.0;

  useEffect(() => {
    if (hasAnimatedGlobal) {
      setShowBunny(true);
      setHasAnimated(true);
      return;
    }

    const bunnyTimer = setTimeout(() => {
      setShowBunny(true);
      hasAnimatedGlobal = true;
    }, bunnyShowTime * 1000);

    return () => clearTimeout(bunnyTimer);
  }, []);

  return (
    <nav className="side-nav">
      <div className="side-nav-logo">
        {showBunny && (
          <div className={hasAnimated ? "bunny-slide-container skip-animation" : "bunny-slide-container"}>
            <a tabIndex={-1} href="/" style={{ display: "flex", cursor: "default", pointerEvents: "none" }}>
              <BunnyLogo />
            </a>
          </div>
        )}
        <div>
          {"/agentation".split("").map((char, index) => (
            <span
              key={index}
              className={hasAnimated ? "" : index === 0 ? "typed-slash" : "typed-char"}
              style={{
                color: index === 0 ? "#4C74FF" : "inherit",
                animationDelay: hasAnimated ? "0s" : index === 0 ? "0s" : `${timingDelays[index]}s`,
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
          {pathname === "/features" && pageSubNav["/features"] && (
            <aside style={{
              marginTop: "0.5rem",
              marginLeft: "0.25rem",
              paddingLeft: "0.75rem",
              borderLeft: "1px solid rgba(0,0,0,0.08)",
              animation: "slideUp 0.3s ease"
            }}>
              <ul style={{ 
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
                listStyle: "none",
                padding: 0 
              }}>
                {pageSubNav["/features"].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: "0.6875rem",
                        color: "rgba(0,0,0,0.3)",
                        transition: "color 0.15s ease",
                        display: "block",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "rgba(0,0,0,0.5)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(0,0,0,0.3)"}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
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
