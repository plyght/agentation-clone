"use client";

import SideNav from "../../components/SideNav";
import CopyButton from "../../components/CopyButton";

export default function Api() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article" style={{ animation: "fadeIn 0.5s ease" }}>
          <header style={{ animation: "slideUp 0.6s ease" }}>
            <h1>
              <span style={{
                background: "linear-gradient(90deg, #4c74ff, #7b9fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>API</span>
            </h1>
            <p className="tagline">Programmatic access for developers</p>
          </header>

          <section style={{ animation: "slideUp 0.7s ease" }}>
            <h2>Overview</h2>
            <p>Agentation exposes callbacks for every annotation event, allowing you to build custom integrations and workflows:</p>
            <ul style={{
              display: "grid",
              gap: "0.75rem",
              padding: "1rem",
              background: "linear-gradient(135deg, rgba(76,116,255,0.03), rgba(76,116,255,0.01))",
              borderRadius: "0.75rem",
              border: "1px solid rgba(76,116,255,0.08)"
            }}>
              {["Sync annotations to database", "Build analytics dashboards", "Create custom AI integrations"].map((item, i) => (
                <li key={i} style={{
                  padding: "0.75rem 1rem",
                  background: "#fff",
                  borderRadius: "0.5rem",
                  borderLeft: "3px solid rgba(76,116,255,0.3)",
                  transition: "all 0.2s ease",
                  animation: `fadeIn 0.3s ease ${0.1 * i}s both`,
                  cursor: "default"
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.borderLeftColor = "rgba(76,116,255,0.6)";
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderLeftColor = "rgba(76,116,255,0.3)";
                }}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ animation: "slideUp 0.8s ease" }}>
            <h2>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{ fontSize: "1rem" }}>⚙️</span> Props
              </span>
            </h2>
            <div className="props-list" style={{
              background: "rgba(76,116,255,0.02)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(76,116,255,0.06)"
            }}>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onAnnotationAdd</code>
                  <span className="prop-type">(annotation: Annotation) =&gt; void</span>
                </div>
                <p>Called when a new annotation is created.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onAnnotationDelete</code>
                  <span className="prop-type">(id: string) =&gt; void</span>
                </div>
                <p>Called when an annotation is deleted.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onAnnotationUpdate</code>
                  <span className="prop-type">(annotation: Annotation) =&gt; void</span>
                </div>
                <p>Called when an annotation is updated.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onAnnotationsClear</code>
                  <span className="prop-type">() =&gt; void</span>
                </div>
                <p>Called when all annotations are cleared.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onCopy</code>
                  <span className="prop-type">(markdown: string) =&gt; void</span>
                </div>
                <p>Called when the user copies annotations.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onSubmit</code>
                  <span className="prop-type">(annotations: Annotation[]) =&gt; void</span>
                </div>
                <p>Called when the user manually submits annotations.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>copyToClipboard</code>
                  <span className="prop-type">boolean</span>
                  <span className="prop-default">default: true</span>
                </div>
                <p>Whether to copy to clipboard when the user clicks the copy button.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>endpoint</code>
                  <span className="prop-type">string</span>
                </div>
                <p>HTTP endpoint for the agentation-mcp server.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>sessionId</code>
                  <span className="prop-type">string</span>
                </div>
                <p>Session ID for syncing annotations with MCP.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>onSessionCreated</code>
                  <span className="prop-type">(sessionId: string) =&gt; void</span>
                </div>
                <p>Called when a new session is created.</p>
              </div>
              <div className="prop-item">
                <div className="prop-header">
                  <code>webhookUrl</code>
                  <span className="prop-type">string</span>
                </div>
                <p>Webhook URL for sending annotations to external services.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Basic usage</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">import {"{"} AgentationToolbar {"}"} from "agentation";</span>
              <span className="line"></span>
              <span className="line">export default function App() {"{"}</span>
              <span className="line">  return (</span>
              <span className="line">    {"<"}AgentationToolbar</span>
              <span className="line">{"      onAnnotationAdd={(annotation) => {"}</span>
              <span className="line">{"        console.log(\"New annotation:\", annotation);"}</span>
              <span className="line">{"      }}"}</span>
              <span className="line">{"      onCopy={(markdown) => {"}</span>
              <span className="line">{"        console.log(\"Copied:\", markdown);"}</span>
              <span className="line">{"      }}"}</span>
              <span className="line">{"    />"}</span>
              <span className="line">  );</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section>
            <h2>Annotation type</h2>
            <p>The Annotation object passed to callbacks. See Agentation Format for the full schema.</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">interface Annotation {"{"}</span>
              <span className="line">  id: string;</span>
              <span className="line">  feedback: string;</span>
              <span className="line">  selector: string;</span>
              <span className="line">  component?: string;</span>
              <span className="line">  computedStyles?: Record&lt;string, string&gt;;</span>
              <span className="line">  timestamp: number;</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section>
            <h2>HTTP API</h2>
            <p>The agentation-mcp server exposes a REST API for managing annotations and sessions.</p>

            <h3>Sessions</h3>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>POST</code></td>
                  <td><code>/sessions</code></td>
                  <td>Create a new session</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/sessions</code></td>
                  <td>List all sessions</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/sessions/:id</code></td>
                  <td>Get session details</td>
                </tr>
              </tbody>
            </table>

            <h3>Annotations</h3>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>POST</code></td>
                  <td><code>/sessions/:id/annotations</code></td>
                  <td>Create annotation</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/annotations/:id</code></td>
                  <td>Get annotation</td>
                </tr>
                <tr>
                  <td><code>PATCH</code></td>
                  <td><code>/annotations/:id</code></td>
                  <td>Update annotation</td>
                </tr>
                <tr>
                  <td><code>DELETE</code></td>
                  <td><code>/annotations/:id</code></td>
                  <td>Delete annotation</td>
                </tr>
                <tr>
                  <td><code>POST</code></td>
                  <td><code>/annotations/:id/thread</code></td>
                  <td>Add message to thread</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/sessions/:id/pending</code></td>
                  <td>Get pending annotations</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/pending</code></td>
                  <td>Get all pending</td>
                </tr>
              </tbody>
            </table>

            <h3>Events (SSE)</h3>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/sessions/:id/events</code></td>
                  <td>Subscribe to session events</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/events</code></td>
                  <td>Subscribe to all events</td>
                </tr>
              </tbody>
            </table>

            <h3>Health</h3>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/health</code></td>
                  <td>Health check</td>
                </tr>
                <tr>
                  <td><code>GET</code></td>
                  <td><code>/status</code></td>
                  <td>Server status</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Real-Time Events</h2>
            <p>Subscribe to real-time events via Server-Sent Events:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">curl http://localhost:3100/events</span>
              <span className="line">curl http://localhost:3100/sessions/abc123/events</span>
            </div>

            <h3>Event types</h3>
            <ul>
              <li>annotation.created</li>
              <li>annotation.updated</li>
              <li>annotation.deleted</li>
              <li>session.created</li>
              <li>session.updated</li>
              <li>session.closed</li>
              <li>action.requested</li>
              <li>thread.message</li>
            </ul>
          </section>

          <section>
            <h2>Environment Variables</h2>
            <table>
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>AGENTATION_STORE</code></td>
                  <td>Storage backend (memory or sqlite)</td>
                  <td>sqlite</td>
                </tr>
                <tr>
                  <td><code>AGENTATION_EVENT_RETENTION_DAYS</code></td>
                  <td>Days to keep events</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Storage</h2>
            <p>By default, annotations are stored in SQLite at ~/.agentation/store.db. For testing, use in-memory storage:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">AGENTATION_STORE=memory npx agentation-mcp server</span>
            </div>
          </section>

          <section>
            <h2>Programmatic Usage</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">import {"{"} startHttpServer, startMcpServer {"}"} from "agentation-mcp";</span>
              <span className="line"></span>
              <span className="line">await startHttpServer({"{"} port: 3100 {"}"});</span>
              <span className="line">await startMcpServer();</span>
            </div>
            <p>See MCP Server for AI agent integration and available tools.</p>
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
