"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ComputedStylesDemo() {
  const [cursorPos, setCursorPos] = useState({ x: 165, y: 165 });
  const [showHighlight, setShowHighlight] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [stylesExpanded, setStylesExpanded] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setCursorPos({ x: 50, y: 80 });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setShowHighlight(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setShowMarker(true);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setShowPopup(true);
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStylesExpanded(true);
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setStylesExpanded(false);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setShowPopup(false);
      setShowMarker(false);
      setShowHighlight(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      runAnimation();
    };

    runAnimation();
  }, []);

  return (
    <div className="fd-container">
      <div className="demo-window">
        <div className="demo-browser-bar">
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-dot"></div>
          <div className="demo-url">localhost:3000/settings</div>
        </div>
        <div className="demo-content" style={{ padding: "16px", background: "#f9fafb" }}>
          <div className="csd-profile-card">
            <div className="csd-avatar" />
            <div className="csd-profile-info">
              <div className="csd-name" />
              <div className="csd-email" />
            </div>
            <div className="csd-edit-btn" />
          </div>
          <div className="csd-stats-row">
            <div className="csd-stat">
              <div className="csd-stat-value" />
              <div className="csd-stat-label" />
            </div>
            <div className="csd-stat">
              <div className="csd-stat-value short" />
              <div className="csd-stat-label" />
            </div>
            <div className="csd-stat">
              <div className="csd-stat-value" />
              <div className="csd-stat-label" />
            </div>
          </div>

          <AnimatePresence>
            {showHighlight && (
              <motion.div
                className="csd-highlight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  top: "64px",
                  left: "28px",
                  width: "44px",
                  height: "44px",
                }}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showMarker && (
              <motion.div
                className="demo-marker"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  left: "62px",
                  top: "78px",
                  width: "20px",
                  height: "20px",
                  background: "#3b82f6",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "600",
                  boxShadow: "0 2px 8px rgba(59,130,246,0.3)",
                }}
              >
                1
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showPopup && (
              <motion.div
                className="demo-popup csd-popup"
                initial={{ opacity: 0, scale: 0.95, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 4 }}
                transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="csd-popup-header">
                  <button
                    className="csd-toggle-btn"
                    onClick={() => setStylesExpanded(!stylesExpanded)}
                  >
                    <svg
                      className={`csd-chevron ${stylesExpanded ? "open" : ""}`}
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="csd-element">&lt;img.avatar&gt;</span>
                  </button>
                </div>
                <div className={`csd-styles-wrapper ${stylesExpanded ? "open" : ""}`}>
                  <div className="csd-styles-inner">
                    <div className="csd-style-line">
                      <span className="csd-style-prop">width</span>: <span className="csd-style-value">44px</span>;
                    </div>
                    <div className="csd-style-line">
                      <span className="csd-style-prop">height</span>: <span className="csd-style-value">44px</span>;
                    </div>
                    <div className="csd-style-line">
                      <span className="csd-style-prop">border-radius</span>: <span className="csd-style-value">50%</span>;
                    </div>
                    <div className="csd-style-line">
                      <span className="csd-style-prop">object-fit</span>: <span className="csd-style-value">cover</span>;
                    </div>
                    <div className="csd-style-line">
                      <span className="csd-style-prop">background</span>: <span className="csd-style-value">linear-gradient(135deg, #e0e7ff, #c7d2fe)</span>;
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Make avatar 48px"
                  className="demo-popup-input"
                  readOnly
                  style={{ marginTop: "8px" }}
                />
                <div className="demo-popup-actions">
                  <button className="demo-popup-btn demo-popup-cancel">
                    Cancel
                  </button>
                  <button className="demo-popup-btn demo-popup-submit">
                    Add
                  </button>
                </div>
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
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M0.5 0.5L0.5 14.5L4.5 10.5L7 17L9 16L6.5 9.5L11.5 9L0.5 0.5Z"
                fill="white"
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
        Click the chevron to expand computed CSS styles for the selected element.
      </p>
    </div>
  );
}
