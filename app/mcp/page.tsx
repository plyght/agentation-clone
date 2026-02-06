import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";

export default function MCPPage() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <header>
            <h1>MCP Server</h1>
            <p className="tagline">
              Connect AI agents to web page annotations via the Model Context Protocol
            </p>
          </header>

          <section>
            <h2>Overview</h2>
            <p>
              The <code>agentation-mcp</code> package provides a Model Context
              Protocol (MCP) server that exposes your annotations to AI agents
              like Claude Code. Instead of copy-pasting markdown, agents can
              query, acknowledge, and resolve annotations in real-time.
            </p>
            <p>
              It runs two services: an HTTP server that receives annotations
              from the browser toolbar, and an MCP server that exposes them to
              agents.
            </p>
            <p>
              <code>toolbar</code> → <code>server</code> → <code>agent</code>
            </p>

            <div style={{width:"100%",marginTop:"1.5rem",marginBottom:"1rem",padding:"24px",background:"#fafafa",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.06)",boxSizing:"border-box",overflow:"hidden"}}>
              <div style={{position:"relative",width:"100%",maxWidth:"520px",margin:"0 auto"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0px"}}>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Browser</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Toolbar</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>HTTP</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Server</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>MCP</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Server</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>AI Agent</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Claude</div>
                  </div>
                </div>
                <svg width="100%" viewBox="0 0 520 288" style={{display:"block"}}>
                  <line x1="40" y1="10" x2="40" y2="278" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="186.67" y1="10" x2="186.67" y2="278" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="333.33" y1="10" x2="333.33" y2="278" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="480" y1="10" x2="480" y2="278" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <g>
                    <line x1="40" y1="30" x2="186.67" y2="30" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="181.67,26 186.67,30 181.67,34" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="113.33" y="24" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">POST /annotations</text>
                  </g>
                  <g>
                    <line x1="186.67" y1="68" x2="333.33" y2="68" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="328.33,64 333.33,68 328.33,72" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="260" y="62" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">Store annotation</text>
                  </g>
                  <g>
                    <line x1="480" y1="106" x2="333.33" y2="106" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="338.33,102 333.33,106 338.33,110" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="406.67" y="100" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">get_pending</text>
                  </g>
                  <g>
                    <line x1="333.33" y1="144" x2="480" y2="144" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="475,140 480,144 475,148" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="406.67" y="138" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">annotations</text>
                  </g>
                  <g>
                    <line x1="480" y1="182" x2="333.33" y2="182" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="338.33,178 333.33,182 338.33,186" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="406.67" y="176" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">resolve</text>
                  </g>
                  <g>
                    <line x1="333.33" y1="220" x2="186.67" y2="220" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="191.67,216 186.67,220 191.67,224" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="260" y="214" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">status</text>
                  </g>
                  <g>
                    <line x1="186.67" y1="258" x2="40" y2="258" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="45,254 40,258 45,262" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="113.33" y="252" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">resolved</text>
                  </g>
                </svg>
                <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"12px",fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" /></svg><span>request</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="6 4" /></svg><span>response</span></div>
                </div>
              </div>
            </div>
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

          <section>
            <h2>MCP Tools</h2>
            <p>
              Nine tools are exposed to AI agents via the Model Context
              Protocol:
            </p>
            <table>
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

          <section>
            <h2>Hands-Free Mode</h2>
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
