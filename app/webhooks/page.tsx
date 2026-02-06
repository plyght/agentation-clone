import SideNav from "../components/SideNav";
import CopyButton from "../components/CopyButton";

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

            <div style={{width:"100%",marginTop:"1.5rem",marginBottom:"1rem",padding:"24px",background:"#fafafa",borderRadius:"12px",border:"1px solid rgba(0,0,0,0.06)",boxSizing:"border-box",overflow:"hidden"}}>
              <div style={{position:"relative",width:"100%",maxWidth:"440px",margin:"0 auto"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0px"}}>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Browser</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Agentation</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Webhook</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Server</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
                    <div style={{padding:"8px 16px",background:"#fff",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",fontSize:"12px",fontWeight:600,color:"#1a1a1a",fontFamily:"system-ui, sans-serif"}}>Service</div>
                    <div style={{fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>Slack, GitHub...</div>
                  </div>
                </div>
                <svg width="100%" viewBox="0 0 440 272" style={{display:"block"}}>
                  <line x1="50" y1="10" x2="50" y2="262" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="220" y1="10" x2="220" y2="262" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <line x1="390" y1="10" x2="390" y2="262" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="1 1" />
                  <g>
                    <line x1="50" y1="32" x2="220" y2="32" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="215,28 220,32 215,36" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="135" y="25" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">annotation.add</text>
                  </g>
                  <g>
                    <line x1="220" y1="74" x2="390" y2="74" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="385,70 390,74 385,78" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="67" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">POST /slack</text>
                  </g>
                  <g>
                    <line x1="390" y1="116" x2="220" y2="116" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="225,112 220,116 225,120" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="109" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">200 OK</text>
                  </g>
                  <g>
                    <line x1="50" y1="158" x2="220" y2="158" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="215,154 220,158 215,162" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="135" y="151" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">submit</text>
                  </g>
                  <g>
                    <line x1="220" y1="200" x2="390" y2="200" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <polyline points="385,196 390,200 385,204" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="193" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">POST /github/issues</text>
                  </g>
                  <g>
                    <line x1="390" y1="242" x2="220" y2="242" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <polyline points="225,238 220,242 225,246" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="305" y="235" textAnchor="middle" fontSize="10" fontFamily="'SF Mono', ui-monospace, monospace" fill="rgba(0,0,0,0.45)">201 Created</text>
                  </g>
                </svg>
                <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"12px",fontSize:"10px",color:"rgba(0,0,0,0.4)",fontFamily:"system-ui, sans-serif"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" /></svg><span>request</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}><svg width="24" height="2"><line x1="0" y1="1" x2="24" y2="1" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="6 4" /></svg><span>response</span></div>
                </div>
              </div>
            </div>
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
