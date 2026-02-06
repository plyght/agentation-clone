import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";
import WebhooksDiagram from "../components/diagrams/WebhooksDiagram";

export default function Webhooks() {
  return (
    <>
      <SideNav />
      <main className="main-content">
        <div className="article">
          <header>
            <h1>Webhooks</h1>
            <p className="tagline">Send annotation events to external services automatically</p>
          </header>

          <section>
            <h2>Overview</h2>
            <p>Webhooks enable integrations with external services like Slack, Discord, GitHub, or custom analytics platforms. When enabled, Agentation sends HTTP POST requests to your configured endpoint for every annotation event.</p>
            <p>Configure webhooks by setting the webhookUrl prop on the AgentationToolbar component.</p>

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

          <section>
            <h2>Events</h2>
            <p>Webhooks fire for the following events:</p>
            <ul>
              <li>annotation.add</li>
              <li>annotation.delete</li>
              <li>annotation.update</li>
              <li>annotations.clear</li>
              <li>submit</li>
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

          <section>
            <h2>Use Cases</h2>

            <h3>Slack Notifications</h3>
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

            <h3>GitHub Issue Creation</h3>
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

            <h3>Real-time Dashboard</h3>
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

          <section>
            <h2>Security Considerations</h2>
            <ul>
              <li>Use HTTPS</li>
              <li>Validate origin</li>
              <li>Rate limiting</li>
              <li>Sanitize content</li>
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
