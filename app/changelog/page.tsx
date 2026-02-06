
export default function Changelog() {
  return (
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Changelog</h1>
            <p className="tagline">Release history</p>
          </header>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/2.1.1">2.1.1</a>
              <span className="changelog-version-date">February 5, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Fixed</span>
              <ul>
                <li>Unstyled &ldquo;Learn more&rdquo; link in MCP Connection settings when no endpoint is configured</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/2.1.0">2.1.0</a>
              <span className="changelog-version-date">February 5, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>Hands-free mode via <code>watch_annotations</code> resource</li>
                <li>Keyboard shortcut Cmd+Shift+F (Mac) / Ctrl+Shift+F (Windows) to toggle toolbar</li>
                <li>Resolved annotations now animate out when updated via SSE</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Fixed</span>
              <ul>
                <li>Production builds no longer health-check the MCP server by default</li>
                <li>MCP tools no longer hang waiting for actions when the toolbar is collapsed</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Removed</span>
              <ul>
                <li><code>wait_for_action</code> tool (superseded by <code>watch_annotations</code> resource)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/2.0.0" className="changelog-milestone-version">2.0.0</a>
              <span className="changelog-version-date">February 5, 2026</span>
            </h2>
            <p>The shift from &ldquo;annotate, copy, paste&rdquo; to &ldquo;annotate and collaborate.&rdquo; Agentation 2.0 is built around a Model Context Protocol server that turns your annotations into a live conversation with AI agents.</p>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>MCP server for real-time annotation sync</li>
                <li>HTTP API + Server-Sent Events for live updates</li>
                <li>Sessions: annotations scoped to URL with automatic expiry</li>
                <li>Status transitions: <code>open</code> → <code>working</code> → <code>resolved</code></li>
                <li>Annotation Format Schema defining structure and transitions</li>
                <li>JSON Schema and TypeScript definitions for annotation objects</li>
                <li>Webhooks for pushing annotation events to external services</li>
                <li>React component detection (traverses Fiber tree to surface component names)</li>
                <li>Shadow DOM support for element selection and highlighting</li>
                <li>Toolbar position now persists across sessions</li>
                <li>Cmd+Shift+Click (Mac) / Ctrl+Shift+Click (Windows) to select multiple elements</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Improved</span>
              <ul>
                <li>Component detection now adapts to framework patterns (class components, functional components, etc.)</li>
                <li>Cursor styles now reflect interaction state (crosshair when selecting, pointer when hovering)</li>
                <li>Individual element highlights now show on hover instead of full-page overlay</li>
                <li>Annotation mode now blocks page interactions by default</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Fixed</span>
              <ul>
                <li>Fixed/sticky element positioning now accounts for scroll offset</li>
                <li>SVG icons no longer broken by parent <code>fill</code> styles</li>
                <li>Query parameters now preserved when navigating between pages</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.3.2">1.3.2</a>
              <span className="changelog-version-date">January 24, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Improved</span>
              <ul>
                <li>Unified quote text styling across markers</li>
                <li>Tooltip font consistency with host page</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Fixed</span>
              <ul>
                <li>Blurry tooltip text on high-DPI displays</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.3.1">1.3.1</a>
              <span className="changelog-version-date">January 23, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>Custom tooltips with arrow indicators</li>
                <li>Subtle stroke around numbered markers for better contrast</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Improved</span>
              <ul>
                <li>Help icon design and positioning</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.3.0">1.3.0</a>
              <span className="changelog-version-date">January 23, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>Collapsible computed styles section in Detailed format</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Improved</span>
              <ul>
                <li>Toolbar visual polish and spacing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.2.0">1.2.0</a>
              <span className="changelog-version-date">January 22, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>Programmatic API: <code>onAnnotationAdd</code>, <code>onAnnotationDelete</code>, <code>onAnnotationUpdate</code>, <code>onAnnotationsClear</code>, <code>onCopy</code> callbacks</li>
                <li><code>copyToClipboard</code> prop to control clipboard behavior</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.1.1">1.1.1</a>
              <span className="changelog-version-date">January 22, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Added</span>
              <ul>
                <li>Claude Code skill for Agentation commands</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Fixed</span>
              <ul>
                <li>React key prop warning in annotation list</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.1.0">1.1.0</a>
              <span className="changelog-version-date">January 21, 2026</span>
            </h2>
            <div>
              <span className="changelog-tag">Improved</span>
              <ul>
                <li>Package exports now include TypeScript type conditions</li>
              </ul>
            </div>
            <div>
              <span className="changelog-tag">Removed</span>
              <ul>
                <li>Deprecated <code>AgentationCSS</code> export alias</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>
              <a href="https://www.npmjs.com/package/agentation/v/1.0.0">1.0.0</a>
              <span className="changelog-version-date">January 21, 2026</span>
            </h2>
            <p>First stable release. Click elements to annotate them, select text to capture typos, or drag to multi-select regions. Multiple output detail levels, keyboard shortcuts, customizable marker colors, and localStorage persistence.</p>
          </section>
        </div>

        <footer className="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>Made by{" "}<a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,{" "}<a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, and{" "}<a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a></p>
          <a href="/colophon">Colophon</a>
        </footer>
      </main>
  );
}
