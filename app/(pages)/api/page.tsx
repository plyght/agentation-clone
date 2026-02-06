"use client";

import CodeBlock from "../../components/CodeBlock";
import PageFooter from "../../components/PageFooter";

const basicUsageCode = `import { Agentation, Annotation } from "agentation";

function App() {
  const handleAnnotation = (annotation: Annotation) => {
    console.log(annotation.element, annotation.comment);
  };

  return (
    <>
      <YourApp />
      <Agentation onAnnotationAdd={handleAnnotation} />
    </>
  );
}`;

const annotationTypeCode = `type Annotation = {
  // Required
  id: string;              // Unique identifier
  comment: string;         // User's annotation text
  elementPath: string;     // CSS selector path
  timestamp: number;       // Unix timestamp (ms)
  x: number;               // % of viewport width (0-100)
  y: number;               // px from document top
  element: string;         // Tag name ("button", "div")

  // Recommended
  url?: string;            // Page URL
  boundingBox?: {          // Element dimensions
    x: number;
    y: number;
    width: number;
    height: number;
  };

  // Context (varies by output format)
  reactComponents?: string;   // Component tree
  cssClasses?: string;
  computedStyles?: string;
  accessibility?: string;
  nearbyText?: string;
  selectedText?: string;      // If text was selected

  // Browser component fields
  isFixed?: boolean;       // Fixed-position element
  isMultiSelect?: boolean; // Created via drag selection
};`;

const realtimeEventsCode = `# Session-level: events for a single page
curl -N http://localhost:4747/sessions/:id/events

# Global: events across ALL sessions
curl -N http://localhost:4747/events

# Filtered by domain: events for pages on a specific domain
curl -N "http://localhost:4747/events?domain=localhost:3001"

# Reconnect after disconnect (replay missed events)
curl -N -H "Last-Event-ID: 42" http://localhost:4747/sessions/:id/events`;

const storageCode = `AGENTATION_STORE=memory npx agentation-mcp server`;

const programmaticUsageCode = `import { startHttpServer, startMcpServer } from 'agentation-mcp';

// Start HTTP server on port 4747
startHttpServer(4747);

// Start MCP server (connects via stdio)
await startMcpServer('http://localhost:4747');`;

const cellStyle: React.CSSProperties = {
  padding: "0.375rem 0",
  borderBottom: "1px solid rgba(0,0,0,0.06)",
};

const methodCellStyle: React.CSSProperties = {
  fontFamily: '"SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace',
  fontSize: "0.6875rem",
  width: "5rem",
  color: "rgba(0,0,0,0.4)",
};

const endpointCellStyle: React.CSSProperties = {
  fontFamily: '"SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace',
  fontSize: "0.6875rem",
};

const descCellStyle: React.CSSProperties = {
  textAlign: "right",
  color: "rgba(0,0,0,0.5)",
};

