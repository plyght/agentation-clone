"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Label {
  text: string;
  x: number;
  y: number;
}

export default function ReactDetectionDemo() {
  const [cursorPos, setCursorPos] = useState({ x: 165, y: 165 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [label, setLabel] = useState<Label | null>(null);
  const [highlight, setHighlight] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setCursorPos({ x: 50, y: 50 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("logo");
      setHighlight({ top: 26, left: 32, width: 24, height: 24 });
      setLabel({
        text: "<App> <Dashboard> <Header> <Logo>",
        x: 165,
        y: 26,
      });
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setHoveredElement(null);
      setHighlight(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setCursorPos({ x: 120, y: 180 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("card1");
      setHighlight({ top: 160, left: 108, width: 186, height: 60 });
      setLabel({
        text: "<App> <Dashboard> <Card>",
        x: 165,
        y: 152,
      });
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setHoveredElement(null);
      setHighlight(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setCursorPos({ x: 120, y: 250 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setHoveredElement("card2");
      setHighlight({ top: 230, left: 108, width: 186, height: 60 });
      setLabel({
        text: "<App> <Dashboard> <Card>",
        x: 165,
        y: 222,
      });
      await new Promise((resolve) => setTimeout(resolve, 1800));

      setHoveredElement(null);
      setHighlight(null);
      setLabel(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      runAnimation();
    };

    runAnimation();
  }, []);

  return (
    <div className="fd-container">
      <div className="demo-window rdd-demo">
        <div className="demo-browser-bar">
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-url">localhost:3000/dashboard</div>
        </div>
        <div className="demo-content rdd-page">
          <div className="rdd-header">
            <div className="rdd-logo" />
            <div className="rdd-nav">
              <div className="rdd-nav-item active" />
              <div className="rdd-nav-item" />
              <div className="rdd-nav-item" />
            </div>
            <div className="rdd-btn" />
          </div>
          <div className="rdd-content-area">
            <div className="rdd-sidebar">
              <div className="rdd-sidebar-item" />
              <div className="rdd-sidebar-item" />
              <div className="rdd-sidebar-item" />
            </div>
            <div className="rdd-main">
              <div
                className={`rdd-card ${hoveredElement === "card1" ? "hovered" : ""}`}
              />
              <div
                className={`rdd-card ${hoveredElement === "card2" ? "hovered" : ""}`}
              />
            </div>
          </div>

          <AnimatePresence>
            {highlight && (
              <motion.div
                className="rdd-highlight"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{
                  top: `${highlight.top}px`,
                  left: `${highlight.left}px`,
                  width: `${highlight.width}px`,
                  height: `${highlight.height}px`,
                }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {label && (
              <motion.div
                className="rdd-label above"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  left: `${label.x}px`,
                  top: `${label.y - 8}px`,
                }}
              >
                <span className="rdd-bracket">&lt;</span>App<span className="rdd-bracket">&gt;</span>{" "}
                <span className="rdd-bracket">&lt;</span>Dashboard<span className="rdd-bracket">&gt;</span>{" "}
                {label.text.includes("Header") && (
                  <>
                    <span className="rdd-bracket">&lt;</span>Header<span className="rdd-bracket">&gt;</span>{" "}
                    <span className="rdd-bracket">&lt;</span>Logo<span className="rdd-bracket">&gt;</span>
                  </>
                )}
                {label.text.includes("Card") && (
                  <>
                    <span className="rdd-bracket">&lt;</span>Card<span className="rdd-bracket">&gt;</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

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
        Hover over any element to see its React component hierarchy.
      </p>
    </div>
  );
}
