import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";

export default function SchemaPage() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Annotation Format Schema v1.0</h1>
            <p className="tagline">
              A portable format for structured UI feedback
            </p>
          </header>

          <section>
            <h2>Overview</h2>
            <p>
              The Annotation Format Schema (AFS) is an open format for
              representing UI feedback in a way that AI agents can understand
              and act on. Think of it like smart Figma comments for your
              running app.
            </p>
            <p>
              This spec defines the annotation object shape, optional context
              fields, and lifecycle states. Any tool can emit this format —
              browser extensions, desktop apps, IDE plugins — and any agent can
              consume it.
            </p>

            <div style={{width:"100%",marginTop:"1.5rem",marginBottom:"1rem",padding:"24px",background:"#fafafa",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.06)",boxSizing:"border-box",overflow:"hidden"}}>
              <div style={{position:"relative",width:"100%",maxWidth:"440px",margin:"0 auto"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0px"}}>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Human</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Reviewer</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Annotation</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Object</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Agent</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Claude</div>
                  </div>
                </div>
                <svg width="100%" viewBox="0 0 440 307" style={{display:"block"}}>
                  <line x1="50" y1="10" x2="50" y2="297" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="220" y1="10" x2="220" y2="297" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="390" y1="10" x2="390" y2="297" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <g>
                    <line x1="50" y1="32" x2="220" y2="32" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="215,28 220,32 215,36" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="135" y="25" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">create</text>
                    <text x="135" y="46" textAnchor="middle" fontSize="9" fontFamily="'SF Mono', ui-monospace, monospace" fill="#f59e0b" opacity="0.7" style={{fontWeight:500}}>→ pending</text>
                  </g>
                  <g>
                    <line x1="390" y1="80" x2="220" y2="80" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="225,76 220,80 225,84" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="73" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">get_pending</text>
                  </g>
                  <g>
                    <line x1="220" y1="128" x2="390" y2="128" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="385,124 390,128 385,132" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="121" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">annotation data</text>
                  </g>
                  <g>
                    <line x1="390" y1="176" x2="220" y2="176" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="225,172 220,176 225,180" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="169" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">acknowledge</text>
                    <text x="305" y="190" textAnchor="middle" fontSize="9" fontFamily="'SF Mono', ui-monospace, monospace" fill="#8b5cf6" opacity="0.7" style={{fontWeight:500}}>→ acknowledged</text>
                  </g>
                  <g>
                    <line x1="390" y1="224" x2="220" y2="224" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="225,220 220,224 225,228" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="217" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">resolve</text>
                    <text x="305" y="238" textAnchor="middle" fontSize="9" fontFamily="'SF Mono', ui-monospace, monospace" fill="#10b981" opacity="0.7" style={{fontWeight:500}}>→ resolved</text>
                  </g>
                  <g>
                    <line x1="220" y1="272" x2="50" y2="272" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="55,268 50,272 55,276" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="135" y="265" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">status update</text>
                  </g>
                </svg>
                <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"16px",fontSize:"10px",fontFamily:"'SF Mono', ui-monospace, monospace",color:"rgba(0,0,0,0.4)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{color:"#f59e0b",fontWeight:500}}>→</span><span>pending</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{color:"#8b5cf6",fontWeight:500}}>→</span><span>acknowledged</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{color:"#10b981",fontWeight:500}}>→</span><span>resolved</span></div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>What This Unlocks</h2>
            <p>
              A structured schema isn't just about clean data — it enables
              entirely new workflows:
            </p>
            <ul>
              <li>
                <strong>Two-way communication</strong> — Agents can reply to
                annotations, ask clarifying questions, or mark them resolved
              </li>
              <li>
                <strong>Status tracking</strong> — Know which feedback is
                pending, acknowledged, or fixed
              </li>
              <li>
                <strong>Cross-page queries</strong> — List all annotations
                across your entire app
              </li>
              <li>
                <strong>Bulk operations</strong> — Dismiss all resolved items,
                export pending feedback
              </li>
              <li>
                <strong>Persistent history</strong> — See what changed, when,
                and why
              </li>
            </ul>
            <p>
              Without a schema, feedback is fire-and-forget. With one, it
              becomes a conversation.
            </p>
          </section>

          <section>
            <h2>Design Goals</h2>
            <ul>
              <li>
                <strong>Agent-readable</strong> — Structured data agents can
                query and update
              </li>
              <li>
                <strong>Framework-agnostic</strong> — Works with React, Vue,
                vanilla JS, anything
              </li>
              <li>
                <strong>Tool-agnostic</strong> — Browser extensions, Electron
                apps, CLI tools can all emit it
              </li>
              <li>
                <strong>Human-authored</strong> — You write the feedback, tools
                capture the context
              </li>
              <li>
                <strong>Minimal core</strong> — Only a few required fields, the
                rest is optional
              </li>
            </ul>
          </section>

          <section>
            <h2>Annotation Object</h2>
            <p>
              An annotation represents a single piece of feedback attached to a
              UI element.
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(0, 0, 0, 0.55)", marginTop: "1rem" }}>
              <strong style={{ display: "inline", margin: "-0.04em -0.06em", padding: "0.04em 0.06em", borderRadius: "0.2em 0.15em", backgroundImage: "linear-gradient(75deg, rgba(250, 204, 21, 0.5), rgba(250, 204, 21, 0.15) 4%, rgba(250, 204, 21, 0.3) 96%, rgba(250, 204, 21, 0.6))" }}>Note:</strong>{" "}
              Server implementations may add metadata fields like{" "}
              <code>sessionId</code>, <code>createdAt</code>, and{" "}
              <code>updatedAt</code>.
            </p>

            <h3>Required Fields</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">id: string</span>
              <span className="line">comment: string</span>
              <span className="line">elementPath: string</span>
              <span className="line">timestamp: string</span>
              <span className="line">x: number</span>
              <span className="line">y: number</span>
              <span className="line">element: string</span>
            </div>

            <h3>Recommended Fields</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">url: string</span>
              <span className="line">boundingBox: {"{"} top: number; left: number; width: number; height: number {"}"}</span>
            </div>

            <h3>Optional Context Fields</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">reactComponents?: string[]</span>
              <span className="line">cssClasses?: string[]</span>
              <span className="line">computedStyles?: Record&lt;string, string&gt;</span>
              <span className="line">selectedText?: string</span>
              <span className="line">viewport?: {"{"} width: number; height: number {"}"}</span>
              <span className="line">userAgent?: string</span>
            </div>

            <h3>Lifecycle Fields</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">status?: "pending" | "acknowledged" | "resolved" | "dismissed"</span>
              <span className="line">resolvedAt?: string</span>
              <span className="line">resolvedBy?: string</span>
              <span className="line">thread?: ThreadMessage[]</span>
            </div>

            <h3>Browser Component Fields</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">isFixed?: boolean</span>
              <span className="line">isMultiSelect?: boolean</span>
              <span className="line">fullPath?: string</span>
              <span className="line">nearbyElements?: string[]</span>
            </div>
          </section>

          <section>
            <h2>Full TypeScript Definition</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">export interface Annotation {"{"}</span>
              <span className="line">  id: string;</span>
              <span className="line">  comment: string;</span>
              <span className="line">  elementPath: string;</span>
              <span className="line">  timestamp: string;</span>
              <span className="line">  x: number;</span>
              <span className="line">  y: number;</span>
              <span className="line">  element: string;</span>
              <span className="line">  url?: string;</span>
              <span className="line">  boundingBox?: {"{"}</span>
              <span className="line">    top: number;</span>
              <span className="line">    left: number;</span>
              <span className="line">    width: number;</span>
              <span className="line">    height: number;</span>
              <span className="line">  {"}"};</span>
              <span className="line">  reactComponents?: string[];</span>
              <span className="line">  cssClasses?: string[];</span>
              <span className="line">  computedStyles?: Record&lt;string, string&gt;;</span>
              <span className="line">  selectedText?: string;</span>
              <span className="line">  viewport?: {"{"} width: number; height: number {"}"};</span>
              <span className="line">  userAgent?: string;</span>
              <span className="line">  status?: "pending" | "acknowledged" | "resolved" | "dismissed";</span>
              <span className="line">  resolvedAt?: string;</span>
              <span className="line">  resolvedBy?: string;</span>
              <span className="line">  thread?: ThreadMessage[];</span>
              <span className="line">  isFixed?: boolean;</span>
              <span className="line">  isMultiSelect?: boolean;</span>
              <span className="line">  fullPath?: string;</span>
              <span className="line">  nearbyElements?: string[];</span>
              <span className="line">{"}"}</span>
              <span className="line"></span>
              <span className="line">export interface ThreadMessage {"{"}</span>
              <span className="line">  author: string;</span>
              <span className="line">  message: string;</span>
              <span className="line">  timestamp: string;</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section>
            <h2>Event Envelope</h2>
            <p>
              For real-time streaming, annotations are wrapped in an event
              envelope:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">export interface AgentationEvent {"{"}</span>
              <span className="line">  type: "annotation" | "update" | "delete";</span>
              <span className="line">  data: Annotation;</span>
              <span className="line">  sequence: number;</span>
              <span className="line">{"}"}</span>
            </div>
            <p>
              The sequence number enables replay and ensures agents never miss
              updates.
            </p>
          </section>

          <section>
            <h2>JSON Schema</h2>
            <p>For validation in any language:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"{"}</span>
              <span className="line">  "$schema": "http://json-schema.org/draft-07/schema#",</span>
              <span className="line">  "type": "object",</span>
              <span className="line">  "required": ["id", "comment", "elementPath", "timestamp", "x", "y", "element"],</span>
              <span className="line">  "properties": {"{"}</span>
              <span className="line">    "id": {"{"} "type": "string" {"}"},</span>
              <span className="line">    "comment": {"{"} "type": "string" {"}"},</span>
              <span className="line">    "elementPath": {"{"} "type": "string" {"}"},</span>
              <span className="line">    "timestamp": {"{"} "type": "string", "format": "date-time" {"}"},</span>
              <span className="line">    "x": {"{"} "type": "number" {"}"},</span>
              <span className="line">    "y": {"{"} "type": "number" {"}"},</span>
              <span className="line">    "element": {"{"} "type": "string" {"}"},</span>
              <span className="line">    "url": {"{"} "type": "string" {"}"},</span>
              <span className="line">    "status": {"{"}</span>
              <span className="line">      "type": "string",</span>
              <span className="line">      "enum": ["pending", "acknowledged", "resolved", "dismissed"]</span>
              <span className="line">    {"}"}</span>
              <span className="line">  {"}"}</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section>
            <h2>Example Annotation</h2>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"{"}</span>
              <span className="line">  "id": "ann_1234567890",</span>
              <span className="line">  "comment": "Button text is unclear. Should say 'Save Changes' not just 'Save'",</span>
              <span className="line">  "elementPath": "button.primary",</span>
              <span className="line">  "timestamp": "2025-02-06T15:30:00.000Z",</span>
              <span className="line">  "x": 120,</span>
              <span className="line">  "y": 340,</span>
              <span className="line">  "element": "button",</span>
              <span className="line">  "url": "https://example.com/settings",</span>
              <span className="line">  "boundingBox": {"{"}</span>
              <span className="line">    "top": 320,</span>
              <span className="line">    "left": 100,</span>
              <span className="line">    "width": 80,</span>
              <span className="line">    "height": 40</span>
              <span className="line">  {"}"},</span>
              <span className="line">  "reactComponents": ["SettingsForm", "PrimaryButton"],</span>
              <span className="line">  "cssClasses": ["primary", "btn-large"],</span>
              <span className="line">  "status": "pending"</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section>
            <h2>Markdown Output Format</h2>
            <p>
              Annotations can be serialized as markdown for copy-paste workflows:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line comment"># Annotation #1</span>
              <span className="line"></span>
              <span className="line">Button text is unclear. Should say 'Save Changes' not just 'Save'</span>
              <span className="line"></span>
              <span className="line">**Element:** button.primary</span>
              <span className="line">**Location:** (120, 340)</span>
              <span className="line">**Components:** SettingsForm → PrimaryButton</span>
              <span className="line">**URL:** https://example.com/settings</span>
            </div>
            <p>
              See <a href="/api#output-formats">Output Formats</a> for detail
              level options.
            </p>
          </section>

          <section>
            <h2>Implementations</h2>
            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/">Agentation (React)</a>
                  </td>
                  <td>Click-to-annotate toolbar for React apps</td>
                </tr>
                <tr>
                  <td>
                    <a href="/mcp">Agentation MCP Server</a>
                  </td>
                  <td>Exposes annotations to Claude Code</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Building an Implementation</h2>
            <p>
              To emit Agentation Format annotations from your tool:
            </p>
            <ol>
              <li>Capture the required fields when the user creates feedback</li>
              <li>Add recommended fields for agent context</li>
              <li>For React apps, traverse the Fiber tree to extract component names</li>
              <li>Output as JSON or markdown</li>
            </ol>
            <p>
              See the <a href="https://github.com/agentationdev/agentation" target="_blank" rel="noopener noreferrer">reference implementations</a> for
              guidance.
            </p>
          </section>

          <section>
            <h2>Why This Format?</h2>
            <p>
              Existing agent protocols (MCP, LangChain Tools, OpenAI Functions)
              define how to call functions, but don't define a grammar for UI
              feedback. Figma comments are great for design files, but don't
              capture runtime context.
            </p>
            <p>
              The Annotation Format Schema fills this gap. It's not a protocol —
              it's a shared vocabulary for describing what's wrong with a UI and
              where to fix it.
            </p>
          </section>

          <section>
            <h2>Versioning</h2>
            <p>Current version: <strong>v1</strong></p>
            <p>
              Schema URL:{" "}
              <code>https://agentation.dev/schema/annotation.v1.json</code>
            </p>
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
