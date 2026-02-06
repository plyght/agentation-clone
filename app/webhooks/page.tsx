"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CodeBlock from "../components/CodeBlock";
import PageFooter from "../components/PageFooter";

/* ─── Diagram data ─── */
const actors = [
  { id: "browser", label: "Browser", sublabel: "Agentation" },
  { id: "webhook", label: "Webhook", sublabel: "Server" },
  { id: "service", label: "Service", sublabel: "Slack, GitHub..." },
];

const messages: {
  from: number;
  to: number;
  label: string;
  direction: "right" | "left";
  type: "request" | "response";
}[] = [
  { from: 0, to: 1, label: "annotation.add", direction: "right", type: "request" },
  { from: 1, to: 2, label: "POST /slack", direction: "right", type: "request" },
  { from: 2, to: 1, label: "200 OK", direction: "left", type: "response" },
  { from: 0, to: 1, label: "submit", direction: "right", type: "request" },
  { from: 1, to: 2, label: "POST /github/issues", direction: "right", type: "request" },
  { from: 2, to: 1, label: "201 Created", direction: "left", type: "response" },
];

const pulseColor = "#60a5fa";
const actorSpacing = 340 / (actors.length - 1);
const positions = actors.map((_, i) => 50 + i * actorSpacing);
const ROW_START = 32;
const ROW_HEIGHT = 42;
const svgHeight = ROW_START + (messages.length - 1) * ROW_HEIGHT + 30;
const MESSAGE_INTERVAL = 1400;

