"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import BunnyLogo from "./BunnyLogo";

const pageHeadings: Record<
  string,
  { id: string; text: string; level: number }[]
> = {
  "/features": [
    { id: "annotation-modes", text: "Annotation Modes", level: 1 },
    { id: "toolbar-controls", text: "Toolbar Controls", level: 1 },
    { id: "marker-types", text: "Marker Types", level: 1 },
    { id: "smart-identification", text: "Smart Identification", level: 1 },
    { id: "computed-styles", text: "Computed Styles", level: 1 },
    { id: "react-detection", text: "React Detection", level: 1 },
    { id: "keyboard-shortcuts", text: "Keyboard Shortcuts", level: 1 },
    { id: "agent-sync", text: "Agent Sync", level: 1 },
    { id: "settings", text: "Settings", level: 1 },
  ],
  "/api": [
    { id: "overview", text: "Overview", level: 1 },
    { id: "props", text: "Props", level: 1 },
    { id: "basic-usage", text: "Basic Usage", level: 1 },
    { id: "annotation-type", text: "Annotation Type", level: 1 },
    { id: "http-api", text: "HTTP API", level: 1 },
    { id: "real-time-events", text: "Real-Time Events", level: 1 },
    { id: "environment-variables", text: "Environment Variables", level: 1 },
    { id: "storage", text: "Storage", level: 1 },
    { id: "programmatic-usage", text: "Programmatic Usage", level: 1 },
  ],
  "/mcp": [
    { id: "overview", text: "Overview", level: 1 },
    { id: "installation", text: "Installation", level: 1 },
    { id: "quick-start", text: "Quick Start", level: 1 },
    { id: "cli-commands", text: "CLI Commands", level: 1 },
    { id: "server-options", text: "Server Options", level: 1 },
    { id: "claude-code", text: "Claude Code", level: 1 },
    { id: "mcp-tools", text: "MCP Tools", level: 1 },
    { id: "hands-free-mode", text: "Hands-Free Mode", level: 1 },
    { id: "types", text: "Types", level: 1 },
  ],
  "/webhooks": [
    { id: "overview", text: "Overview", level: 1 },
    { id: "configuration", text: "Configuration", level: 1 },
    { id: "events", text: "Events", level: 1 },
    { id: "webhook-payload", text: "Webhook Payload", level: 1 },
    { id: "client-callback", text: "Combining with Callbacks", level: 1 },
    { id: "use-cases", text: "Use Cases", level: 1 },
    { id: "security", text: "Security Considerations", level: 1 },
    { id: "testing", text: "Testing Webhooks", level: 1 },
  ],
};

function useMeasure(): [
  React.RefObject<HTMLDivElement | null>,
  { width?: number; height?: number },
] {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width?: number; height?: number }>({});

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, size];
}

function AnimatedHeight({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentProps<typeof motion.div>) {
  const [measureRef, { height = 0 }] = useMeasure();

  return (
    <motion.div
      {...props}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      style={{ ...props.style, overflow: "hidden" }}
    >
      <div ref={measureRef}>{children}</div>
    </motion.div>
  );
}

function useScrollSpy(
  headingIds: string[],
  options: { vhFromTopOfPage?: number } = {}
) {
  const opts = { vhFromTopOfPage: 50, ...options };
  const [activeId, setActiveId] = useState<string>(headingIds[0]);
  const isClickScrolling = useRef(false);

  function safeSet(id: string) {
    if (!isClickScrolling.current) setActiveId(id);
  }

  useLayoutEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      if (headingIds.includes(hashId)) setActiveId(hashId);
    }
  }, []);

  useEffect(() => {
    let clickTimeout: ReturnType<typeof setTimeout>;
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let isFirstObservation = true;
    let maxScrollY = Number.MAX_SAFE_INTEGER;
    const supportsScrollEnd = "onscrollend" in document.documentElement;
    const computedStyles = getComputedStyle(document.documentElement);
    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || !href.startsWith("#")) return;
      const id = href.slice(1);
      if (headingIds.includes(id)) {
        setActiveId(id);
        isClickScrolling.current = true;
        if (supportsScrollEnd) {
          document.addEventListener(
            "scrollend",
            () => {
              isClickScrolling.current = false;
            },
            { once: true }
          );
        } else {
          clearTimeout(clickTimeout);
          clickTimeout = setTimeout(
            () => {
              isClickScrolling.current = false;
            },
            computedStyles.scrollBehavior === "smooth" ? 1000 : 60
          );
        }
      }
    }

    function recalcMaxScroll() {
      maxScrollY =
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) - window.innerHeight;
    }

    const debouncedRecalc = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(recalcMaxScroll, 500);
    };

    function handleEdgeScroll() {
      if (window.scrollY <= 0) safeSet(headingIds[0]);
      if (window.scrollY >= maxScrollY)
        safeSet(headingIds[headingIds.length - 1]);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isFirstObservation) {
          isFirstObservation = false;
          return;
        }
        if (window.scrollY <= 0) return;
        for (const entry of entries) {
          const { isIntersecting, target, boundingClientRect, rootBounds } =
            entry;
          const id = (target as HTMLElement).id;
          if (
            !id ||
            !rootBounds ||
            rootBounds.bottom - boundingClientRect.bottom >
              rootBounds.bottom / 2
          )
            return;
          if (isIntersecting) {
            safeSet(id);
            return;
          }
          const idx = headingIds.findIndex((h) => h === id);
          safeSet(headingIds[Math.max(idx - 1, 0)]);
        }
      },
      {
        threshold: [1],
        rootMargin: `0% 0% -${opts.vhFromTopOfPage}% 0%`,
      }
    );

    const resizeObserver = new ResizeObserver(debouncedRecalc);

    recalcMaxScroll();
    if (window.scrollY > 0) handleEdgeScroll();
    elements.forEach((el) => observer.observe(el));
    resizeObserver.observe(document.body);
    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleEdgeScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleEdgeScroll);
      resizeObserver.disconnect();
      observer.disconnect();
      clearTimeout(clickTimeout);
      clearTimeout(resizeTimeout);
    };
  }, [headingIds, opts.vhFromTopOfPage]);

  return activeId;
}

