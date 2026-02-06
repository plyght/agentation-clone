"use client";

import { useEffect, useRef, useState } from "react";

export default function SchemaDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`diagram-container ${isVisible ? "visible" : ""}`}
      style={{
        width: "100%",
        marginTop: "1.5rem",
        marginBottom: "1rem",
        padding: "24px",
        background: "#fafafa",
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0px",
          }}
        >
          <div
            className="diagram-actor"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1a1a1a",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Human
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Reviewer
            </div>
          </div>
          <div
            className="diagram-actor diagram-actor-pulse"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1a1a1a",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Annotation
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Object
            </div>
          </div>
          <div
            className="diagram-actor diagram-actor-pulse"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1a1a1a",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Agent
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Claude
            </div>
          </div>
        </div>
        <svg width="100%" viewBox="0 0 440 307" style={{ display: "block" }}>
          <line
            className="diagram-lifeline"
            x1="50"
            y1="10"
            x2="50"
            y2="297"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <line
            className="diagram-lifeline"
            x1="220"
            y1="10"
            x2="220"
            y2="297"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <line
            className="diagram-lifeline"
            x1="390"
            y1="10"
            x2="390"
            y2="297"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <g className="diagram-arrow-0">
            <line
              x1="50"
              y1="32"
              x2="220"
              y2="32"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="215,28 220,32 215,36"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="135"
              y="25"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              create
            </text>
            <text
              x="135"
              y="46"
              textAnchor="middle"
              fontSize="9"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="#f59e0b"
              opacity="0.7"
              style={{ fontWeight: 500 }}
            >
              → pending
            </text>
          </g>
          <g className="diagram-arrow-1">
            <line
              x1="390"
              y1="80"
              x2="220"
              y2="80"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="225,76 220,80 225,84"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              className="diagram-label-pulse"
              x="305"
              y="73"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              get_pending
            </text>
          </g>
          <g className="diagram-arrow-2">
            <line
              x1="220"
              y1="128"
              x2="390"
              y2="128"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="385,124 390,128 385,132"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="305"
              y="121"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              annotation data
            </text>
          </g>
          <g className="diagram-arrow-3">
            <line
              x1="390"
              y1="176"
              x2="220"
              y2="176"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="225,172 220,176 225,180"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              className="diagram-label-pulse"
              x="305"
              y="169"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              acknowledge
            </text>
            <text
              x="305"
              y="190"
              textAnchor="middle"
              fontSize="9"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="#8b5cf6"
              opacity="0.7"
              style={{ fontWeight: 500 }}
            >
              → acknowledged
            </text>
          </g>
          <g className="diagram-arrow-4">
            <line
              x1="390"
              y1="224"
              x2="220"
              y2="224"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="225,220 220,224 225,228"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              className="diagram-label-pulse"
              x="305"
              y="217"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              resolve
            </text>
            <text
              x="305"
              y="238"
              textAnchor="middle"
              fontSize="9"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="#10b981"
              opacity="0.7"
              style={{ fontWeight: 500 }}
            >
              → resolved
            </text>
          </g>
          <g className="diagram-arrow-5">
            <line
              x1="220"
              y1="272"
              x2="50"
              y2="272"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="55,268 50,272 55,276"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="135"
              y="265"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              status update
            </text>
          </g>
        </svg>
        <div
          className="diagram-legend"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "16px",
            fontSize: "10px",
            fontFamily: "'SF Mono', ui-monospace, monospace",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#f59e0b", fontWeight: 500 }}>→</span>
            <span>pending</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#8b5cf6", fontWeight: 500 }}>→</span>
            <span>acknowledged</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#10b981", fontWeight: 500 }}>→</span>
            <span>resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
