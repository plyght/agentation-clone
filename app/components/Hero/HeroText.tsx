"use client";

import { useState } from "react";
import styles from "./HeroText.module.css";
import BunnyLogo from "../BunnyLogo";

export default function HeroText() {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("bun add agentation");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="bunny-slide-container">
        <a tabIndex={-1} href="/" style={{ display: "flex", cursor: "default", pointerEvents: "none" }}>
          <BunnyLogo />
        </a>
      </div>

      <div
        className={styles.copyButton}
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCopy();
          }
        }}
      >
        <span
          className={`${styles.tooltip} ${showTooltip && !copied ? styles.visible : ""}`}
        >
          Copy install command
        </span>

        <span className={`${styles.copyIcon} ${copied ? styles.hidden : ""}`}>
          <img
            src="/assets/icon-copy-24.svg"
            alt="Copy"
            width="24"
            height="24"
          />
        </span>

        <span className={`${styles.checkIcon} ${copied ? styles.visible : ""}`}>
          <img
            src="/assets/icon-check-24.svg"
            alt="Copied"
            width="24"
            height="24"
          />
        </span>

        <span>bun add agentation</span>
      </div>

      <h1 className={styles.title}>
        <span className="sketchy-underline">Point at bugs.</span>
        <br />
        Let AI <span className="pen-underline">fix them.</span>
      </h1>

      <p className="tagline">
        Agentation turns UI annotations into structured context that AI coding
        agents can understand and act on. Click any element, add a note, and
        paste the output into Claude Code, Cursor, or any AI tool.
      </p>
    </>
  );
}