function TOC({
  headings,
  className,
}: {
  headings: { id: string; text: string; level: number }[];
  className?: string;
}) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    top?: string;
    height?: string;
  }>({});
  const ids = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useScrollSpy(ids);

  useEffect(() => {
    if (activeRef.current) {
      setIndicatorStyle({
        top: activeRef.current.offsetTop + "px",
        height: activeRef.current.offsetHeight + "px",
      });
    }
  }, [activeId]);

  return (
    <aside data-toc="" className={className}>
      <ul
        data-toc-list=""
        style={
          {
            "--active-top": indicatorStyle.top,
            "--active-height": indicatorStyle.height,
          } as React.CSSProperties
        }
      >
        {headings.map((heading, i) => {
          const isActive = activeId === heading.id;
          return (
            <li key={i} data-toc-item="" data-level={heading.level}>
              <a
                href={`#${heading.id}`}
                ref={isActive ? activeRef : null}
                aria-current={isActive || undefined}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

const navItems: {
  href: string;
  label: string;
  badge?: string;
  section?: string;
}[] = [
  { href: "/", label: "Overview" },
  { href: "/install", label: "Install" },
  { href: "/features", label: "Features" },
  { href: "/output", label: "Output" },
  { href: "/schema", label: "Schema", badge: "v1.0" },
  { section: "Tools", href: "", label: "" },
  { href: "/mcp", label: "MCP" },
  { href: "/api", label: "API" },
  { href: "/webhooks", label: "Webhooks" },
  { section: "Resources", href: "", label: "" },
  { href: "/changelog", label: "Changelog" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

let hasAnimatedGlobal = false;

export default function SideNav() {
  const pathname = usePathname();
  const [showBunny, setShowBunny] = useState(hasAnimatedGlobal);
  const [hasAnimated, setHasAnimated] = useState(hasAnimatedGlobal);
  const timingDelays = [
    0.1, 0.4, 0.48, 0.54, 0.62, 0.7, 1, 1.08, 1.14, 1.22, 1.3,
  ];
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
          <div
            className={
              hasAnimated
                ? "bunny-slide-container skip-animation"
                : "bunny-slide-container"
            }
          >
            <a
              tabIndex={-1}
              href="/"
              style={{
                display: "flex",
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              <BunnyLogo />
            </a>
          </div>
        )}
        <div>
          {"/agentation".split("").map((char, index) => (
            <span
              key={index}
              className={
                hasAnimated
                  ? ""
                  : index === 0
                    ? "typed-slash"
                    : "typed-char"
              }
              style={{
                color: index === 0 ? "#4C74FF" : "inherit",
                animationDelay: hasAnimated
                  ? "0s"
                  : index === 0
                    ? "0s"
                    : `${timingDelays[index]}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="nav-links">
        {navItems.map((item) => {
          if (item.section) {
            return (
              <div className="nav-section" key={`section-${item.section}`}>
                {item.section}
              </div>
            );
          }

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : item.href === "/blog"
                ? pathname.startsWith("/blog")
                : pathname === item.href;
          const headings = pageHeadings[item.href];

          return (
            <div className="nav-item-wrapper" key={item.href}>
              <Link
                className={`nav-link${isActive ? " active" : ""}`}
                href={item.href}
              >
                {item.label}
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </Link>
              <MotionConfig
                transition={{
                  type: "spring",
                  damping: 18,
                  mass: 0.2,
                  stiffness: 280,
                }}
              >
                <AnimatePresence mode="sync">
                  {isActive && headings && (
                    <AnimatedHeight key={item.href}>
                      <TOC
                        headings={headings}
                        className="nav-toc"
                      />
                    </AnimatedHeight>
                  )}
                </AnimatePresence>
              </MotionConfig>
            </div>
          );
        })}
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
