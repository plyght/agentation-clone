import Link from "next/link";
import CopyButton from "../components/CopyButton";

export default function Output() {
  return (
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Output</h1>
            <p className="tagline">
              How Agentation structures feedback for AI agents
            </p>
          </header>

          <section>
            <p>
              When you copy, you get structured markdown that agents can parse and act on. Four formats are available:
            </p>
            <div className="code-block">
              <CopyButton />
              <span className="line">## Page Feedback: /dashboard</span>
              <span className="line">**Viewport:** 1512x738</span>
              <span className="line"></span>
              <span className="line">### 1. button.submit-btn</span>
              <span className="line">**Location:** `.form-container &gt; .actions &gt; button.submit-btn`</span>
              <span className="line">**Classes:** `submit-btn primary`</span>
              <span className="line">**React:** `&lt;App&gt; &lt;Dashboard&gt; &lt;FormActions&gt; &lt;SubmitButton&gt;`</span>
              <span className="line">**Position:** 450, 320 (120x40)</span>
              <span className="line">**Feedback:** Button text should say "Save" not "Submit"</span>
              <span className="line"></span>
              <span className="line">### 2. span.nav-label</span>
              <span className="line">**Location:** `.sidebar &gt; nav &gt; .nav-item &gt; span`</span>
              <span className="line">**React:** `&lt;App&gt; &lt;Sidebar&gt; &lt;NavItem&gt;`</span>
              <span className="line">**Selected:** "Settigns"</span>
              <span className="line">**Feedback:** Typo - should be "Settings"</span>
            </div>
          </section>

          <section>
            <h2>When to use each format</h2>
            <ul>
              <li>
                <strong>Compact</strong> — Quick feedback, minimal context
              </li>
              <li>
                <strong>Standard</strong> — Balanced detail (recommended)
              </li>
              <li>
                <strong>Detailed</strong> — Full element context and styles
              </li>
              <li>
                <strong>Forensic</strong> — Maximum detail for debugging
              </li>
            </ul>
          </section>

          <section>
            <h2>React component detection</h2>
            <p>
              Agentation automatically detects React component trees and includes them in the output. This lets agents grep for component names and find the right files immediately.
            </p>
          </section>

          <section>
            <h2>Why structured output?</h2>
            <p>
              CSS selectors and class names let agents grep your codebase directly. Instead of describing "the blue button in the sidebar," you give agents{" "}
              <code>.sidebar &gt; button.primary</code> and they can search for it.
            </p>
          </section>

          <section>
            <h2>Customizing output</h2>
            <p>
              The copied output is plain markdown. You can edit it before pasting to:
            </p>
            <ul>
              <li>
                <strong>Add context</strong> — Include requirements or constraints
              </li>
              <li>
                <strong>Prioritize</strong> — Reorder or number by importance
              </li>
              <li>
                <strong>Remove noise</strong> — Delete irrelevant technical details
              </li>
              <li>
                <strong>Add instructions</strong> — Tell agents how to approach the work
              </li>
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
          <Link href="/colophon">Colophon</Link>
        </footer>
      </main>
  );
}