function ApiTable({
  title,
  rows,
}: {
  title: string;
  rows: [string, string, string][];
}) {
  return (
    <>
      <h3>{title}</h3>
      <table>
        <tbody>
          {rows.map(([method, endpoint, description], i) => {
            const isLast = i === rows.length - 1;
            const rowStyle = isLast
              ? { padding: "0.375rem 0" }
              : cellStyle;
            return (
              <tr key={i}>
                <td style={{ ...rowStyle, ...methodCellStyle }}>{method}</td>
                <td style={{ ...rowStyle, ...endpointCellStyle }}>{endpoint}</td>
                <td style={{ ...rowStyle, ...descCellStyle }}>{description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const propsData = [
  {
    name: "onAnnotationAdd",
    type: "(annotation: Annotation) => void",
    desc: "Called when an annotation is created",
  },
  {
    name: "onAnnotationDelete",
    type: "(annotation: Annotation) => void",
    desc: "Called when an annotation is deleted",
  },
  {
    name: "onAnnotationUpdate",
    type: "(annotation: Annotation) => void",
    desc: "Called when an annotation comment is edited",
  },
  {
    name: "onAnnotationsClear",
    type: "(annotations: Annotation[]) => void",
    desc: "Called when all annotations are cleared",
  },
  {
    name: "onCopy",
    type: "(markdown: string) => void",
    desc: "Callback with the markdown output when copy is clicked",
  },
  {
    name: "onSubmit",
    type: "(output: string, annotations: Annotation[]) => void",
    desc: 'Called when "Send Annotations" is clicked',
  },
  {
    name: "copyToClipboard",
    type: "boolean",
    defaultVal: "true",
    desc: "Set to false to prevent writing to clipboard (if handling via onCopy)",
  },
  {
    name: "endpoint",
    type: "string",
    desc: "MCP server URL for syncing annotations",
  },
  {
    name: "sessionId",
    type: "string",
    desc: "Pre-existing session ID to use",
  },
  {
    name: "onSessionCreated",
    type: "(sessionId: string) => void",
    desc: "Called when a new session is created",
  },
  {
    name: "webhookUrl",
    type: "string",
    desc: "Webhook URL to receive annotation events",
  },
];

const eventTypes = [
  { code: "annotation.created", desc: "New annotation added" },
  {
    code: "annotation.updated",
    desc: "Annotation modified (comment, status, etc.)",
  },
  { code: "annotation.deleted", desc: "Annotation removed" },
  { code: "session.created", desc: "New session started" },
  { code: "session.updated", desc: "Session updated" },
  { code: "session.closed", desc: "Session closed" },
  { code: "action.requested", desc: "Agent action requested" },
  { code: "thread.message", desc: "New message in annotation thread" },
];

export default function Api() {
  return (
      <main className="main-content">
      <style>{`
        .props-list {
          display: flex;
          flex-direction: column;
        }
        .prop-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.625rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .prop-item:last-child {
          border-bottom: none;
        }
        .prop-header {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .prop-name {
          font-size: 0.8125rem;
          font-family: "SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace;
          color: rgba(0, 0, 0, 0.8);
        }
        .prop-type {
          font-size: 0.75rem;
          font-family: "SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace;
          color: rgba(0, 0, 0, 0.4);
        }
        .prop-default {
          font-size: 0.75rem;
          color: rgba(0, 0, 0, 0.4);
        }
        .prop-desc {
          font-size: 0.8125rem;
          font-weight: 450;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.55);
          margin: 0;
        }
      `}</style>

      <article className="article">
        <header>
          <h1>API</h1>
          <p className="tagline">Programmatic access for developers</p>
        </header>

        <section>
          <h2 id="overview">Overview</h2>
          <p>
            Agentation exposes callbacks that let you integrate annotations into
            your own workflows — send to a backend, pipe to terminal, trigger
            automations, or build custom AI integrations.
          </p>
          <ul>
            <li>Sync annotations to a database or backend service</li>
            <li>Build analytics dashboards tracking feedback patterns</li>
            <li>
              Create custom AI integrations (MCP servers, agent tools)
            </li>
          </ul>
        </section>

        <section>
          <h2 id="props">Props</h2>
          <div className="props-list">
            {propsData.map((prop) => (
              <div className="prop-item" key={prop.name}>
                <div className="prop-header">
                  <span className="prop-name">{prop.name}</span>
                  <span className="prop-type">{prop.type}</span>
                  {prop.defaultVal && (
                    <span className="prop-default">
                      default: {prop.defaultVal}
                    </span>
                  )}
                </div>
                <p className="prop-desc">{prop.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 id="basic-usage">Basic usage</h2>
          <CodeBlock code={basicUsageCode} language="tsx" copyable />
        </section>

        <section>
          <h2 id="annotation-type">Annotation type</h2>
          <p>
            The <code>Annotation</code> object passed to callbacks.{" "}
            <a href="/schema">See Agentation Format</a> for the full schema.
          </p>
          <CodeBlock code={annotationTypeCode} language="typescript" copyable />
        </section>

        <section>
          <h2 id="http-api">HTTP API</h2>
          <p>
            The <code>agentation-mcp</code> server exposes a REST API for
            managing annotations and sessions.
          </p>

          <ApiTable
            title="Sessions"
            rows={[
              ["POST", "/sessions", "Create a new session"],
              ["GET", "/sessions", "List all sessions"],
              ["GET", "/sessions/:id", "Get session with annotations"],
            ]}
          />

          <ApiTable
            title="Annotations"
            rows={[
              ["POST", "/sessions/:id/annotations", "Add annotation"],
              ["GET", "/annotations/:id", "Get annotation"],
              ["PATCH", "/annotations/:id", "Update annotation"],
              ["DELETE", "/annotations/:id", "Delete annotation"],
              ["POST", "/annotations/:id/thread", "Add thread message"],
              ["GET", "/sessions/:id/pending", "Get pending annotations"],
              ["GET", "/pending", "Get all pending annotations"],
            ]}
          />

          <ApiTable
            title="Events (SSE)"
            rows={[
              ["GET", "/sessions/:id/events", "Session event stream"],
              [
                "GET",
                "/events",
                "Global event stream (optionally filter with ?domain=...)",
              ],
            ]}
          />

          <ApiTable
            title="Health"
            rows={[
              ["GET", "/health", "Health check"],
              ["GET", "/status", "Server status"],
            ]}
          />
        </section>

        <section>
          <h2 id="real-time-events">Real-Time Events</h2>
          <p>Subscribe to real-time events via Server-Sent Events:</p>
          <CodeBlock code={realtimeEventsCode} language="bash" copyable />

          <h3>Event types</h3>
          <ul>
            {eventTypes.map((evt) => (
              <li key={evt.code}>
                <code>{evt.code}</code> — {evt.desc}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 id="environment-variables">Environment Variables</h2>
          <table>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>AGENTATION_STORE</code>
                </td>
                <td>Storage backend (memory or sqlite)</td>
                <td>sqlite</td>
              </tr>
              <tr>
                <td>
                  <code>AGENTATION_EVENT_RETENTION_DAYS</code>
                </td>
                <td>Days to keep events</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 id="storage">Storage</h2>
          <p>
            By default, annotations are stored in SQLite at{" "}
            <code>~/.agentation/store.db</code>. For testing, use in-memory
            storage:
          </p>
          <CodeBlock code={storageCode} language="bash" copyable />
        </section>

        <section>
          <h2 id="programmatic-usage">Programmatic Usage</h2>
          <CodeBlock
            code={programmaticUsageCode}
            language="typescript"
            copyable
          />
          <p>
            <a href="/mcp">See MCP Server</a> for AI agent integration and
            available tools.
          </p>
        </section>
      </article>

      <PageFooter />
      </main>
  );
}
