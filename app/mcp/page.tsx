"use client";

import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";
import McpDiagram from "../components/diagrams/McpDiagram";

export default function MCPPage() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article" style={{ animation: "fadeIn 0.5s ease" }}>
          <header style={{ animation: "slideUp 0.6s ease" }}>
            <h1>
              <span className="sketchy-underline" style={{ "--marker-color": "#22c55e" } as any}>MCP Server</span>
            </h1>
            <p className="tagline">
              Connect AI agents to web page annotations via the Model Context Protocol
            </p>
          </header>

          <section style={{ animation: "slideUp 0.7s ease" }}>
            <h2>Overview</h2>
            <p>
              The <code style={{ 
                background: "linear-gradient(120deg, rgba(34,197,94,0.08), rgba(34,197,94,0.15))",
                padding: "0.15rem 0.4rem",
                borderRadius: "0.3rem",
                fontWeight: 500
              }}>agentation-mcp</code> package provides a Model Context
              Protocol (MCP) server that exposes your annotations to AI agents
              like Claude Code. Instead of copy-pasting markdown, agents can
              query, acknowledge, and resolve annotations in real-time.
            </p>
            <p>
              It runs two services: an HTTP server that receives annotations
              from the browser toolbar, and an MCP server that exposes them to
              agents.
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              padding: "1.25rem",
              background: "linear-gradient(135deg, rgba(34,197,94,0.04), rgba(34,197,94,0.01))",
              borderRadius: "0.75rem",
              border: "1px solid rgba(34,197,94,0.1)",
              marginTop: "1rem",
              fontFamily: "'SF Mono', monospace",
              fontSize: "0.875rem",
              fontWeight: 500
            }}>
              <code style={{ 
                padding: "0.375rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                color: "rgba(0,0,0,0.7)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}>toolbar</code>
              <span style={{ color: "rgba(34,197,94,0.6)", fontSize: "1.25rem" }}>→</span>
              <code style={{ 
                padding: "0.375rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                color: "rgba(0,0,0,0.7)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}>server</code>
              <span style={{ color: "rgba(34,197,94,0.6)", fontSize: "1.25rem" }}>→</span>
              <code style={{ 
                padding: "0.375rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                color: "rgba(0,0,0,0.7)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}>agent</code>
            </div>

            <McpDiagram />
          </section>

          <section>
            <h2>Installation</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">npm install agentation-mcp</span>
              <span className="line comment"># or</span>
              <span className="line">pnpm add agentation-mcp</span>
            </div>
          </section>

          <section>
            <h2>Quick Start</h2>
            <h3>1. Set up the MCP server</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp init</span>
            </div>
            <p>
              This adds the server to your Claude Code config automatically.
            </p>

            <h3>2. Start the server</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp server</span>
            </div>
            <p>Runs on <code>http://localhost:3000</code> by default.</p>

            <h3>3. Verify your setup</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp doctor</span>
            </div>
            <p>
              Checks that the server is running and Claude Code can connect.
            </p>
          </section>

          <section>
            <h2>CLI Commands</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">agentation-mcp init</span>
              <span className="line comment"># Add MCP server to Claude Code config</span>
              <span className="line"></span>
              <span className="line">agentation-mcp server [options]</span>
              <span className="line comment"># Start the HTTP and MCP servers</span>
              <span className="line"></span>
              <span className="line">agentation-mcp doctor</span>
              <span className="line comment"># Verify server connection</span>
              <span className="line"></span>
              <span className="line">agentation-mcp help</span>
              <span className="line comment"># Show all commands</span>
            </div>
          </section>

          <section>
            <h2>Server Options</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">--port &lt;number&gt;</span>
              <span className="line comment"># HTTP server port (default: 3000)</span>
              <span className="line"></span>
              <span className="line">--mcp-only</span>
              <span className="line comment"># Skip HTTP server, MCP only</span>
              <span className="line"></span>
              <span className="line">--http-url &lt;url&gt;</span>
              <span className="line comment"># Connect to external HTTP server</span>
            </div>
          </section>

          <section>
            <h2>Claude Code</h2>
            <h3>1. Start the server</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp server</span>
            </div>

            <h3>2. Add the MCP server</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp init</span>
            </div>
            <p>
              This updates <code>~/.config/claude/mcp.json</code> automatically.
            </p>

            <h3>3. Verify the connection</h3>
            <p>
              In Claude Code, ask "What annotation tools do you have?" — it
              should list <code>agentation_list_sessions</code>,{" "}
              <code>agentation_get_pending</code>, and others.
            </p>
          </section>

          <section style={{ animation: "slideUp 0.9s ease" }}>
            <h2>MCP Tools</h2>
            <p>
              Nine tools are exposed to AI agents via the Model Context
              Protocol:
            </p>
            <table style={{
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
            }}>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>agentation_list_sessions</code></td>
                  <td>List all annotation sessions</td>
                </tr>
                <tr>
                  <td><code>agentation_get_session</code></td>
                  <td>Get all annotations for a session</td>
                </tr>
                <tr>
                  <td><code>agentation_get_pending</code></td>
                  <td>Get pending annotations for a session</td>
                </tr>
                <tr>
                  <td><code>agentation_get_all_pending</code></td>
                  <td>Get pending annotations across all sessions</td>
                </tr>
                <tr>
                  <td><code>agentation_acknowledge</code></td>
                  <td>Mark annotation as acknowledged</td>
                </tr>
                <tr>
                  <td><code>agentation_resolve</code></td>
                  <td>Mark annotation as resolved</td>
                </tr>
                <tr>
                  <td><code>agentation_dismiss</code></td>
                  <td>Dismiss an annotation</td>
                </tr>
                <tr>
                  <td><code>agentation_reply</code></td>
                  <td>Add a reply to annotation thread</td>
                </tr>
                <tr>
                  <td><code>agentation_watch_annotations</code></td>
                  <td>Stream new annotations in real-time</td>
                </tr>
              </tbody>
            </table>

            <h3>Tool Details</h3>

            <h3>agentation_list_sessions</h3>
            <p>Returns all annotation sessions with metadata.</p>

            <h3>agentation_get_session</h3>
            <p>
              Fetches all annotations for a given session ID. Includes resolved
              and dismissed items.
            </p>

            <h3>agentation_get_pending</h3>
            <p>
              Returns only pending annotations for a session. Most useful for
              "what needs fixing?" queries.
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"{"}</span>
              <span className="line">  "sessionId": "ses_abc123",</span>
              <span className="line">  "annotations": [</span>
              <span className="line">    {"{"}</span>
              <span className="line">      "id": "ann_001",</span>
              <span className="line">      "comment": "Button text unclear",</span>
              <span className="line">      "elementPath": "button.primary",</span>
              <span className="line">      "status": "pending"</span>
              <span className="line">    {"}"}</span>
              <span className="line">  ]</span>
              <span className="line">{"}"}</span>
            </div>

            <h3>agentation_get_all_pending</h3>
            <p>
              Returns pending annotations across all sessions. Use this when you
              want a global view of what needs attention.
            </p>

            <h3>agentation_acknowledge</h3>
            <p>
              Marks an annotation as acknowledged. This signals you've seen it
              and plan to address it.
            </p>

            <h3>agentation_resolve</h3>
            <p>
              Marks an annotation as resolved with an optional message. Moves it
              to the resolved state and timestamps it.
            </p>

            <h3>agentation_dismiss</h3>
            <p>
              Dismisses an annotation you won't address. Useful for duplicate
              feedback or out-of-scope requests.
            </p>

            <h3>agentation_reply</h3>
            <p>
              Adds a message to the annotation thread. Agents can use this to
              ask clarifying questions or explain what they fixed.
            </p>

            <h3>agentation_watch_annotations</h3>
            <p>
              Returns a stream of new annotations as they arrive. The agent can
              poll this or keep a connection open.
            </p>
          </section>

          <section style={{ 
            padding: "1.5rem",
            background: "linear-gradient(135deg, rgba(139,92,246,0.04), rgba(139,92,246,0.01))",
            borderRadius: "0.75rem",
            border: "1px solid rgba(139,92,246,0.1)",
            animation: "slideUp 1.1s ease"
          }}>
            <h2 style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{ fontSize: "1.1rem" }}>🤖</span> Hands-Free Mode
            </h2>
            <p>
              With <code>agentation_watch_annotations</code>, you can set up a
              fully autonomous loop:
            </p>
            <ol style={{ 
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              counterReset: "step-counter",
              listStyle: "none",
              paddingLeft: 0
            }}>
              {[
                "Agent calls agentation_watch_annotations",
                "Annotations arrive from the toolbar",
                "Agent processes each one: acknowledge, fix the code, resolve",
                "Agent loops back to watch for more"
              ].map((step, i) => (
                <li key={i} style={{
                  position: "relative",
                  paddingLeft: "3rem",
                  counterIncrement: "step-counter",
                  animation: `fadeIn 0.3s ease ${0.1 * i}s both`
                }}>
                  <span style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.25))",
                    borderRadius: "50%",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "rgba(139,92,246,0.9)"
                  }}>{i + 1}</span>
                  {step.includes("agentation_watch_annotations") ? (
                    <span>Agent calls <code style={{
                      background: "rgba(139,92,246,0.1)",
                      padding: "0.15rem 0.4rem",
                      borderRadius: "0.3rem",
                      fontWeight: 500
                    }}>agentation_watch_annotations</code></span>
                  ) : step}
                </li>
              ))}
            </ol>
            <p>
              Add this to your project <code>CLAUDE.md</code>:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line comment"># Autonomous Annotation Loop</span>
              <span className="line"></span>
              <span className="line">When I say "watch for annotations":</span>
              <span className="line">1. Call agentation_watch_annotations</span>
              <span className="line">2. For each annotation:</span>
              <span className="line">   - Acknowledge it</span>
              <span className="line">   - Find and fix the code</span>
              <span className="line">   - Resolve with a summary</span>
              <span className="line">3. Loop until I tell you to stop</span>
            </div>
          </section>

          <section>
            <h2>TypeScript Types</h2>
            <p>
              The package exports all types from the Annotation Format Schema:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">import type {"{"} Annotation, ThreadMessage, AgentationEvent {"}"} from "agentation-mcp";</span>
            </div>
          </section>
        </div>

        <footer className="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>
            Made by{" "}
            <a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,{" "}
            <a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, and{" "}
            <a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a>
          </p>
          <a href="/colophon">Colophon</a>
        </footer>
      </main>
    </>
  );
}
