"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Label {
  text: string;
  x: number;
  y: number;
  position: "above" | "below";
}

export default function SmartIdDemo() {
  const [cursorPos, setCursorPos] = useState({ x: 165, y: 165 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [label, setLabel] = useState<Label | null>(null);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setCursorPos({ x: 265, y: 100 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("follow-btn");
      setLabel({
        text: "<button>Follow</button>",
        x: 265,
        y: 112,
        position: "below",
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setHoveredElement(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setCursorPos({ x: 80, y: 135 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("name");
      setLabel({
        text: "<h3>Benji Taylor</h3>",
        x: 80,
        y: 125,
        position: "above",
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setHoveredElement(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setCursorPos({ x: 80, y: 185 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("link");
      setLabel({
        text: "<a>benji.org</a>",
        x: 80,
        y: 197,
        position: "below",
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setHoveredElement(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setCursorPos({ x: 165, y: 240 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("search");
      setLabel({
        text: "<input.sid-search>",
        x: 165,
        y: 252,
        position: "below",
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setHoveredElement(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      runAnimation();
    };

    runAnimation();
  }, []);

  return (
    <div className="fd-container">
      <div className="demo-window sid-demo">
        <div className="demo-browser-bar">
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-url">localhost:3000/@benjitaylor</div>
        </div>
        <div className="demo-content sid-page">
          <div
            className={`sid-banner ${hoveredElement === "banner" ? "hovered" : ""}`}
          />
          <img
            src="/demo-avatar.png"
            alt="Avatar"
            className={`sid-avatar ${hoveredElement === "avatar" ? "hovered" : ""}`}
          />
          <button
            className={`sid-follow-btn ${hoveredElement === "follow-btn" ? "hovered" : ""}`}
          >
            Follow
          </button>
          <div className="sid-profile-info">
            <h3
              className={`sid-name ${hoveredElement === "name" ? "hovered" : ""}`}
            >
              Benji Taylor
            </h3>
            <div className="sid-handle">@benjitaylor</div>
            <p className="sid-bio">
              head of design <span className="sid-mention">@base</span>. founder{" "}
              <span className="sid-mention">@family</span> (acq by{" "}
              <span className="sid-mention">@aave</span>). tools{" "}
              <span className="sid-mention">@dip</span>.
            </p>
            <div className="sid-meta">
              <div className="sid-location">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Los Angeles, CA
              </div>
              <a
                href="#"
                className={`sid-link ${hoveredElement === "link" ? "hovered" : ""}`}
              >
                benji.org
              </a>
            </div>
            <div className="sid-stats">
              <span>
                <strong>394</strong> Following
              </span>
              <span>
                <strong>28.3K</strong> Followers
              </span>
            </div>
          </div>
          <div className="sid-tabs">
            <input
              type="text"
              placeholder="Search posts"
              className={`sid-search ${hoveredElement === "search" ? "hovered" : ""}`}
              readOnly
            />
          </div>

          <motion.div
            className="demo-cursor"
            animate={{
              left: cursorPos.x,
              top: cursorPos.y,
            }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <line
                x1="8.5"
                y1="0"
                x2="8.5"
                y2="17"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="8.5"
                x2="17"
                y2="8.5"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          <AnimatePresence>
            {label && (
              <motion.div
                className={`sid-label ${label.position}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  left: `${label.x}px`,
                  top: label.position === "above" ? `${label.y - 8}px` : `${label.y + 8}px`,
                }}
              >
                {label.text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.75rem",
          color: "rgba(0,0,0,0.5)",
          lineHeight: 1.5,
          animation: "fadeIn 0.3s ease",
        }}
      >
        Hover over any element to see how Agentation identifies it.
      </p>
    </div>
  );
}
