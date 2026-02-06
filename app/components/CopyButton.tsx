"use client";

import { useState } from "react";

interface CopyButtonProps {
  text?: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let textToCopy = text;

    if (!textToCopy) {
      const button = e.currentTarget;
      const codeBlock = button.closest(".code-block");
      if (codeBlock) {
        const lines = codeBlock.querySelectorAll(".line");
        textToCopy = Array.from(lines)
          .map((line) => line.textContent)
          .join("\n");
      }
    }

    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <button
      className="copy-btn"
      title="Copy to clipboard"
      onClick={handleCopy}
    >
      <svg
        style={{ overflow: "visible" }}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4.75"
          y="8.75"
          width="10.5"
          height="10.5"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <g>
          <rect
            x="8.75"
            y="4.75"
            width="10.5"
            height="10.5"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
        <path
          d="M9.25 12.25L11 14.25L15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={copied ? 1 : 0}
        />
      </svg>
    </button>
  );
}
