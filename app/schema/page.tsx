"use client";

import Link from "next/link";
import CopyButton from "../components/CopyButton";
import SchemaDiagram from "../components/diagrams/SchemaDiagram";

export default function SchemaPage() {
  return (
      <main className="main-content">
        <div className="article" style={{ animation: "fadeIn 0.5s ease" }}>
          <header style={{ animation: "slideUp 0.6s ease" }}>
            <h1>
              Annotation Format Schema{" "}
              <span style={{ 
                fontSize: "0.7em",
                background: "linear-gradient(135deg, rgba(76,116,255,0.15), rgba(76,116,255,0.25))",
                padding: "0.15rem 0.5rem",
                borderRadius: "0.35rem",
                fontWeight: 600,
                color: "rgba(76,116,255,0.9)"
              }}>v1.0</span>
            </h1>
            <p className="tagline">
              A portable format for structured UI feedback
            </p>
          </header>

          <section style={{ animation: "slideUp 0.7s ease" }}>
            <h2>Overview</h2>
            <p>
              The <span style={{
                background: "linear-gradient(120deg, rgba(76,116,255,0.08), rgba(76,116,255,0.15))",
                padding: "0.15rem 0.4rem",
                borderRadius: "0.3rem",
                fontWeight: 500
              }}>Annotation Format Schema (AFS)</span> is an open format for
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

            <SchemaDiagram />
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
          <Link href="/colophon">Colophon</Link>
        </footer>
      </main>
  );
}
