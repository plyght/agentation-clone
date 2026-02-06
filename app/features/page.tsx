"use client";

import AnnotationModesDemo from "../components/features/AnnotationModesDemo";
import AgentSyncDemo from "../components/features/AgentSyncDemo";
import SettingsDemo from "../components/features/SettingsDemo";
import SmartIdDemo from "../components/features/SmartIdDemo";
import ComputedStylesDemo from "../components/features/ComputedStylesDemo";
import ReactDetectionDemo from "../components/features/ReactDetectionDemo";

export default function Features() {
  return (
      <main className="main-content">
        <div className="article" style={{ animation: "fadeIn 0.5s ease" }}>
          <header style={{ animation: "slideUp 0.6s ease" }}>
            <h1>
              <span className="pen-underline">Features</span>
            </h1>
            <p className="tagline">Everything Agentation can do</p>
          </header>

          <section style={{ animation: "slideUp 0.7s ease" }}>
            <h2 id="annotation-modes">
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{ fontSize: "1rem" }}>✏️</span> Annotation modes
              </span>
            </h2>
            <p>Click the tabs below to see examples of each annotation mode:</p>
            <AnnotationModesDemo />
          </section>

          <section style={{ animation: "slideUp 0.8s ease" }}>
            <h2 id="toolbar-controls">
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{ fontSize: "1rem" }}>🎛️</span> Toolbar controls
              </span>
            </h2>
            <ul style={{
              background: "linear-gradient(135deg, rgba(76,116,255,0.02), rgba(76,116,255,0.01))",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(76,116,255,0.08)"
            }}>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 6L8 18"></path>
                  <path d="M16 18L16 6"></path>
                </svg>{" "}
                <strong>Pause</strong> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Freeze CSS animations to annotate specific states
              </li>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.91752 12.7539C3.65127 12.2889 3.65127 11.7111 3.91752 11.2461C5.42678 8.59839 8.46097 6.25 12 6.25C15.539 6.25 18.5732 8.59839 20.0825 11.2461C20.3487 11.7111 20.3487 12.2889 20.0825 12.7539C18.5732 15.4016 15.539 17.75 12 17.75C8.46097 17.75 5.42678 15.4016 3.91752 12.7539Z"></path>
                  <path d="M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17391 12 9.17391C10.4392 9.17391 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z"></path>
                </svg>{" "}
                <strong>Visibility</strong> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Toggle annotation markers on/off while working
              </li>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z"></path>
                  <path d="M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75"></path>
                </svg>{" "}
                <strong>Copy</strong> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Get structured markdown for AI agents
              </li>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 11.5L10.125 15.5"></path>
                  <path d="M14 11.5L13.87 15.5"></path>
                  <path d="M9 7.5V6.25C9 5.42157 9.67157 4.75 10.5 4.75H13.5C14.3284 4.75 15 5.42157 15 6.25V7.5"></path>
                  <path d="M5.5 7.75H18.5"></path>
                  <path d="M6.75 7.75L7.11691 16.189C7.16369 17.2649 7.18708 17.8028 7.41136 18.2118C7.60875 18.5717 7.91211 18.8621 8.28026 19.0437C8.69854 19.25 9.23699 19.25 10.3139 19.25H13.6861C14.763 19.25 15.3015 19.25 15.7197 19.0437C16.0879 18.8621 16.3912 18.5717 16.5886 18.2118C16.8129 17.8028 16.8363 17.2649 16.8831 16.189L17.25 7.75"></path>
                </svg>{" "}
                <strong>Clear</strong> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Remove all annotations
              </li>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625"></path>
                </svg>{" "}
                <strong>Send Annotations</strong><span style={{fontSize:"0.65em",fontWeight:400,position:"relative",top:"-0.4em"}}>*</span> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Send annotations to your configured webhook
              </li>
              <li>
                <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em 0 0"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z"></path>
                  <circle cx="12" cy="12" r="2.5"></circle>
                </svg>{" "}
                <strong>Settings</strong> <span style={{color:"rgba(0,0,0,0.25)",margin:"0 0.25em"}}>•</span> Configure output detail, marker color, and behavior
              </li>
            </ul>
            <p style={{fontSize:"0.875rem",color:"rgba(0,0,0,0.5)",marginTop:"0.75rem"}}>Drag the toolbar to reposition it. Click a marker to remove it, or right-click to edit.</p>
            <p style={{fontSize:"0.75rem",color:"rgba(0,0,0,0.4)",marginTop:"0.5rem"}}>*Only visible when webhooks are enabled and auto-send is off</p>
          </section>

          <section>
            <h2 id="marker-types">Marker types</h2>
            <p>Different annotation modes use different marker styles.</p>
            <ul className="mkd-list">
              <li>
                <span className="mkd-marker-wrap">
                  <span className="mkd-marker blue">1</span>
                </span>
                Single element or text selection
              </li>
              <li>
                <span className="mkd-marker-wrap">
                  <span className="mkd-marker green">1</span>
                </span>
                Multi-select or area (always green)
              </li>
            </ul>
          </section>

          <section>
            <h2>Smart identification</h2>
            <p>Agentation automatically identifies elements in ways that make them easy to find with <code>grep</code>. CSS selectors, component names, and nearby landmarks are included in every annotation.</p>
            <SmartIdDemo />
            <p>Buttons and links are named by their text content.</p>
          </section>

          <section>
            <h2>Computed styles</h2>
            <p>View the computed CSS styles for any element directly in the annotation popup. No need to open DevTools — the full style cascade is right there.</p>
            <ComputedStylesDemo />
            <p>Click the chevron to expand computed CSS styles for the selected element. Styles are presented in a condensed format that's easy to copy into prompts.</p>
          </section>

          <section>
            <h2>React component detection</h2>
            <p>Agentation detects React component hierarchies using React DevTools internals. When you click an element, it shows the full component tree from root to leaf.</p>
            <ReactDetectionDemo />
            <p>Toggle React detection on/off in settings. The detection mode adapts automatically based on your output format:</p>
            <ul>
              <li>Compact — No React data</li>
              <li>Standard — Filtered</li>
              <li>Detailed — Smart</li>
              <li>Forensic — All</li>
            </ul>
          </section>

          <section style={{ animation: "slideUp 1s ease" }}>
            <h2>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{ fontSize: "1rem" }}>⌨️</span> Keyboard shortcuts
              </span>
            </h2>
            <table style={{
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              background: "#fff"
            }}>
              <thead>
                <tr>
                  <th>Shortcut</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Cmd+Shift+F</code> / <code>Ctrl+Shift+F</code></td>
                  <td>Toggle feedback mode</td>
                </tr>
                <tr>
                  <td><code>Esc</code></td>
                  <td>Close toolbar or cancel</td>
                </tr>
                <tr>
                  <td><code>P</code></td>
                  <td>Pause/resume animations</td>
                </tr>
                <tr>
                  <td><code>H</code></td>
                  <td>Hide/show markers</td>
                </tr>
                <tr>
                  <td><code>C</code></td>
                  <td>Copy feedback</td>
                </tr>
                <tr>
                  <td><code>X</code></td>
                  <td>Clear all annotations</td>
                </tr>
              </tbody>
            </table>
            <p>Shortcuts are disabled when typing in an input field.</p>
          </section>

          <section>
            <h2 id="agent-sync">Agent sync</h2>
            <p>With <a href="/mcp">MCP integration</a> and the <a href="/schema">Annotation Format Schema</a>, annotations become a two-way conversation. Agents can query, respond to, and manage your feedback:</p>
            <AgentSyncDemo />
            <p style={{marginTop:"0.5rem",fontSize:"0.8125rem",color:"rgba(0,0,0,0.5)"}}>Agents can acknowledge, ask questions, resolve with summaries, or dismiss with reasons.</p>
          </section>

          <section>
            <h2 id="settings">Settings</h2>
            <p>The <svg style={{display:"inline-block",verticalAlign:"-0.38em",width:"1.5em",height:"1.5em",margin:"0 -0.1em"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg> icon lets you customize Agentation to fit your workflow.</p>
            <SettingsDemo />
            <p style={{marginTop:"1rem",fontSize:"0.75rem",color:"rgba(0,0,0,0.5)",whiteSpace:"pre-line",lineHeight:1.3,animation:"fadeIn 0.3s ease"}}>Choose how much detail to include in your output.</p>
          </section>

          <section className="limitations-section" style={{
            padding: "1.5rem",
            background: "linear-gradient(135deg, rgba(245,158,11,0.03), rgba(245,158,11,0.01))",
            borderRadius: "0.75rem",
            border: "1px solid rgba(245,158,11,0.1)",
            animation: "slideUp 1.2s ease"
          }}>
            <h3 style={{
              fontSize:"0.875rem",
              fontWeight:550,
              color:"rgba(0,0,0,0.7)",
              marginBottom:"1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{ fontSize: "1rem" }}>⚠️</span> Limitations
            </h3>
            <ul style={{
              fontSize:"0.8125rem",
              color:"rgba(0,0,0,0.7)",
              lineHeight:1.6,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>Desktop only</strong> — requires a desktop browser</li>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>Per-page storage</strong> — localStorage persists 7 days. Use <a href="/install#agent-integration">MCP server</a> for cross-page persistence.</li>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>Static positions</strong> — markers don{"'"}t update if layout changes</li>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>No screenshots</strong> — output is text-only</li>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>CSS animations only</strong> — pause doesn{"'"}t work on JS animations (framer-motion, GSAP)</li>
              <li style={{ 
                padding: "0.5rem 0.75rem",
                background: "#fff",
                borderRadius: "0.5rem",
                transition: "transform 0.2s ease"
              }}><strong>React 18+ only</strong></li>
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
