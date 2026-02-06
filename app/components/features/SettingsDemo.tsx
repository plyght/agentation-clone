"use client";

import { useState, useEffect } from "react";

type Theme = "dark" | "light";
type OutputDetail = "Standard" | "Detailed" | "Forensic" | "Compact";

const outputDetails: OutputDetail[] = [
  "Standard",
  "Detailed",
  "Forensic",
  "Compact",
];

const colors = [
  { name: "Purple", value: "#AF52DE" },
  { name: "Blue", value: "#3c82f7" },
  { name: "Cyan", value: "#5AC8FA" },
  { name: "Green", value: "#34C759" },
  { name: "Yellow", value: "#FFD60A" },
  { name: "Orange", value: "#FF9500" },
  { name: "Red", value: "#FF3B30" },
];

export default function SettingsDemo() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [outputDetail, setOutputDetail] = useState<OutputDetail>("Standard");
  const [selectedColor, setSelectedColor] = useState(1);
  const [reactEnabled, setReactEnabled] = useState(true);
  const [clearOnCopy, setClearOnCopy] = useState(false);
  const [blockInteractions, setBlockInteractions] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 190, y: 20 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCursorPos({ x: 190, y: 20 });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setClicking(false);
      setTheme("light");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCursorPos({ x: 150, y: 60 });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setClicking(false);
      const currentIndex = outputDetails.indexOf(outputDetail);
      const nextIndex = (currentIndex + 1) % outputDetails.length;
      setOutputDetail(outputDetails[nextIndex]);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCursorPos({ x: 90, y: 140 });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setClicking(false);
      setSelectedColor(3);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCursorPos({ x: 190, y: 20 });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setClicking(false);
      setTheme("dark");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      runAnimation();
    };

    runAnimation();
  }, [outputDetail]);

  return (
    <div className="sd-outer">
      <div className="sd-container">
        <div className={`sd-panel ${theme}`}>
          <div className="sd-header">
            <span className="sd-brand">
              <span className="sd-brand-slash" style={{ color: "#3c82f7" }}>
                /
              </span>
              agentation
            </span>
            <span className="sd-version">v0.3.2</span>
            <button className="sd-theme-toggle">
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="sd-section">
            <div className="sd-row">
              <span className="sd-label">
                Output Detail
                <span className="sd-help-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </span>
              </span>
              <button className="sd-cycle-btn">
                <span className="sd-cycle-text">{outputDetail}</span>
                <span className="sd-cycle-dots">
                  {outputDetails.map((detail, idx) => (
                    <span
                      key={detail}
                      className={`sd-cycle-dot ${outputDetail === detail ? "active" : ""}`}
                    />
                  ))}
                </span>
              </button>
            </div>
            <div className="sd-row sd-row-margin-top">
              <span className="sd-label">
                React Components
                <span className="sd-help-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </span>
              </span>
              <label className="sd-toggle-switch">
                <input type="checkbox" readOnly checked={reactEnabled} />
                <span
                  className={`sd-toggle-slider ${reactEnabled ? "checked" : ""}`}
                />
              </label>
            </div>
          </div>

          <div className="sd-section">
            <span className="sd-label sd-label-marker">Marker Colour</span>
            <div className="sd-colors">
              {colors.map((color, idx) => (
                <div
                  key={color.name}
                  className={`sd-color-ring ${selectedColor === idx ? "selected" : ""}`}
                  style={{
                    borderColor:
                      selectedColor === idx ? color.value : "transparent",
                  }}
                >
                  <div
                    className={`sd-color ${selectedColor === idx ? "selected" : ""}`}
                    style={{ backgroundColor: color.value }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="sd-section">
            <label className="sd-checkbox-row">
              <span className={`sd-checkbox ${clearOnCopy ? "checked" : ""}`}>
                {clearOnCopy && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <span className="sd-checkbox-label">
                Clear on copy/send
                <span className="sd-help-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </span>
              </span>
            </label>
            <label className="sd-checkbox-row sd-checkbox-row-margin-bottom">
              <span
                className={`sd-checkbox ${blockInteractions ? "checked" : ""}`}
              >
                {blockInteractions && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <span className="sd-checkbox-label">Block page interactions</span>
            </label>
          </div>

          <div className="sd-section sd-section-extra-padding">
            <button className="sd-nav-link">
              <span>Manage MCP & Webhooks</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div
            className={`sd-cursor ${clicking ? "clicking" : ""}`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          >
            <svg height="24" width="24" viewBox="0 0 32 32">
              <g fill="none" fillRule="evenodd" transform="translate(10 7)">
                <path
                  d="m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z"
                  fill="#fff"
                />
                <path
                  d="m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z"
                  fill="#000"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