/* ─── Animated Webhooks Diagram ─── */
function WebhooksDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [activeRow, setActiveRow] = useState(-1);

  useEffect(() => {
    const styleId = "webhooks-diagram-pulse-css";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes webhookPulseLabel {
          0% { fill: ${pulseColor}; }
          50% { fill: rgba(96,165,250,0.3); }
          100% { fill: rgba(0,0,0,0.45); }
        }
        @keyframes webhookPulseActor {
          0% { box-shadow: 0 0 0 0 rgba(96,165,250,0.25); }
          50% { box-shadow: 0 0 0 6px rgba(96,165,250,0); }
          100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i >= messages.length) {
        clearInterval(timer);
        return;
      }
      setActiveRow(i);
      i++;
    }, MESSAGE_INTERVAL);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        marginTop: "1.5rem",
        marginBottom: "1rem",
        padding: "24px",
        background: "#fafafa",
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          margin: "0 auto",
        }}
      >
        {/* Actors */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0px",
          }}
        >
          {actors.map((actor, i) => (
            <motion.div
              key={actor.id}
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <div
                style={{
                  padding: "8px 16px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  fontFamily: "system-ui, sans-serif",
                  animation:
                    isInView && activeRow >= 0
                      ? "webhookPulseActor 1.4s ease-in-out 0.8s infinite"
                      : undefined,
                }}
              >
                {actor.label}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(0,0,0,0.4)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {actor.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SVG sequence */}
        <svg
          width="100%"
          viewBox={`0 0 440 ${svgHeight}`}
          style={{ display: "block" }}
        >
          {/* Lifelines */}
          {positions.map((x, i) => (
            <motion.line
              key={`lifeline-${i}`}
              x1={x}
              y1={10}
              x2={x}
              y2={svgHeight - 10}
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          ))}

          {/* Messages */}
          {messages.map((msg, idx) => {
            const y = ROW_START + idx * ROW_HEIGHT;
            const fromX = positions[msg.from];
            const toX = positions[msg.to];
            const midX = (fromX + toX) / 2;
            const isResponse = msg.type === "response";
            const arrowTip = msg.direction === "right" ? toX : toX;
            const arrowDir = msg.direction === "right" ? -1 : 1;
            const visible = activeRow >= idx;
            const delay = 0;

            return (
              <g key={`arrow-${idx}`}>
                <motion.line
                  x1={fromX}
                  y1={y}
                  x2={toX}
                  y2={y}
                  stroke={isResponse ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.3)"}
                  strokeWidth="1.5"
                  strokeDasharray={isResponse ? "6 4" : undefined}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={visible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay }}
                />
                <motion.polyline
                  points={`${arrowTip + arrowDir * 5},${y - 4} ${arrowTip},${y} ${arrowTip + arrowDir * 5},${y + 4}`}
                  fill="none"
                  stroke={isResponse ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.3)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={visible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay }}
                />
                <motion.text
                  x={midX}
                  y={y - 7}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="'SF Mono', ui-monospace, monospace"
                  fill="rgba(0,0,0,0.45)"
                  initial={{ opacity: 0, y: 4 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay }}
                  style={
                    visible && idx === activeRow
                      ? { animation: "webhookPulseLabel 1.4s ease-in-out" }
                      : undefined
                  }
                >
                  {msg.label}
                </motion.text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 1.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "12px",
            fontSize: "10px",
            color: "rgba(0,0,0,0.4)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="24" height="2">
              <line
                x1="0"
                y1="1"
                x2="24"
                y2="1"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="1.5"
              />
            </svg>
            <span>request</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="24" height="2">
              <line
                x1="0"
                y1="1"
                x2="24"
                y2="1"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
            <span>response</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Code strings ─── */
const configCode = `import { Agentation } from "agentation";

function App() {
  return (
    <>
      <YourApp />
      <Agentation webhookUrl="https://your-server.com/webhook" />
    </>
  );
}`;

const payloadCode = `{
  "event": "annotation.add",
  "timestamp": 1706234567890,
  "url": "https://example.com/dashboard",
  "annotation": {
    "id": "1706234567890",
    "comment": "Button is cut off on mobile",
    "element": "button",
    "elementPath": "body > main > form > button.submit-btn",
    "timestamp": 1706234567890
  }
}`;

const annotationEventsCode = `// annotation.add — full annotation object
{ "event": "annotation.add", "annotation": { ... } }

// annotation.delete — only the deleted ID
{ "event": "annotation.delete", "annotation": { "id": "1706234567890" } }

// annotation.update — updated annotation object
{ "event": "annotation.update", "annotation": { ... } }`;

const clearEventsCode = `// annotations.clear — no annotation data
{
  "event": "annotations.clear",
  "timestamp": 1706234567890,
  "url": "https://example.com/dashboard"
}`;

const submitEventsCode = `// submit — array of all annotations
{
  "event": "submit",
  "timestamp": 1706234567890,
  "url": "https://example.com/dashboard",
  "annotations": [ ... ]
}`;

const callbackCode = `<Agentation
  webhookUrl="https://your-server.com/webhook"
  onSubmit={(output, annotations) => {
    // This fires in addition to the webhook
    console.log("Submitted:", annotations.length, "annotations");
  }}
  onAnnotationAdd={(annotation) => {
    // Track in analytics
    analytics.track("annotation_created");
  }}
/>`;

const slackCode = `export async function POST(req: Request) {
  const { event, annotation } = await req.json();

  if (event === "annotation.add") {
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: \`New annotation: \${annotation.comment}\`,
      }),
    });
  }

  return new Response("OK");
}`;

const githubCode = `export async function POST(req: Request) {
  const { event, annotations } = await req.json();

  if (event === "submit") {
    for (const annotation of annotations) {
      await octokit.issues.create({
        owner: "your-org",
        repo: "your-repo",
        title: annotation.comment.slice(0, 80),
        body: \`Element: \\\`\${annotation.elementPath}\\\`\\nURL: \${annotation.url}\`,
        labels: ["feedback"],
      });
    }
  }

  return new Response("OK");
}`;

const dashboardCode = `export async function POST(req: Request) {
  const payload = await req.json();

  // Store in database for real-time dashboard
  await db.webhookEvents.insert({
    event: payload.event,
    timestamp: payload.timestamp,
    url: payload.url,
    data: JSON.stringify(payload),
  });

  // Broadcast to connected WebSocket clients
  wss.broadcast(JSON.stringify(payload));

  return new Response("OK");
}`;

const testCode = `// Use webhook.site for testing
<Agentation webhookUrl="https://webhook.site/your-unique-id" />

// Then create annotations and check webhook.site for payloads`;

/* ─── Page ─── */
export default function WebhooksPage() {
  return (
      <main className="main-content">
      <article className="article">
        <header>
          <h1>Webhooks</h1>
          <p className="tagline">
            Send annotation events to external services automatically
          </p>
        </header>

        {/* Overview */}
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            Webhooks let you push annotation events to any HTTP endpoint in
            real-time. Every time a user creates, updates, or deletes an
            annotation — or clicks &ldquo;Send Annotations&rdquo; — Agentation
            fires an HTTP POST to the URL you configure.
          </p>
          <p>
            This enables integrations with Slack, GitHub, custom dashboards,
            analytics platforms, and anything else that can receive an HTTP
            request.
          </p>
          <WebhooksDiagram />
        </section>

        {/* Configuration */}
        <section>
          <h2 id="configuration">Configuration</h2>
          <p>
            Pass a <code>webhookUrl</code> prop to the{" "}
            <code>Agentation</code> component to start sending events:
          </p>
          <CodeBlock code={configCode} language="tsx" copyable />
        </section>

        {/* Events */}
        <section>
          <h2 id="events">Events</h2>
          <p>Five event types are sent to your webhook endpoint:</p>
          <ul
            style={{
              fontSize: "0.8125rem",
              color: "rgba(0,0,0,0.65)",
            }}
          >
            <li>
              <code>annotation.add</code> — New annotation created
            </li>
            <li>
              <code>annotation.delete</code> — Annotation deleted
            </li>
            <li>
              <code>annotation.update</code> — Annotation comment edited
            </li>
            <li>
              <code>annotations.clear</code> — All annotations cleared
            </li>
            <li>
              <code>submit</code> — &ldquo;Send Annotations&rdquo; clicked
            </li>
          </ul>
        </section>

        {/* Webhook Payload */}
        <section>
          <h2 id="webhook-payload">Webhook Payload</h2>
          <p>
            All webhook requests are HTTP POST with a JSON body. Here is a
            typical <code>annotation.add</code> payload:
          </p>
          <CodeBlock code={payloadCode} language="json" copyable />

          <h3>Event-specific payloads</h3>
          <p>Annotation events include the full or partial annotation object:</p>
          <CodeBlock code={annotationEventsCode} language="json" copyable />
          <p>
            The <code>annotations.clear</code> event contains no annotation
            data:
          </p>
          <CodeBlock code={clearEventsCode} language="json" copyable />
          <p>
            The <code>submit</code> event includes the full array of
            annotations:
          </p>
          <CodeBlock code={submitEventsCode} language="json" copyable />
        </section>

        {/* Client Callback */}
        <section>
          <h2 id="client-callback">Combining with Callbacks</h2>
          <p>
            Webhooks and client-side callbacks can run side by side. The webhook
            fires server-side while callbacks fire in the browser — use both for
            maximum flexibility:
          </p>
          <CodeBlock code={callbackCode} language="tsx" copyable />
        </section>

        {/* Use Cases */}
        <section>
          <h2 id="use-cases">Use Cases</h2>

          <h3>Slack Notifications</h3>
          <p>
            Forward annotation events to a Slack channel so your team sees
            feedback in real time:
          </p>
          <CodeBlock code={slackCode} language="tsx" copyable />

          <h3>GitHub Issue Creation</h3>
          <p>
            Automatically create GitHub issues when annotations are submitted:
          </p>
          <CodeBlock code={githubCode} language="tsx" copyable />

          <h3>Real-time Dashboard</h3>
          <p>
            Store every event and broadcast to a live dashboard via WebSockets:
          </p>
          <CodeBlock code={dashboardCode} language="tsx" copyable />
        </section>

        {/* Security */}
        <section>
          <h2 id="security">Security Considerations</h2>
          <p>Keep the following in mind when exposing a webhook endpoint:</p>
          <ul>
            <li>
              <strong>Use HTTPS</strong> — Always use encrypted connections for
              webhook URLs
            </li>
            <li>
              <strong>Validate origin</strong> — Check the request origin if
              your webhook is public
            </li>
            <li>
              <strong>Rate limiting</strong> — Implement rate limits to prevent
              abuse
            </li>
            <li>
              <strong>Sanitize content</strong> — Annotation comments may
              contain user-generated content; sanitize before rendering
            </li>
          </ul>
        </section>

        {/* Testing */}
        <section>
          <h2 id="testing">Testing Webhooks</h2>
          <p>Useful tools for testing webhooks during development:</p>
          <ul>
            <li>
              <strong>webhook.site</strong> — Free public endpoint for testing
              payloads
            </li>
            <li>
              <strong>ngrok</strong> — Expose local server for testing with real
              URLs
            </li>
            <li>
              <strong>RequestBin</strong> — Inspect and debug webhook payloads
            </li>
          </ul>

          <h3>Quick Test Setup</h3>
          <CodeBlock code={testCode} language="tsx" copyable />
        </section>
      </article>
      <PageFooter />
      </main>
  );
}
