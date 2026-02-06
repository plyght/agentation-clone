"use client";

import { useState, useRef, useEffect, useId } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { motion, useAnimate } from "framer-motion";

function AnimatedCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const [scope, animate] = useAnimate();
  const id = useId();

  const forwardSeq: Parameters<typeof animate>[] = [
    ['[data-part="square-front"]', { y: [0, -4] }, { duration: 0.12, ease: "easeOut" } as any],
    ['[data-part="square-back"]', { x: [0, -4] }, { at: "<", duration: 0.12, ease: "easeOut" } as any],
    ['[data-part="square-front"], [data-part="square-back"]', { rx: [2, 7.25], width: [10.5, 14.5], height: [10.5, 14.5], rotate: [0, -45] }, { at: "<", duration: 0.12, ease: "easeOut" } as any],
    ['[data-part="check"]', { opacity: [0, 1], pathOffset: [1, 0] }, { at: "-0.03", duration: 0 } as any],
    ['[data-part="check"]', { pathLength: [0, 1] }, { duration: 0.1 } as any],
  ];

  const reverseSeq: Parameters<typeof animate>[] = [
    ['[data-part="check"]', { pathOffset: [0, 1] }, { duration: 0.1, ease: "easeOut" } as any],
    ['[data-part="check"]', { opacity: [1, 0], pathLength: [1, 0] }, { duration: 0 } as any],
    ['[data-part="square-front"], [data-part="square-back"]', { rx: [7.25, 2], width: [14.5, 10.5], height: [14.5, 10.5], rotate: [-45, 0] }, { at: "+0.03", duration: 0.12, ease: "easeOut" } as any],
    ['[data-part="square-front"]', { y: [-4, 0] }, { at: "<", duration: 0.12, ease: "easeOut" } as any],
    ['[data-part="square-back"]', { x: [-4, 0] }, { at: "<", duration: 0.12, ease: "easeOut" } as any],
  ];

  const isFirst = useRef(true);
  const isChecked = useRef(false);
  const fwdAnim = useRef<any>(null);
  const revAnim = useRef<any>(null);

  const runForward = async () => {
    if (fwdAnim.current || revAnim.current || isChecked.current) {
      if (revAnim.current) revAnim.current.speed = -1;
      else if (fwdAnim.current) fwdAnim.current.speed = 1;
      return;
    }
    const a = animate(forwardSeq as any);
    fwdAnim.current = a;
    await a;
    fwdAnim.current = null;
    if (a.speed === 1) isChecked.current = true;
  };

  const runReverse = async () => {
    if (fwdAnim.current) {
      fwdAnim.current.speed = -1;
      return;
    }
    if (isChecked.current && !revAnim.current) {
      const a = animate(reverseSeq as any);
      revAnim.current = a;
      await a;
      revAnim.current = null;
      if (a.speed === 1) isChecked.current = false;
    } else if (revAnim.current) {
      revAnim.current.speed = 1;
    }
  };

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (copied) runForward(); else runReverse();
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-button"
      title="Copy to clipboard"
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        padding: "0.375rem",
        background: "transparent",
        border: "none",
        borderRadius: "0.25rem",
        cursor: "pointer",
        color: "rgba(0,0,0,0.35)",
        transition: "color 0.15s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        ref={scope}
        style={{ overflow: "visible" }}
        width={20}
        height={20}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        <motion.rect
          data-part="square-front"
          x="4.75" y="8.75" width="10.5" height="10.5" rx="2"
          stroke="currentColor" strokeWidth="1.5"
        />
        <g mask={`url(#${id})`}>
          <motion.rect
            data-part="square-back"
            x="8.75" y="4.75" width="10.5" height="10.5" rx="2"
            stroke="currentColor" strokeWidth="1.5"
          />
        </g>
        <motion.path
          data-part="check"
          initial={{ pathLength: 0, opacity: 0 }}
          d="M9.25 12.25L11 14.25L15 10"
          stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <mask id={id} maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="#fff" />
          <motion.rect
            data-part="square-front"
            x="4.75" y="8.75" width="10.5" height="10.5" rx="2"
            fill="#000" stroke="#000" strokeWidth="1.5"
          />
        </mask>
      </svg>
    </button>
  );
}

export default function CodeBlock({
  code,
  language = "tsx",
  copyable = false,
}: {
  code: string;
  language?: string;
  copyable?: boolean;
}) {
  return (
    <div style={{ position: "relative" }}>
      <Highlight theme={themes.github} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="code-block" style={{ ...style, background: "transparent" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, j) => (
                  <span key={j} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      {copyable && <AnimatedCopyButton text={code.trim()} />}
    </div>
  );
}
