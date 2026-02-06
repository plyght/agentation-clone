"use client";

import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";
import WebhooksDiagram from "../components/diagrams/WebhooksDiagram";
import { useState } from "react";

export default function Webhooks() {
  const [copied, setCopied] = useState("");

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article" style={{ animation: "fadeIn 0.5s ease" }}>
          <header style={{ animation: "slideUp 0.6s ease" }}>
            <h1>Webhooks</h1>
            <p className="tagline">Send annotation events to external services automatically</p>
          </header>

          <section style={{ animation: "slideUp 0.7s ease" }}>
            <h2>Overview</h2>
            <p>Webhooks enable integrations with external services like Slack, Discord, GitHub, or custom analytics platforms. When enabled, Agentation sends HTTP POST requests to your configured endpoint for every annotation event.</p>
            <p>Configure webhooks by setting the <code style={{ 
              background: "linear-gradient(120deg, rgba(76,116,255,0.08), rgba(76,116,255,0.15))",
              padding: "0.15rem 0.4rem",
              borderRadius: "0.3rem",
              fontWeight: 500
            }}>webhookUrl</code> prop on the AgentationToolbar component.</p>

            <WebhooksDiagram />
          </section>

          <section>
            <h2>Configuration</h2>
            <p>Add the webhookUrl prop to enable webhooks:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">import {"{"} AgentationToolbar {"}"} from "agentation";</span>
              <span className="line"></span>
              <span className="line">export default function App() {"{"}</span>
              <span className="line">  return (</span>
              <span className="line">    {"<"}AgentationToolbar</span>
              <span className="line">      webhookUrl="https://your-api.com/agentation"</span>
              <span className="line">    /&gt;</span>
              <span className="line">  );</span>
              <span className="line">{"}"}</span>
            </div>
            <p>By default, annotations are sent automatically when created, updated, or deleted. To send annotations manually, disable auto-send in settings and use the Send Annotations button in the toolbar.</p>
          </section>

          <section style={{ animation: "slideUp 0.9s ease" }}>
            <h2>Events</h2>
            <p>Webhooks fire for the following events:</p>
            <ul style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "0.5rem",
              padding: "1rem",
              background: "rgba(76,116,255,0.03)",
              borderRadius: "0.5rem",
              border: "1px solid rgba(76,116,255,0.08)"
            }}>
              {["annotation.add", "annotation.delete", "annotation.update", "annotations.clear", "submit"].map((event, i) => (
                <li key={event} style={{
                  fontFamily: "'SF Mono', monospace",
                  fontSize: "0.8125rem",
                  color: "rgba(0,0,0,0.7)",
                  padding: "0.5rem",
                  background: "#fff",
                  borderRadius: "0.375rem",
                  listStyle: "none",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  animation: `fadeIn 0.3s ease ${0.1 * i}s both`,
                  cursor: "default"
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(76,116,255,0.15)";
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>{event}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Webhook Payload</h2>
            <p>All events send a POST request with the following JSON structure:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"{"}</span>
              <span className="line">  "event": "annotation.add",</span>
              <span className="line">  "timestamp": 1704067200000,</span>
              <span className="line">  "sessionId": "abc123",</span>
              <span className="line">  "url": "https://example.com/page",</span>
              <span className="line">  "data": {"{"}</span>
              <span className="line">    "id": "xyz789",</span>
              <span className="line">    "feedback": "Button text should be more descriptive",</span>
              <span className="line">    "selector": "button.primary",</span>
              <span className="line">    "component": "SubmitButton",</span>
              <span className="line">    "timestamp": 1704067200000</span>
              <span className="line">  {"}"}</span>
              <span className="line">{"}"}</span>
            </div>

            <h3>Event-specific payloads</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line comment">// annotation.add</span>
              <span className="line">{"{"} "event": "annotation.add", "data": {"{"} ...annotation {"}"} {"}"}</span>
              <span className="line"></span>
              <span className="line comment">// annotation.delete</span>
              <span className="line">{"{"} "event": "annotation.delete", "data": {"{"} "id": "xyz789" {"}"} {"}"}</span>
              <span className="line"></span>
              <span className="line comment">// submit</span>
              <span className="line">{"{"} "event": "submit", "data": {"{"} "annotations": [...] {"}"} {"}"}</span>
            </div>
          </section>

          <section>
            <h2>Combining with Callbacks</h2>
            <p>You can use webhooks alongside onSubmit and other callbacks for maximum flexibility:</p>
            <div className="code-block">
              <CopyButton />
              <span className="line">{"<AgentationToolbar"}</span>
              <span className="line">{"  webhookUrl=\"https://your-api.com/agentation\""}</span>
              <span className="line">{"  onSubmit={(annotations) => {"}</span>
              <span className="line">{"    console.log(\"Submitted:\", annotations);"}</span>
              <span className="line">{"  }}"}</span>
              <span className="line">{"/>"}</span>
            </div>
          </section>

          <section style={{ animation: "slideUp 1.1s ease" }}>
            <h2>Use Cases</h2>

            <h3 style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem 0.25rem 0.5rem",
              background: "linear-gradient(135deg, rgba(76,116,255,0.06), rgba(76,116,255,0.02))",
              borderRadius: "0.5rem",
              border: "1px solid rgba(76,116,255,0.1)"
            }}>
              <span style={{ fontSize: "1rem" }}>💬</span> Slack Notifications
            </h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">export async function POST(req: Request) {"{"}</span>
              <span className="line">  const {"{"} event, data {"}"} = await req.json();</span>
              <span className="line"></span>
              <span className="line">  if (event === "annotation.add") {"{"}</span>
              <span className="line">    await fetch(process.env.SLACK_WEBHOOK_URL, {"{"}</span>
              <span className="line">      method: "POST",</span>
              <span className="line">      body: JSON.stringify({"{"}</span>
              <span className="line">        text: `New feedback: $&#123;data.feedback&#125;`,</span>
              <span className="line">      {"}"}),</span>
              <span className="line">    {"}"});</span>
              <span className="line">  {"}"}</span>
              <span className="line"></span>
              <span className="line">  return new Response("OK");</span>
              <span className="line">{"}"}</span>
            </div>

            <h3 style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem 0.25rem 0.5rem",
              background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(34,197,94,0.02))",
              borderRadius: "0.5rem",
              border: "1px solid rgba(34,197,94,0.1)"
            }}>
              <span style={{ fontSize: "1rem" }}>🐙</span> GitHub Issue Creation
            </h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">if (event === "submit") {"{"}</span>
              <span className="line">  const issues = data.annotations.map((a) =&gt; ({"{"}</span>
              <span className="line">    title: a.feedback.slice(0, 50),</span>
              <span className="line">    body: `Selector: $&#123;a.selector&#125;`,</span>
              <span className="line">  {"}"}));</span>
              <span className="line"></span>
              <span className="line">  for (const issue of issues) {"{"}</span>
              <span className="line">    await octokit.issues.create(issue);</span>
              <span className="line">  {"}"}</span>
              <span className="line">{"}"}</span>
            </div>

            <h3 style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem 0.25rem 0.5rem",
              background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))",
              borderRadius: "0.5rem",
              border: "1px solid rgba(245,158,11,0.1)"
            }}>
              <span style={{ fontSize: "1rem" }}>📊</span> Real-time Dashboard
            </h3>
            <div className="code-block">
              <CopyButton />
              <span className="line">export async function POST(req: Request) {"{"}</span>
              <span className="line">  const {"{"} event, data {"}"} = await req.json();</span>
              <span className="line"></span>
              <span className="line">  await db.annotations.insert({"{"}</span>
              <span className="line">    ...data,</span>
              <span className="line">    event,</span>
              <span className="line">  {"}"});</span>
              <span className="line"></span>
              <span className="line">  return new Response("OK");</span>
              <span className="line">{"}"}</span>
            </div>
          </section>

          <section style={{ 
            padding: "1.5rem",
            background: "linear-gradient(135deg, rgba(239,68,68,0.03), rgba(239,68,68,0.01))",
            borderRadius: "0.75rem",
            border: "1px solid rgba(239,68,68,0.1)",
            animation: "slideUp 1.2s ease"
          }}>
            <h2 style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem"
            }}>
              <span style={{ fontSize: "1.1rem" }}>🔒</span> Security Considerations
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "🔐", text: "Use HTTPS", desc: "Always use encrypted connections" },
                { icon: "✓", text: "Validate origin", desc: "Check request sources" },
                { icon: "⏱️", text: "Rate limiting", desc: "Prevent abuse" },
                { icon: "🧹", text: "Sanitize content", desc: "Clean user input" }
              ].map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  background: "#fff",
                  borderRadius: "0.5rem",
                  listStyle: "none",
                  transition: "transform 0.2s ease",
                  animation: `fadeIn 0.3s ease ${0.1 * i}s both`
                }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(4px)"}
                   onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "0.125rem" }}>{item.text}</strong>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(0,0,0,0.5)" }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Testing Webhooks</h2>
            <p>Tools for testing webhooks during development:</p>
            <ul>
              <li>webhook.site</li>
              <li>ngrok</li>
              <li>RequestBin</li>
            </ul>

            <h3>Quick Test Setup</h3>
            <div className="code-block">
              <CopyButton />
              <span className="line comment">// 1. Get a test URL from webhook.site</span>
              <span className="line comment">// 2. Configure AgentationToolbar</span>
              <span className="line">{"<"}AgentationToolbar webhookUrl="https://webhook.site/your-id" /&gt;</span>
              <span className="line"></span>
              <span className="line comment">// 3. Create an annotation and view the payload in real-time</span>
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
