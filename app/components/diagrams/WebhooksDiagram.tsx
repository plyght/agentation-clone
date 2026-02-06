"use client";

import { useEffect, useRef, useState } from "react";

export default function WebhooksDiagram() {
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
              Browser
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Agentation
            </div>
          </div>
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
              Webhook
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Server
            </div>
          </div>
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
              Service
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(0,0,0,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Slack, GitHub...
            </div>
          </div>
        </div>
        <svg width="100%" viewBox="0 0 440 272" style={{ display: "block" }}>
          <line
            className="diagram-lifeline"
            x1="50"
            y1="10"
            x2="50"
            y2="262"
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
            y2="262"
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
            y2="262"
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
              annotation.add
            </text>
          </g>
          <g className="diagram-arrow-1">
            <line
              x1="220"
              y1="74"
              x2="390"
              y2="74"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="385,70 390,74 385,78"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="305"
              y="67"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              POST /slack
            </text>
          </g>
          <g className="diagram-arrow-2">
            <line
              x1="390"
              y1="116"
              x2="220"
              y2="116"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="225,112 220,116 225,120"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="305"
              y="109"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              200 OK
            </text>
          </g>
          <g className="diagram-arrow-3">
            <line
              x1="50"
              y1="158"
              x2="220"
              y2="158"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="215,154 220,158 215,162"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="135"
              y="151"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              submit
            </text>
          </g>
          <g className="diagram-arrow-4">
            <line
              x1="220"
              y1="200"
              x2="390"
              y2="200"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="385,196 390,200 385,204"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="305"
              y="193"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              POST /github/issues
            </text>
          </g>
          <g className="diagram-arrow-5">
            <line
              x1="390"
              y1="242"
              x2="220"
              y2="242"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="225,238 220,242 225,246"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="305"
              y="235"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              201 Created
            </text>
          </g>
        </svg>
        <div
          className="diagram-legend"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "12px",
            fontSize: "10px",
            color: "rgba(0,0,0,0.4)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="24" height="2">
              <line
                x1="0"
                y1="1"
                x2="24"
                y2="1"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="1.5"
              />
            </svg>
            <span>request</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="24" height="2">
              <line
                x1="0"
                y1="1"
                x2="24"
                y2="1"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
            <span>response</span>
          </div>
        </div>
      </div>
    </div>
  );
}
