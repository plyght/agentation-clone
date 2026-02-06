"use client";

import { useState } from "react";

const faqData = [
  {
    title: "General",
    items: [
      {
        question: "How is this different from a dev shop?",
        answer:
          "Dev shops sell hours. We sell outcomes. One team from diagnosis to deployment. We don't just build what you ask for — we figure out what actually needs to be built, then ship it. Flat fee, working systems, no surprises.",
      },
      {
        question: "What does AI automation mean for my business?",
        answer:
          "It means replacing manual, repetitive processes with intelligent systems that work 24/7. Data entry, lead routing, client communications, reporting — if a human is doing it the same way every time, AI can probably do it faster and more accurately.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Flat fee for development services. We scope the project, agree on deliverables, and quote a fixed price. No hourly billing, no scope creep surprises. For partnerships, we work on an equity basis — shared risk, shared upside.",
      },
    ],
  },
  {
    title: "Development Services",
    items: [
      {
        question: "What kind of businesses do you work with?",
        answer:
          "Businesses running on spreadsheets and manual processes. Insurance agencies, e-commerce brands, real estate developers, professional services firms — anyone with budget but zero AI expertise who knows they need automation but doesn't know where to start.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Weeks, not months. We ship working systems fast because we've done this before. Most projects go from diagnosis to deployment in 4-8 weeks depending on complexity.",
      },
      {
        question: "What do you actually build?",
        answer:
          "Custom AI implementations, business process automations, and software tailored to how your business actually runs. CRMs, dashboards, AI agents, data pipelines — whatever solves the bottleneck.",
      },
    ],
  },
  {
    title: "Partnerships",
    items: [
      {
        question: "Why partner instead of hiring you?",
        answer:
          "You can hire developers anywhere. What you can't hire is someone who treats your company like their own. Who says no to bad ideas because they have skin in the game. A partnership means we're building this together — not billing you by the hour.",
      },
      {
        question: "What kind of founders do you partner with?",
        answer:
          "We look for domain expertise and distribution capability. You understand your industry better than anyone. You have access to customers. We bring the full-stack technical capability to turn that into a product and a company.",
      },
      {
        question: "Do you take every deal?",
        answer:
          "No. We're selective. We take the ones we'd bet four years of our lives on. If we don't believe in the idea or the founder, we'll say so — and probably point you to someone who's a better fit.",
      },
    ],
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <div className="faq-answer-inner">
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <>
      <style>{`
        .faq-category {
          margin-top: 0.5rem;
        }
        .faq-category + .faq-category {
          margin-top: 1.5rem;
        }
        .faq-category h2 {
          margin-bottom: 0.25rem;
        }
        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.625rem 0;
          font-size: 0.75rem;
          font-weight: 450;
          color: rgba(0, 0, 0, 0.55);
          text-align: left;
          cursor: pointer;
          transition: color 0.15s ease;
        }
        .faq-question:hover {
          color: rgba(0, 0, 0, 0.8);
        }
        .faq-icon {
          flex-shrink: 0;
          color: rgba(0, 0, 0, 0.3);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.15s ease;
        }
        .faq-icon.open {
          transform: rotate(180deg);
          color: rgba(0, 0, 0, 0.5);
        }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
        }
        .faq-answer-inner {
          overflow: hidden;
        }
        .faq-answer-inner p {
          padding-bottom: 1rem;
          font-size: 0.8125rem;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.55);
        }
        .faq-answer-inner p + p {
          padding-top: 0;
          margin-top: -0.5rem;
        }
        .faq-answer-inner code {
          font-family: "SF Mono", "SFMono-Regular", ui-monospace, Consolas, monospace;
          font-size: 0.75rem;
          background: rgba(0, 0, 0, 0.04);
          padding: 0.1rem 0.3rem;
          border-radius: 0.25rem;
          color: rgba(0, 0, 0, 0.65);
        }
        .faq-link {
          color: #2480ed;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .faq-link:hover {
          color: #74b1fd;
        }
      `}</style>
      <main className="main-content">
        <article className="article">
          <header>
            <h1>FAQ</h1>
            <p className="tagline">Questions? We have answers.</p>
          </header>
          {faqData.map((category, catIdx) => (
            <div className="faq-category" key={catIdx}>
              <h2>{category.title}</h2>
              {category.items.map((item, itemIdx) => {
                const id = `${catIdx}-${itemIdx}`;
                return (
                  <FaqItem
                    key={id}
                    item={item}
                    isOpen={openItem === id}
                    onToggle={() => toggle(id)}
                  />
                );
              })}
            </div>
          ))}
        </article>
        <footer
          className="footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>© 2026 Agent Integrator</p>
          <a href="mailto:team@agentintegrator.io">team@agentintegrator.io</a>
        </footer>
      </main>
    </>
  );
}
