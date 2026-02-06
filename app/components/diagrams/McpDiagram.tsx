"use client";

import { useEffect, useRef, useState } from "react";

export default function McpDiagram() {
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
          maxWidth: "520px",
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
              Toolbar
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
              HTTP
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
              MCP
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
              AI Agent
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
        <svg width="100%" viewBox="0 0 520 288" style={{ display: "block" }}>
          <line
            className="diagram-lifeline"
            x1="40"
            y1="10"
            x2="40"
            y2="278"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <line
            className="diagram-lifeline"
            x1="186.67"
            y1="10"
            x2="186.67"
            y2="278"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <line
            className="diagram-lifeline"
            x1="333.33"
            y1="10"
            x2="333.33"
            y2="278"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <line
            className="diagram-lifeline"
            x1="480"
            y1="10"
            x2="480"
            y2="278"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
            strokeDasharray="1 1"
            pathLength="1"
          />
          <g className="diagram-arrow-0">
            <line
              x1="40"
              y1="30"
              x2="186.67"
              y2="30"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="181.67,26 186.67,30 181.67,34"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="113.33"
              y="24"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              POST /annotations
            </text>
          </g>
          <g className="diagram-arrow-1">
            <line
              x1="186.67"
              y1="68"
              x2="333.33"
              y2="68"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="328.33,64 333.33,68 328.33,72"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="260"
              y="62"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              Store annotation
            </text>
          </g>
          <g className="diagram-arrow-2">
            <line
              x1="480"
              y1="106"
              x2="333.33"
              y2="106"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="338.33,102 333.33,106 338.33,110"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="406.67"
              y="100"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              get_pending
            </text>
          </g>
          <g className="diagram-arrow-3">
            <line
              x1="333.33"
              y1="144"
              x2="480"
              y2="144"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="475,140 480,144 475,148"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="406.67"
              y="138"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              annotations
            </text>
          </g>
          <g className="diagram-arrow-4">
            <line
              x1="480"
              y1="182"
              x2="333.33"
              y2="182"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              pathLength="1"
            />
            <polyline
              points="338.33,178 333.33,182 338.33,186"
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="406.67"
              y="176"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              resolve
            </text>
          </g>
          <g className="diagram-arrow-5">
            <line
              x1="333.33"
              y1="220"
              x2="186.67"
              y2="220"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="191.67,216 186.67,220 191.67,224"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="260"
              y="214"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              status
            </text>
          </g>
          <g className="diagram-arrow-6">
            <line
              x1="186.67"
              y1="258"
              x2="40"
              y2="258"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              pathLength="1"
            />
            <polyline
              points="45,254 40,258 45,262"
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
            />
            <text
              x="113.33"
              y="252"
              textAnchor="middle"
              fontSize="10"
              fontFamily="'SF Mono', ui-monospace, monospace"
              fill="rgba(0,0,0,0.45)"
            >
              resolved
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
