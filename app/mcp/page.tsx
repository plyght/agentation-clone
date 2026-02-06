"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import CodeBlock from "../components/CodeBlock";
import PageFooter from "../components/PageFooter";

/* ── Animated MCP Sequence Diagram ─────────────────────────── */

const actors = [
  { id: "browser", label: "Browser", sublabel: "Toolbar" },
  { id: "http", label: "HTTP", sublabel: "Server" },
  { id: "mcp", label: "MCP", sublabel: "Server" },
  { id: "agent", label: "AI Agent", sublabel: "Claude" },
];

const messages: {
  from: number;
  to: number;
  label: string;
  direction: "left" | "right";
  type: "request" | "response";
}[] = [
  { from: 0, to: 1, label: "POST /annotations", direction: "right", type: "request" },
  { from: 1, to: 2, label: "Store annotation", direction: "right", type: "request" },
  { from: 3, to: 2, label: "get_pending", direction: "left", type: "request" },
  { from: 2, to: 3, label: "annotations", direction: "right", type: "response" },
  { from: 3, to: 2, label: "resolve", direction: "left", type: "request" },
  { from: 2, to: 1, label: "status", direction: "left", type: "response" },
  { from: 1, to: 0, label: "resolved", direction: "left", type: "response" },
];

const pulseColor = "#60a5fa";

function MCPSequenceDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [activeMsg, setActiveMsg] = useState(0);

  /* inject pulse keyframes */
  useEffect(() => {
    const id = "mcp-diagram-keyframes";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes mcp-pulse-line {
        0%, 100% { stroke: ${pulseColor}; filter: drop-shadow(0 0 2px ${pulseColor}); }
        50% { stroke: ${pulseColor}; filter: drop-shadow(0 0 6px ${pulseColor}); }
      }
      @keyframes mcp-pulse-text {
        0%, 100% { fill: ${pulseColor}; }
        50% { fill: ${pulseColor}; opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  /* cycle through messages */
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveMsg((prev) => (prev + 1) % messages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [isInView]);

  const width = 520;
  const actorWidth = width / actors.length;
  const lifelineTop = 56;
  const lifelineHeight = messages.length * 36 + 24;
  const svgHeight = lifelineTop + lifelineHeight + 40;

  const getActorX = (idx: number) => actorWidth * idx + actorWidth / 2;

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: 520,
        padding: 24,
        background: "#fafafa",
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.06)",
        marginTop: "1rem",
      }}
    >
      {/* Actors */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {actors.map((actor, i) => (
          <motion.div
            key={actor.id}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            style={{
              flex: 1,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(0,0,0,0.75)",
                fontFamily: "'SF Mono', monospace",
              }}
            >
              {actor.label}
            </span>
            <span
              style={{
                fontSize: "0.5625rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              {actor.sublabel}
            </span>
          </motion.div>
        ))}
      </div>

      {/* SVG area: lifelines + messages */}
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${svgHeight}`}
        style={{ display: "block", marginTop: 4 }}
      >
        {/* Lifelines */}
        {actors.map((_, i) => {
          const x = getActorX(i);
          return (
            <line
              key={`lifeline-${i}`}
              x1={x}
              y1={lifelineTop - 16}
              x2={x}
              y2={lifelineTop + lifelineHeight}
              stroke="rgba(0,0,0,0.1)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Messages */}
        {messages.map((msg, i) => {
          const fromX = getActorX(msg.from);
          const toX = getActorX(msg.to);
          const y = lifelineTop + i * 36 + 16;
          const isActive = i === activeMsg && isInView;
          const isResponse = msg.type === "response";
          const arrowSize = 5;

          const lineEndX = toX > fromX ? toX - arrowSize : toX + arrowSize;

          return (
            <g key={`msg-${i}`}>
              {/* Line */}
              <line
                x1={fromX}
                y1={y}
                x2={lineEndX}
                y2={y}
                stroke={isActive ? pulseColor : "rgba(0,0,0,0.25)"}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray={isResponse ? "4 3" : "none"}
                style={
                  isActive
                    ? { animation: "mcp-pulse-line 1.2s ease-in-out infinite" }
                    : undefined
                }
              />
              {/* Arrowhead */}
              <polyline
                points={
                  toX > fromX
                    ? `${toX - arrowSize},${y - arrowSize} ${toX},${y} ${toX - arrowSize},${y + arrowSize}`
                    : `${toX + arrowSize},${y - arrowSize} ${toX},${y} ${toX + arrowSize},${y + arrowSize}`
                }
                fill="none"
                stroke={isActive ? pulseColor : "rgba(0,0,0,0.25)"}
                strokeWidth={isActive ? 1.5 : 1}
                style={
                  isActive
                    ? { animation: "mcp-pulse-line 1.2s ease-in-out infinite" }
                    : undefined
                }
              />
              {/* Label */}
              <text
                x={(fromX + toX) / 2}
                y={y - 6}
                textAnchor="middle"
                fontSize={9}
                fontFamily="'SF Mono', monospace"
                fill={isActive ? pulseColor : "rgba(0,0,0,0.45)"}
                style={
                  isActive
                    ? { animation: "mcp-pulse-text 1.2s ease-in-out infinite" }
                    : undefined
                }
              >
                {msg.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          marginTop: 8,
          fontSize: "0.5625rem",
          color: "rgba(0,0,0,0.35)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <svg width={20} height={6}>
            <line x1={0} y1={3} x2={20} y2={3} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
          </svg>
          request
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <svg width={20} height={6}>
            <line
              x1={0}
              y1={3}
              x2={20}
              y2={3}
              stroke="rgba(0,0,0,0.3)"
              strokeWidth={1}
              strokeDasharray="4 3"
            />
          </svg>
          response
        </span>
      </div>
    </div>
  );
}

/* ── Tool Name Helper ──────────────────────────────────────── */

function ToolName({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'SF Mono', monospace",
        fontSize: "0.75rem",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h3>
  );
}

/* ── MCP Page ──────────────────────────────────────────────── */

const toolTableRows = [
  { name: "agentation_list_sessions", desc: "List all annotation sessions" },
  { name: "agentation_get_session", desc: "Get all annotations for a session" },
  { name: "agentation_get_pending", desc: "Get pending annotations for a session" },
  { name: "agentation_get_all_pending", desc: "Get pending annotations across all sessions" },
  { name: "agentation_acknowledge", desc: "Mark annotation as acknowledged" },
  { name: "agentation_resolve", desc: "Mark annotation as resolved" },
  { name: "agentation_dismiss", desc: "Dismiss an annotation" },
  { name: "agentation_reply", desc: "Add a reply to annotation thread" },
  { name: "agentation_watch_annotations", desc: "Stream new annotations in real-time" },
];

const descStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "rgba(0,0,0,0.55)",
};

export default function MCPPage() {
  return (
      <main className="main-content">
      <article className="article">
        {/* ── Header ──────────────────────────────────── */}
        <header>
          <h1>MCP Server</h1>
          <p className="tagline">
            Connect AI agents to web page annotations via the Model Context Protocol
          </p>
        </header>

        {/* ── Overview ────────────────────────────────── */}
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            The <code>agentation-mcp</code> package provides a Model Context
            Protocol (MCP) server that exposes your annotations to AI agents like
            Claude Code. Instead of copy-pasting markdown, agents can query,
            acknowledge, and resolve annotations in real-time.
          </p>
          <p>
            It runs two services: an HTTP server that receives annotations from
            the browser toolbar, and an MCP server that exposes them to agents.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding: "1.25rem",
              background: "rgba(0,0,0,0.02)",
              borderRadius: "0.75rem",
              border: "1px solid rgba(0,0,0,0.06)",
              marginTop: "1rem",
              fontFamily: "'SF Mono', monospace",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <code>toolbar</code>
            <span style={{ color: "rgba(0,0,0,0.25)", fontSize: "1.25rem" }}>→</span>
            <code>server</code>
            <span style={{ color: "rgba(0,0,0,0.25)", fontSize: "1.25rem" }}>→</span>
            <code>agent</code>
          </div>

          <MCPSequenceDiagram />
        </section>

        {/* ── Installation ────────────────────────────── */}
        <section>
          <h2 id="installation">Installation</h2>
          <CodeBlock
            code={`npm install agentation-mcp\n# or\npnpm add agentation-mcp`}
            language="bash"
            copyable
          />
        </section>

        {/* ── Quick Start ─────────────────────────────── */}
        <section>
          <h2 id="quick-start">Quick Start</h2>

          <h3>1. Set up the MCP server</h3>
          <CodeBlock code={`npx agentation-mcp init`} language="bash" copyable />
          <p>
            This adds the server to your Claude Code config automatically.
          </p>

          <h3>2. Start the server</h3>
          <CodeBlock code={`npx agentation-mcp server`} language="bash" copyable />
          <p>
            Runs on <code>http://localhost:3000</code> by default.
          </p>

          <h3>3. Verify your setup</h3>
          <CodeBlock code={`npx agentation-mcp doctor`} language="bash" copyable />
          <p>
            Checks that the server is running and Claude Code can connect.
          </p>
        </section>

        {/* ── CLI Commands ────────────────────────────── */}
        <section>
          <h2 id="cli-commands">CLI Commands</h2>
          <CodeBlock
            code={`agentation-mcp init\n# Add MCP server to Claude Code config\n\nagentation-mcp server [options]\n# Start the HTTP and MCP servers\n\nagentation-mcp doctor\n# Verify server connection\n\nagentation-mcp help\n# Show all commands`}
            language="bash"
            copyable
          />
        </section>

        {/* ── Server Options ──────────────────────────── */}
        <section>
          <h2 id="server-options">Server Options</h2>
          <CodeBlock
            code={`--port <number>\n# HTTP server port (default: 3000)\n\n--mcp-only\n# Skip HTTP server, MCP only\n\n--http-url <url>\n# Connect to external HTTP server`}
            language="bash"
            copyable
          />
        </section>

        {/* ── Claude Code ─────────────────────────────── */}
        <section>
          <h2 id="claude-code">Claude Code</h2>

          <h3>1. Start the server</h3>
          <CodeBlock code={`npx agentation-mcp server`} language="bash" copyable />

          <h3>2. Add the MCP server</h3>
          <CodeBlock code={`npx agentation-mcp init`} language="bash" copyable />
          <p>
            This updates <code>~/.config/claude/mcp.json</code> automatically.
          </p>

          <h3>3. Verify the connection</h3>
          <p>
            In Claude Code, ask &quot;What annotation tools do you have?&quot; — it
            should list <code>agentation_list_sessions</code>,{" "}
            <code>agentation_get_pending</code>, and others.
          </p>
        </section>

        {/* ── MCP Tools ───────────────────────────────── */}
        <section>
          <h2 id="mcp-tools">MCP Tools</h2>
          <p>
            Nine tools are exposed to AI agents via the Model Context Protocol:
          </p>

          <table>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>Tool</th>
                <th style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {toolTableRows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <code style={{ fontSize: "0.6875rem" }}>{row.name}</code>
                  </td>
                  <td style={{ color: "rgba(0,0,0,0.6)" }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tool Details */}
          <h3>Tool Details</h3>

          <ToolName>agentation_list_sessions</ToolName>
          <p style={descStyle}>
            List all active annotation sessions. Use this to discover which pages
            have feedback.
          </p>

          <ToolName>agentation_get_session</ToolName>
          <p style={descStyle}>
            Get a session with all its annotations. Input: sessionId
          </p>

          <ToolName>agentation_get_pending</ToolName>
          <p style={descStyle}>
            Get all pending (unacknowledged) annotations for a session. Use this
            to see what feedback needs attention. Input: sessionId
          </p>
          <CodeBlock
            code={`// Response\n{\n  "count": 1,\n  "annotations": [{\n    "id": "ann_123",\n    "comment": "Button is cut off on mobile",\n    "element": "button",\n    "elementPath": "body > main > .hero > button.cta",\n    "reactComponents": "App > LandingPage > HeroSection > Button",\n    "intent": "fix",\n    "severity": "blocking"\n  }]\n}`}
            language="json"
            copyable
          />

          <ToolName>agentation_get_all_pending</ToolName>
          <p style={descStyle}>
            Get all pending annotations across ALL sessions. Use this when you
            want a global view of what needs attention.
          </p>

          <ToolName>agentation_acknowledge</ToolName>
          <p style={descStyle}>
            Mark an annotation as acknowledged. Use this to let the human know
            you&apos;ve seen their feedback and will address it. Input: annotationId
          </p>

          <ToolName>agentation_resolve</ToolName>
          <p style={descStyle}>
            Mark an annotation as resolved. Use this after you&apos;ve addressed the
            feedback. Optionally include a summary of what you did. Input:
            annotationId, optional summary
          </p>

          <ToolName>agentation_dismiss</ToolName>
          <p style={descStyle}>
            Dismiss an annotation. Use this when you&apos;ve decided not to address
            the feedback, with a reason why. Input: annotationId, reason
          </p>

          <ToolName>agentation_reply</ToolName>
          <p style={descStyle}>
            Add a reply to an annotation&apos;s thread. Use this to ask clarifying
            questions or provide updates to the human. Input: annotationId,
            message
          </p>

          <ToolName>agentation_watch_annotations</ToolName>
          <p style={descStyle}>
            Block until new annotations appear, then collect a batch and return
            them. Use this for hands-free mode where the agent continuously
            monitors for new feedback.
          </p>
        </section>

        {/* ── Hands-Free Mode ─────────────────────────── */}
        <section>
          <h2 id="hands-free-mode">Hands-Free Mode</h2>
          <p>
            With <code>agentation_watch_annotations</code>, you can set up a
            fully autonomous loop:
          </p>
          <ol>
            <li>Agent calls <code>agentation_watch_annotations</code></li>
            <li>Annotations arrive from the toolbar</li>
            <li>Agent processes each one: acknowledge, fix the code, resolve</li>
            <li>Agent loops back to watch for more</li>
          </ol>
          <p>
            Add this to your project <code>CLAUDE.md</code>:
          </p>
          <CodeBlock
            code={`# Example CLAUDE.md instructions\nWhen I say "watch mode", call agentation_watch_annotations in a loop.\nFor each annotation: acknowledge it, make the fix, then resolve it with a summary.\nContinue watching until I say stop or timeout is reached.`}
            language="markdown"
            copyable
          />
        </section>

        {/* ── Types ───────────────────────────────────── */}
        <section>
          <h2 id="types">Types</h2>
          <p>
            The package exports all types from the Annotation Format Schema:
          </p>
          <CodeBlock
            code={`import type {\n  Annotation,\n  AnnotationIntent,    // "fix" | "change" | "question" | "approve"\n  AnnotationSeverity,  // "blocking" | "important" | "suggestion"\n  AnnotationStatus,    // "pending" | "acknowledged" | "resolved" | "dismissed"\n  Session,\n  SessionStatus,       // "active" | "approved" | "closed"\n  SessionWithAnnotations,\n  ThreadMessage,\n  AFSEvent,\n  AFSEventType,\n  ActionRequest,\n} from 'agentation-mcp';`}
            language="typescript"
            copyable
          />
        </section>
      </article>

      <PageFooter />
      </main>
  );
}
