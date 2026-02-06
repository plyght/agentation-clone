"use client";

import { useState } from "react";
import SideNav from "./components/SideNav";
import HeroDemo from "./components/Hero/HeroDemo";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npm install agentation");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <a
            className="announcement-banner"
            href="/blog/introducing-agentation-2"
          >
            <span className="pulse-dot" />
            <span>
              <span style={{ fontWeight: 500 }}>New in 2.0:</span> Real-time
              agent sync
            </span>
            <span style={{ color: "#4a9eff", marginLeft: "0.5rem" }}>→</span>
          </a>

          <header style={{ position: "relative" }}>
            <button
              className="install-snippet"
              title="Copy to clipboard"
              onClick={handleCopy}
            >
              <code>npm install agentation</code>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {copied ? (
                  <polyline points="20 6 9 17 4 12" />
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
            </button>
            <h1 style={{ fontSize: "2rem", lineHeight: 1.15, marginBottom: "0.5rem" }}>
              <span className="sketchy-underline">Point at bugs.</span>
              <br />
              Let AI <span className="pen-underline">fix them.</span>
            </h1>
            <p className="tagline">
              Agentation turns UI annotations into structured context that AI
              coding agents can understand and act on. Click any element, add a
              note, and paste the output into Claude Code, Cursor, or any AI
              tool.
            </p>
          </header>

          <HeroDemo />

          <section>
            <h2>How you use it</h2>
            <ol>
              <li>Click the <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-0.45em", width: "1.5em", height: "1.5em", margin: "0 -0.1em" }}><path d="M11.5 12L5.5 12" /><path d="M18.5 6.75L5.5 6.75" /><path d="M9.25 17.25L5.5 17.25" /><path d="M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z" /></svg> icon in the bottom-right corner to activate</li>
              <li>
                <strong>Hover</strong> over elements to see their names
                highlighted
              </li>
              <li>
                <strong>Click</strong> any element to add an annotation
              </li>
              <li>
                Write your feedback and click <strong>Add</strong>
              </li>
              <li>Click <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ display: "inline-block", verticalAlign: "-0.45em", width: "1.5em", height: "1.5em", margin: "0 -0.1em" }}><path d="M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z" /><path d="M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75" /></svg> to copy formatted markdown</li>
              <li>Paste into your agent</li>
            </ol>
            <p style={{ fontSize: "0.8125rem", color: "rgba(0, 0, 0, 0.55)", marginTop: "1rem" }}>
              <strong style={{ display: "inline", margin: "-0.04em -0.06em", padding: "0.04em 0.06em", borderRadius: "0.2em 0.15em", backgroundImage: "linear-gradient(75deg, rgba(250, 204, 21, 0.5), rgba(250, 204, 21, 0.15) 4%, rgba(250, 204, 21, 0.3) 96%, rgba(250, 204, 21, 0.6))" }}>Note:</strong> With{" "}
              <a href="/mcp">MCP</a>, you can skip the
              copy-paste step entirely — your agent already sees what you&apos;re
              pointing at. Just say &ldquo;address my feedback&rdquo; or &ldquo;fix annotation 3.&rdquo;
            </p>
          </section>

          <section>
            <h2>How agents use it</h2>
            <p>
              Agentation works best with AI tools that have access to your
              codebase (Claude Code, Cursor, etc.). When you paste the output,
              agents get:
            </p>
            <ul>
              <li>
                <strong>CSS selectors</strong> to grep your codebase
              </li>
              <li>
                <strong>React component names</strong> to find the right file
              </li>
              <li>
                <strong>Computed styles</strong> to understand current
                appearance
              </li>
              <li>
                <strong>Your feedback</strong> with intent and priority
              </li>
            </ul>
            <p>
              Without Agentation, you'd have to describe the element ("the blue
              button in the sidebar") and hope the agent guesses right. With
              Agentation, you give it{" "}
              <code>.sidebar &gt; button.primary</code> and it can grep for that
              directly.
            </p>
          </section>

          <section className="demo-section hide-on-mobile">
            <h2>Try it</h2>
            <p>
              The toolbar is active on this page. Try annotating these demo
              elements:
            </p>
            <div className="demo-elements">
              <div className="button-group">
                <button className="demo-button">Primary</button>
                <button className="demo-button secondary">Secondary</button>
                <button className="demo-button" style={{ background: "rgb(60, 130, 247)" }}>Modal</button>
                <button
                  className="demo-button"
                  style={{ background: "rgb(124, 58, 237)" }}
                >
                  Shadow Modal
                </button>
              </div>
              <input
                className="demo-input"
                placeholder="Try selecting this text..."
              />
              <div className="demo-card">
                <h3>Example Card</h3>
                <p>
                  Click on this card or select this text to create an
                  annotation. The output will include the element path and your
                  feedback.
                </p>
              </div>
            </div>
          </section>

          <section className="demo-section hide-on-mobile">
            <h2>Animation pause demo</h2>
            <p>Click <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ display: "inline-block", verticalAlign: "-0.45em", width: "1.5em", height: "1.5em", margin: "0 -0.1em" }}><path d="M8 6L8 18" /><path d="M16 18L16 6" /></svg> in the toolbar to freeze this animation:</p>
            <div className="animation-demo" style={{ marginTop: "1rem" }}>
              <div className="progress-bar-demo">
                <div className="progress-bar" />
              </div>
            </div>
          </section>

          <section>
            <h2>Agents talk back</h2>
            <p>
              With <a href="/mcp">MCP integration</a> and
              the{" "}
              <a href="/schema">
                Annotation Format Schema
              </a>
              , agents don't just read your annotations — they can respond to
              them:
            </p>
            <ul>
              <li>
                <strong>"What annotations do I have?"</strong> — List all
                feedback across pages
              </li>
              <li>
                <strong>"Should this be 24px or 16px?"</strong> — Agent asks
                for clarification
              </li>
              <li>
                <strong>"Fixed the padding"</strong> — Agent resolves with a
                summary
              </li>
              <li>
                <strong>"Clear all annotations"</strong> — Dismiss everything at
                once
              </li>
            </ul>
            <p>
              Your feedback becomes a conversation, not a one-way ticket into
              the void.
            </p>
          </section>

          <section>
            <h2>Best practices</h2>
            <ul>
              <li>
                <strong>Be specific</strong> — "Button text unclear" is better
                than "fix this"
              </li>
              <li>
                <strong>One issue per annotation</strong> — easier for the agent
                to address individually
              </li>
              <li>
                <strong>Include context</strong> — mention what you expected vs.
                what you see
              </li>
              <li>
                <strong>Use text selection</strong> — for typos or content
                issues, select the exact text
              </li>
              <li>
                <strong>Pause animations</strong> — to annotate a specific
                animation frame
              </li>
            </ul>
          </section>

          <section>
            <h2>Licensing</h2>
            <p>
              Agentation is free for individuals and companies for internal use.
              Use it to annotate your own projects, debug your own apps, or
              streamline feedback within your team.{" "}
              <a href="mailto:benji@dip.org">Contact us</a> for a commercial
              license if you're redistributing Agentation as part of a product
              you sell.
            </p>
          </section>

          <section className="quickstart-links">
            <p>
              <a className="styled-link" href="/mcp">
                Set up real-time sync with MCP <span className="arrow">→</span>
              </a>
            </p>
            <p>
              <a className="styled-link" href="/webhooks">
                Push annotations to external services{" "}
                <span className="arrow">→</span>
              </a>
            </p>
            <p>
              <a className="styled-link" href="/api">
                Build your own integration with the API{" "}
                <span className="arrow">→</span>
              </a>
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
