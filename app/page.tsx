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
            <h1>
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
              <li>Click the ✨ icon in the bottom-right corner to activate</li>
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
              <li>Click 📋 to copy formatted markdown</li>
              <li>Paste into your agent</li>
            </ol>
            <p className="note">
              <strong>Note:</strong> With{" "}
              <a href="https://agentation.dev/mcp">MCP</a>, you can skip the
              copy-paste step entirely — your agent already sees what you're
              pointing at. Just say "address my feedback" or "fix annotation 3."
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

          <div className="demo-section">
            <h2>Try it</h2>
            <p>
              The toolbar is active on this page. Try annotating these demo
              elements:
            </p>
            <div className="demo-elements">
              <div className="button-group">
                <button className="demo-button">Primary</button>
                <button className="demo-button secondary">Secondary</button>
                <button className="demo-button">Modal</button>
                <button
                  className="demo-button"
                  style={{ background: "#9333ea" }}
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
          </div>

          <section>
            <h2>Animation pause demo</h2>
            <p>Click ⏸ in the toolbar to freeze this animation:</p>
            <div className="animation-demo" style={{ marginTop: "1rem" }}>
              <div className="progress-bar-demo">
                <div className="progress-bar" />
              </div>
            </div>
          </section>

          <section>
            <h2>Agents talk back</h2>
            <p>
              With <a href="https://agentation.dev/mcp">MCP integration</a> and
              the{" "}
              <a href="https://agentation.dev/schema">
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

          <div className="quickstart-links">
            <p>
              <a href="/mcp">
                Set up real-time sync with MCP <span className="arrow">→</span>
              </a>
            </p>
            <p>
              <a href="/webhooks">
                Push annotations to external services{" "}
                <span className="arrow">→</span>
              </a>
            </p>
            <p>
              <a href="/api">
                Build your own integration with the API{" "}
                <span className="arrow">→</span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer">
          <p>
            Made by <a href="https://twitter.com/benjitaylor">Benji Taylor</a>,{" "}
            <a href="https://twitter.com/dennisjin">Dennis Jin</a>, and{" "}
            <a href="https://twitter.com/alexvanderzon">Alex Vanderzon</a>
          </p>
        </div>
      </main>
    </>
  );
}
