"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const navItems: {
  href: string;
  label: string;
}[] = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#automate", label: "Automate" },
  { href: "#partner", label: "Partner" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);
  const isClickScrolling = useRef(false);

  useLayoutEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      if (sectionIds.includes(hashId)) setActiveId(hashId);
    }
  }, []);

  useEffect(() => {
    let clickTimeout: ReturnType<typeof setTimeout>;
    const supportsScrollEnd = "onscrollend" in document.documentElement;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || !href.startsWith("#")) return;
      const id = href.slice(1);
      if (sectionIds.includes(id)) {
        setActiveId(id);
        isClickScrolling.current = true;
        if (supportsScrollEnd) {
          document.addEventListener(
            "scrollend",
            () => { isClickScrolling.current = false; },
            { once: true }
          );
        } else {
          clearTimeout(clickTimeout);
          clickTimeout = setTimeout(() => { isClickScrolling.current = false; }, 1000);
        }
      }
    }

    function handleScroll() {
      if (isClickScrolling.current) return;

      const offset = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }

      setActiveId(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      clearTimeout(clickTimeout);
    };
  }, [sectionIds]);

  return activeId;
}

export default function SideNav() {
  const sectionIds = useMemo(() => navItems.map((item) => item.href.slice(1)), []);
  const activeId = useScrollSpy(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="side-nav">
      <div className="ai-logo">
        <span className="ai-logo-bracket">[</span>
        <span className="ai-logo-text">AI</span>
        <span className="ai-logo-bracket">]</span>
        <span className="ai-logo-name">Agent Integrator</span>
      </div>
      <div className="nav-links">
        {navItems.map((item) => {
          const id = item.href.slice(1);
          const isActive = activeId === id;
          return (
            <div className="nav-item-wrapper" key={item.href}>
              <a
                className={`nav-link${isActive ? " active" : ""}`}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </div>
          );
        })}
      </div>
      <a
        href="#contact"
        className="book-call-btn"
        onClick={(e) => handleClick(e, "#contact")}
      >
        Book a Call
      </a>
    </nav>
  );
}
