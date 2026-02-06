import Link from "next/link";

export const metadata = {
  title: "Introducing Agentation 2.0",
};

export default function IntroducingAgentation2() {
  return (
      <main className="main-content">
        <article className="article">
          <header>
            <p style={{ fontSize: "0.6875rem", fontWeight: 450, color: "rgba(0, 0, 0, 0.4)", margin: "0 0 0.5rem 0" }}>
              February 5, 2026 <span style={{ color: "rgba(0, 0, 0, 0.15)", margin: "0 0.375rem" }}>|</span> Posted by Benji Taylor
            </p>
            <h1>Introducing Agentation 2.0</h1>
            <p className="tagline">A new way for humans and AI to collaborate on UI</p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <p style={{ margin: 0 }}>
              Since launch, Agentation has already become part of how a lot of developers work with AI on UI, with over{" "}
              <a href="https://github.com/benjitaylor/agentation" target="_blank" rel="noopener noreferrer">1.8k GitHub stars</a>{" "}
              and{" "}
              <a href="https://www.npmjs.com/package/agentation" target="_blank" rel="noopener noreferrer">hundreds of thousands of installs</a>{" "}
              via npm.
            </p>
            <p style={{ margin: 0 }}>
              Version 1 was <em>annotate, copy, paste</em>. You&apos;d annotate something, copy the structured output, hand it to your agent. Good context, but requires a manual handoff.
            </p>
            <p style={{ margin: 0 }}>
              Version 2 is <em>annotate and collaborate</em>. Your agent sees your annotations directly. It has the full picture: what you&apos;re pointing at, what you said, what&apos;s pending across your whole site. You work together until it&apos;s fixed.
            </p>
          </div>

          <section>
            <h2 id="mcp">MCP Integration</h2>
            <p>
              The <a href="/mcp">Model Context Protocol server</a> is the biggest addition in 2.0. It&apos;s what makes the direct connection possible.
            </p>
            <p>
              With MCP, agents can fetch your current annotations, acknowledge them, ask follow-up questions, resolve issues with summaries, or dismiss feedback with reasons. Your annotations flow directly into the agent&apos;s context.
            </p>
            <p>
              The server runs locally and supports multiple interfaces: <a href="/mcp">MCP tools</a> for direct agent integration, an <a href="/api">HTTP API</a> for custom workflows, and <a href="/api#real-time-events">Server-Sent Events</a> for real-time updates. It&apos;s designed to work with Claude Code and any MCP-compatible client.
            </p>
            <p>Here&apos;s what the workflow looks like:</p>
            <div style={{ marginTop: "0.75rem", fontSize: "0.8125rem", lineHeight: 1.7, background: "rgba(0, 0, 0, 0.02)", padding: "1rem 1.25rem", borderRadius: "0.5rem" }}>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "rgba(0,0,0,0.4)" }}>You:</span> {"\u201C"}What annotations do I have?{"\u201D"}</p>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "#4a9eff" }}>Agent:</span> {"\u201C"}3 annotations: button on /checkout, contrast on /settings, typo on /about.{"\u201D"}</p>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "rgba(0,0,0,0.4)" }}>You:</span> {"\u201C"}Fix the button{"\u201D"}</p>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "#4a9eff" }}>Agent:</span> {"\u201C"}Left-align or center with the form?{"\u201D"}</p>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "rgba(0,0,0,0.4)" }}>You:</span> {"\u201C"}Center{"\u201D"}</p>
              <p style={{ margin: "0.375rem 0" }}><span style={{ color: "#4a9eff" }}>Agent:</span> {"\u201C"}Done. Marked as resolved.{"\u201D"}</p>
            </div>
          </section>

          <section>
            <h2 id="sessions">Sessions &amp; Smart Filtering</h2>
            <p>
              Every page now gets its own <a href="/mcp#sessions">session</a>, and every annotation carries rich metadata: when it was created, when it was last updated, its current status, and who resolved it. This unlocks entirely new ways to work with feedback.
            </p>
            <p>Ask your agent things like:</p>
            <ul style={{ fontSize: "0.875rem", lineHeight: 1.7, marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
              <li>{"\u201C"}What feedback has been waiting the longest?{"\u201D"}</li>
              <li>{"\u201C"}Show me just the blocking issues{"\u201D"}</li>
              <li>{"\u201C"}Which pages have unresolved annotations?{"\u201D"}</li>
              <li>{"\u201C"}What did I mark as a question vs a fix request?{"\u201D"}</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Status transitions are first-class too. When an agent starts working on your feedback, it can mark it as <em>acknowledged</em> so you know it&apos;s in progress. When it&apos;s done, it resolves with a summary. If it decides not to act, it dismisses with a reason. Every state change is timestamped, so you always know the full history.
            </p>
          </section>

          <section>
            <h2 id="schema">Standardized Schema</h2>
            <p>
              We&apos;ve published a formal <a href="/schema">Annotation Format Schema</a> that defines exactly how annotations are structured. The schema makes annotations portable across tools and predictable for anything that consumes them.
            </p>
            <p>
              The schema includes <a href="/schema#annotation-object">intent and severity fields</a>, so you can flag something as a blocking bug vs a minor suggestion, or distinguish between {"\u201C"}fix this{"\u201D"} and {"\u201C"}I have a question about this.{"\u201D"} Agents can use these signals to prioritize work automatically.
            </p>
            <p>JSON Schema and TypeScript definitions are both available. If you&apos;re building tools that consume annotations, the schema is your starting point.</p>
          </section>

          <section>
            <h2 id="webhooks">Webhooks</h2>
            <p>
              <a href="/webhooks">Webhooks</a> let you subscribe to annotation events and push them anywhere. Configure a URL, and every annotation gets delivered as a structured JSON payload.
            </p>
            <p>Some workflows you could build:</p>
            <ul style={{ fontSize: "0.875rem", lineHeight: 1.7, marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
              <li><strong>GitHub Issues:</strong> Automatically create issues from annotations, labeled by severity. Pair with a GitHub Action that triggers Claude Code to fix them.</li>
              <li><strong>Slack alerts:</strong> Post blocking issues to a channel with a {"\u201C"}Fix it{"\u201D"} button that invokes your agent.</li>
              <li><strong>Linear sync:</strong> Turn annotations into tickets, with component paths pre-filled so engineers know exactly where to look.</li>
              <li><strong>Review dashboard:</strong> Aggregate feedback across your team into a single view, sorted by age and severity.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>The schema is stable enough to build on. If you can receive a POST request, you can integrate Agentation into your workflow.</p>
          </section>

          <section>
            <h2 id="react-detection">React Component Detection</h2>
            <p>
              When you hover over an element in a React app, Agentation now shows the full <a href="/features#react-detection">component hierarchy</a>. Not just the DOM element, but the actual components from your codebase.
            </p>
            <p>
              This makes it dramatically easier for AI agents to find the right file. Instead of searching for a class name that might be generated, they can search for <code>ProductCard</code> or <code>CheckoutButton</code>, the names you actually use.
            </p>
            <p>The detection adapts to your output format: disabled in Compact mode, framework-filtered in Standard, CSS-correlated in Detailed, and everything (including internals) in Forensic.</p>
          </section>

          <section>
            <h2 id="whats-next">What&apos;s Next</h2>
            <p>
              Agentation is still new. The vision is a world where UI feedback loops shrink from hours to seconds. Point at something, say what&apos;s wrong, and watch it get fixed in real time.
            </p>
            <p>
              If you haven&apos;t tried Agentation yet, <a href="/install">install it</a> and see how it changes the way you work with AI agents. If you&apos;re already using it, update to 2.0 and let us know what you think.
            </p>
          </section>
        </article>

        <footer className="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>Made by{" "}<a href="https://x.com/benjitaylor" target="_blank" rel="noopener noreferrer">Benji Taylor</a>,{" "}<a href="https://x.com/seldom" target="_blank" rel="noopener noreferrer">Dennis Jin</a>, and{" "}<a href="https://x.com/alexvanderzon" target="_blank" rel="noopener noreferrer">Alex Vanderzon</a></p>
          <Link href="/colophon">Colophon</Link>
        </footer>
      </main>
  );
}
