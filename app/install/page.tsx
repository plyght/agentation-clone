"use client";

import { useState } from "react";
import CopyButton from "../components/CopyButton";

export default function Install() {
  const [pkgManager, setPkgManager] = useState<"npm" | "yarn" | "pnpm" | "bun">("npm");
  return (
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Installation</h1>
            <p className="tagline">
              Get started with Agentation in your project
            </p>
          </header>

          <section>
            <h2>Choose your setup</h2>
            <ul>
              <li>
                Just want annotations? → <strong>Basic Setup</strong>
              </li>
              <li>
                Using Claude Code? → <a href="#claude-code">/agentation skill</a>
              </li>
              <li>
                Building a custom agent? → <a href="#agent-integration">MCP server</a>
              </li>
            </ul>
            <p>
              Most users: Basic Setup. Claude Code users: Use the skill for full auto-setup.
            </p>
          </section>

          <section>
            <h2>Install the package</h2>
            <div style={{display:"flex",gap:"0.375rem",marginBottom:"0.5rem"}}>
              {(["npm", "yarn", "pnpm", "bun"] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setPkgManager(pm)}
                  style={{
                    padding:"0.25rem 0.5rem",
                    fontSize:"0.75rem",
                    fontWeight: pkgManager === pm ? 550 : 450,
                    color: pkgManager === pm ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.4)",
                    background: pkgManager === pm ? "rgba(0,0,0,0.05)" : "transparent",
                    border:"none",
                    borderRadius:"0.25rem",
                    cursor:"pointer",
                    fontFamily:"var(--font-primary)",
                    transition:"all 0.15s ease"
                  }}
                >
                  {pm}
                </button>
              ))}
            </div>
            <div className="code-block">
              <CopyButton />
              <span className="line">
                {pkgManager === "npm" && "npm install agentation -D"}
                {pkgManager === "yarn" && "yarn add agentation -D"}
                {pkgManager === "pnpm" && "pnpm add agentation -D"}
                {pkgManager === "bun" && "bun add agentation -d"}
              </span>
            </div>
          </section>

          <section>
            <h2>Add to your app</h2>
            <p>
              Add the component at the root level of your app. Make sure to wrap it in a{" "}
              <code>NODE_ENV</code> check so it only runs in development:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">import Agentation from "agentation";</span>
              <span className="line"></span>
              <span className="line">export default function RootLayout() {"{"}</span>
              <span className="line">  return (</span>
              <span className="line">    &lt;html&gt;</span>
              <span className="line">      &lt;body&gt;</span>
              <span className="line">        {"{"}process.env.NODE_ENV === "development" && &lt;Agentation /&gt;{"}"}</span>
              <span className="line">        {"{"}children{"}"}</span>
              <span className="line">      &lt;/body&gt;</span>
              <span className="line">    &lt;/html&gt;</span>
              <span className="line">  );</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section id="claude-code">
            <h2>Claude Code</h2>
            <p>
              If you use Claude Code, the <code>/agentation</code> skill automates the entire setup:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx skills add benjitaylor/agentation</span>
            </div>
            <p>Then run:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">/agentation</span>
            </div>
            <p>
              Detects your framework, installs the package, wires it into your layout, and configures the MCP server for auto-start.
            </p>
          </section>

          <section id="agent-integration">
            <h2>
              Agent Integration
              <span className="badge-recommended">Recommended</span>
            </h2>
            <p>
              Connect Agentation to your agent via MCP for real-time sync. No more copy-paste—your agent sees annotations as you create them.
            </p>

            <h3>1. Start the server</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">npx agentation-mcp server</span>
            </div>

            <h3>2. Configure your agent</h3>
            <p>
              Add to your MCP settings (e.g., <code>claude_desktop_config.json</code>):
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"{"}</span>
              <span className="line">  "mcpServers": {"{"}</span>
              <span className="line">    "agentation": {"{"}</span>
              <span className="line">      "command": "npx",</span>
              <span className="line">      "args": ["agentation-mcp", "server"]</span>
              <span className="line">    {"}"}</span>
              <span className="line">  {"}"}</span>
              <span className="line">{"}"}</span>
            </div>

            <h3>3. Connect the component</h3>
            <p>Pass the endpoint and session ID to the component:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">&lt;Agentation</span>
              <span className="line">  endpoint="http://localhost:3210"</span>
              <span className="line">  sessionId="your-session-id"</span>
              <span className="line">/&gt;</span>
            </div>

            <p>
              Annotations are stored locally and synced to the server when connected.
            </p>

            <ul>
              <li>
                <strong>Local-first</strong> — Works offline, syncs when connected
              </li>
              <li>
                <strong>Session continuity</strong> — Same sessionId keeps conversation context
              </li>
              <li>
                <strong>No duplicates</strong> — Client deduplicates based on server state
              </li>
              <li>
                <strong>Server authority</strong> — Server state wins on conflict
              </li>
            </ul>

            <p>
              Other agents can connect via the same MCP protocol. See <a href="/mcp">MCP docs</a> for integration details.
            </p>
          </section>

          <section>
            <h2>Requirements</h2>
            <ul>
              <li>React 18+</li>
              <li>Client-side only (no SSR)</li>
              <li>Desktop only (no mobile support)</li>
              <li>Zero dependencies</li>
            </ul>
          </section>

          <section>
            <h2>Props</h2>
            <p>
              All props are optional. The component works with zero configuration.
            </p>

            <h3>Callbacks</h3>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>onAnnotationAdd</code></td>
                  <td>Function</td>
                  <td>Called when annotation is created</td>
                </tr>
                <tr>
                  <td><code>onAnnotationDelete</code></td>
                  <td>Function</td>
                  <td>Called when annotation is removed</td>
                </tr>
                <tr>
                  <td><code>onAnnotationUpdate</code></td>
                  <td>Function</td>
                  <td>Called when annotation is edited</td>
                </tr>
                <tr>
                  <td><code>onAnnotationsClear</code></td>
                  <td>Function</td>
                  <td>Called when all annotations cleared</td>
                </tr>
                <tr>
                  <td><code>onCopy</code></td>
                  <td>Function</td>
                  <td>Called when output is copied</td>
                </tr>
                <tr>
                  <td><code>onSubmit</code></td>
                  <td>Function</td>
                  <td>Called when feedback is submitted</td>
                </tr>
              </tbody>
            </table>

            <h3>Behavior</h3>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>copyToClipboard</code></td>
                  <td>boolean</td>
                  <td>Auto-copy output on submit (default: true)</td>
                </tr>
              </tbody>
            </table>

            <h3>Agent Sync</h3>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>endpoint</code></td>
                  <td>string</td>
                  <td>MCP server URL</td>
                </tr>
                <tr>
                  <td><code>sessionId</code></td>
                  <td>string</td>
                  <td>Unique session identifier</td>
                </tr>
                <tr>
                  <td><code>onSessionCreated</code></td>
                  <td>Function</td>
                  <td>Called when session initialized</td>
                </tr>
              </tbody>
            </table>

            <p>
              See <a href="/api">API</a> for full props reference and HTTP endpoints.
            </p>
          </section>

          <section>
            <h2>Security notes</h2>
            <p>
              Agentation runs entirely in the browser. By default, it makes no external requests. With MCP, it only connects to your local server.
            </p>
            <ul>
              <li>No external requests by default</li>
              <li>Local server only (localhost:3210)</li>
              <li>No data collection or telemetry</li>
              <li>Dev-only (NODE_ENV check recommended)</li>
            </ul>
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
  );
}
