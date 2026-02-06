"use client";

import { useState } from "react";
import SideNav from "../components/SideNav";

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-question${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
      </button>
      {open && <div className="faq-answer">{children}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <header>
            <h1>FAQ</h1>
            <p className="tagline">Common questions about Agentation</p>
          </header>

          <section>
            <h3>Basics</h3>
            <FaqItem question="What is Agentation?">
              <p>Agentation is a floating toolbar that lets you annotate elements on a web page and generate structured feedback for AI coding agents. It captures CSS selectors, React component names, computed styles, and your annotations in a format that agents like Claude Code or Cursor can immediately grep and act on. It grew out of <a href="https://benji.org/annotating">a post by Benji Taylor</a> about the friction of giving design feedback to AI.</p>
            </FaqItem>

            <FaqItem question="Why not just screenshot and annotate?">
              <p>Screenshots lose the connection to code. Agentation gives you CSS selectors like <code>.sidebar &gt; button.primary</code> that agents can grep directly, React component names to find the right file, and computed styles to understand current appearance. No guesswork.</p>
            </FaqItem>

            <FaqItem question="How do I install it?">
              <p>Run <code>npm install agentation -D</code> in your project, then add the <code>&lt;Agentation /&gt;</code> component to your app. See the <a href="/">homepage</a> for full setup instructions.</p>
            </FaqItem>

            <FaqItem question="Is there a Claude Code integration?">
              <p>Yes. Run <code>npx skills add</code> in your project, select Agentation from the list, then use the <code>/agentation</code> slash command in Claude Code to load best practices and patterns.</p>
            </FaqItem>
          </section>

          <section>
            <h3>Usage</h3>
            <FaqItem question="How does element identification work?">
              <p>Agentation generates a CSS selector path from the root to the selected element using class names, IDs, and text content. It prioritizes human-readable selectors over positional ones (e.g., <code>.header-title</code> instead of <code>div:nth-child(3)</code>).</p>
            </FaqItem>

            <FaqItem question="Does it detect React components?">
              <p>Yes. Agentation traverses the React Fiber tree to find the nearest component name for any selected element. This helps agents locate the right file in your codebase.</p>
            </FaqItem>

            <FaqItem question="Can I annotate text selections?">
              <p>Yes. Select any text on the page and Agentation will capture both the text and the containing element. Useful for typos or content feedback.</p>
            </FaqItem>

            <FaqItem question="How do I collapse the toolbar?">
              <p>Click the Agentation icon in the bottom-right corner, or press <code>Escape</code>. Your annotations persist in localStorage.</p>
            </FaqItem>

            <FaqItem question="Can I pause animations?">
              <p>Yes. Click the pause button in the toolbar to freeze all CSS animations and transitions. This only affects CSS; JavaScript-driven animations continue running.</p>
            </FaqItem>

            <FaqItem question="Can I customize marker colors?">
              <p>Yes. Open the settings panel in the toolbar and choose from several preset color themes. Your choice persists across sessions.</p>
            </FaqItem>

            <FaqItem question="Where are annotations stored?">
              <p>By default, annotations are stored in localStorage with a 7-day expiry. With the MCP server running, annotations sync to a SQLite database and become accessible to AI agents in real time.</p>
            </FaqItem>

            <FaqItem question="What is Agent Sync?">
              <p>Agent Sync connects Agentation to the Model Context Protocol server, enabling real-time collaboration. Your agent can read annotations, update their status, and even resolve them with a summary. See the <a href="/mcp">MCP setup guide</a> for details.</p>
            </FaqItem>
          </section>

          <section>
            <h3>Output</h3>
            <FaqItem question="What output formats are available?">
              <p>Four formats: <strong>Compact</strong> (selectors + feedback only), <strong>Standard</strong> (adds text content and component names), <strong>Detailed</strong> (adds computed styles), and <strong>Forensic</strong> (full DOM context and ancestry). Choose based on how much context your agent needs.</p>
            </FaqItem>

            <FaqItem question="Which AI agents work with Agentation?">
              <p>Any AI coding agent with codebase access. Claude Code, Cursor, Windsurf, GitHub Copilot Workspace, and others all understand the structured markdown output. With MCP, agents like Claude Desktop can interact with annotations directly.</p>
            </FaqItem>

            <FaqItem question="Can multiple people share annotations?">
              <p>With Agent Sync (MCP), annotations are stored in a shared database. Multiple team members can annotate the same page and see each other&apos;s feedback. The agent sees all annotations regardless of who created them.</p>
            </FaqItem>
          </section>

          <section>
            <h3>Technical</h3>
            <FaqItem question="Is there a React dependency?">
              <p>Yes, Agentation requires React 18 or later. It uses React portals and context internally.</p>
            </FaqItem>

            <FaqItem question="Does it work with TypeScript?">
              <p>Yes. Agentation ships with full TypeScript definitions for all props and API methods.</p>
            </FaqItem>

            <FaqItem question="Does it work with SSR/SSG?">
              <p>Yes. Agentation is designed for Next.js and other SSR frameworks. It only renders on the client side.</p>
            </FaqItem>

            <FaqItem question="Does it affect performance?">
              <p>Minimal impact. The toolbar is lazy-loaded and only active when opened. Annotation data is small (typically &lt;1KB per annotation) and stored locally.</p>
            </FaqItem>

            <FaqItem question="Should I include it in production?">
              <p>You can, but it&apos;s recommended for development only. Use an environment variable to conditionally render the component.</p>
            </FaqItem>

            <FaqItem question="Can I annotate iframes or shadow DOM?">
              <p>Shadow DOM is supported as of version 2.0. Iframes are currently limited to the main document only.</p>
            </FaqItem>

            <FaqItem question="I'm having issues with better-sqlite3 in the MCP server">
              <p>The MCP server uses <code>better-sqlite3</code> which requires native compilation. If you encounter errors during installation, see the <a href="https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md">better-sqlite3 troubleshooting guide</a> for platform-specific solutions.</p>
            </FaqItem>

            <FaqItem question="How do I report bugs or request features?">
              <p>Open an issue on <a href="https://github.com/benjitaylor/agentation/issues">GitHub</a>. Include your Agentation version, browser, and steps to reproduce.</p>
            </FaqItem>
          </section>
        </div>

        <footer className="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>Made by{" "}<a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,{" "}<a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, and{" "}<a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a></p>
          <a href="/colophon">Colophon</a>
        </footer>
      </main>
    </>
  );
}
