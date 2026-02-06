"use client";

import HeroDemo from "./components/Hero/HeroDemo";

export default function Home() {
  return (
    <main className="main-content">
      <div className="article">
        <header>
          <h1>
            <span className="sketchy-underline">Don't get left behind.</span>
          </h1>
          <p className="tagline">
            we build AI systems that replace manual work. we co-build AI companies with founders who bring the vision.
          </p>
          <div className="hero-ctas">
            <a href="#" className="btn-primary">
              Development Services →
            </a>
            <a href="#" className="btn-secondary">
              Equity Partnerships
            </a>
          </div>
        </header>

        <HeroDemo />

        <section id="how-it-works">
          <h2>How it works</h2>
          <p className="section-subtitle">Two ways in.</p>
          <div className="card-grid">
            <div className="card">
              <p className="card-number">01.</p>
              <h3 className="card-title">Development Services</h3>
              <p className="card-subtitle">
                You have a business. You need AI built.
              </p>
              <p className="card-body">
                We find the bottlenecks, design the systems, and ship in weeks. Custom AI, automations, and software for how your business actually runs. Flat fee. Working systems.
              </p>
              <a href="#" className="card-link">
                Get Started <span className="arrow">→</span>
              </a>
            </div>
            <div className="card">
              <p className="card-number">02.</p>
              <h3 className="card-title">Platform Partnerships</h3>
              <p className="card-subtitle">
                You have an idea. You need a technical partner.
              </p>
              <p className="card-body">
                We build the product, the infrastructure, the company. You bring domain expertise and distribution. We bring full-stack development. Shared risk. Shared upside.
              </p>
              <a href="#" className="card-link">
                Apply for Partnership <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="automate">
          <h2>Why automate?</h2>
          <p className="section-subtitle">
            Automate now. Or watch <span className="pen-underline">competitors</span> do it.
          </p>
          <p>
            AI is not the future. It is the present. Businesses running on spreadsheets and manual processes are losing ground every day.
          </p>
          <p>
            Most companies have budget but zero AI expertise. They know they need it. They don't know where to start.
          </p>
          <p>
            We find your bottlenecks, build systems that fix them, and make sure they work.
          </p>
          <div className="stats-row">
            <div className="stat-item">
              <p className="stat-value">47 hrs/week</p>
              <p className="stat-label">Manual processes</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">4.2 hours</p>
              <p className="stat-label">Lead response time</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">23%</p>
              <p className="stat-label">Data entry errors</p>
            </div>
          </div>
          <p className="efficiency-callout">
            4x efficiency improvement after automation
          </p>
        </section>

        <section id="partner">
          <h2>Why partner?</h2>
          <p className="section-subtitle">
            Dev shops are replaceable. <span className="sketchy-underline">Cofounders</span> aren't.
          </p>
          <p>
            You can hire developers anywhere. What you can't hire is someone who treats your company like their own. Who says no to bad ideas because they have skin in the game.
          </p>
          <p>
            We don't take every deal. We take the ones we'd bet four years of our lives on.
          </p>
          <table>
            <thead>
              <tr>
                <th>Traditional Option</th>
                <th>Their Approach</th>
                <th>Agent Integrator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contractors</td>
                <td>Build to spec</td>
                <td>Build what actually works</td>
              </tr>
              <tr>
                <td>Agencies</td>
                <td>Deliver and move on</td>
                <td>Stick around, iterate</td>
              </tr>
              <tr>
                <td>Cofounders</td>
                <td>N/A</td>
                <td>Skin in the game</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="results">
          <h2>Trusted by businesses doing the work</h2>
          <div className="case-studies">
            <div className="case-study">
              <div className="case-study-header">
                <p className="case-study-metric">$1.5M/mo in new policies</p>
              </div>
              <p className="case-study-quote">
                "Faster, cheaper, built for us."
              </p>
            </div>
            <div className="case-study">
              <div className="case-study-header">
                <p className="case-study-metric">7-figure brand portfolio</p>
              </div>
              <p className="case-study-quote">
                "Cut tens of thousands in staffing costs, move faster than bigger competitors."
              </p>
            </div>
            <div className="case-study">
              <div className="case-study-header">
                <p className="case-study-metric">Multi-project portfolio</p>
              </div>
              <p className="case-study-quote">
                "Leads answered at 2am on Sundays — impossible before."
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Get ahead or get left behind.</h2>
          <p>
            Need systems built? Book a dev call. Want a technical partner? Apply for partnership.
          </p>
          <p className="cta-email">
            <a href="mailto:team@agentintegrator.io">team@agentintegrator.io</a>
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">
              Development Services →
            </a>
            <a href="#" className="btn-secondary">
              Equity Partnerships →
            </a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2026 Agent Integrator</p>
        <p>team@agentintegrator.io</p>
      </footer>
    </main>
  );
}
