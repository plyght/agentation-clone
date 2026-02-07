"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./HeroDemo.module.css";

export default function HeroDemo() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const runAnimation = async () => {
      setLines([]);
      setCurrentPhase(0);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setCurrentPhase(1);
      await typeCommand("$ agent diagnose --business");
      await new Promise((resolve) => setTimeout(resolve, 300));

      setCurrentPhase(2);
      await addLine("⠋ Scanning business operations...");
      await new Promise((resolve) => setTimeout(resolve, 800));
      await addLine("");
      await addLine("Found 3 bottlenecks:");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  1. Manual data entry        → 47 hrs/week wasted");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  2. Lead response time       → 4.2hr avg (losing deals)");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  3. Client reporting         → 23% error rate");
      await new Promise((resolve) => setTimeout(resolve, 600));
      await addLine("");
      await addLine("Recommendation: Custom AI system");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  ├─ Automate intake pipeline");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  ├─ Deploy response agent (< 2min SLA)");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("  └─ Build real-time dashboard");
      await new Promise((resolve) => setTimeout(resolve, 600));

      setCurrentPhase(3);
      await addLine("");
      await addLine("Projected impact: 4x efficiency");
      await new Promise((resolve) => setTimeout(resolve, 150));
      await addLine("Status: Ready to build ✓");
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCurrentPhase(4);
    };

    const typeCommand = async (command: string) => {
      const chars = command.split("");
      for (let i = 0; i <= chars.length; i++) {
        setLines([chars.slice(0, i).join("")]);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
    };

    const addLine = async (line: string) => {
      setLines((prev) => [...prev, line]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    };

    runAnimation();
  }, []);

  const renderLine = (line: string, index: number) => {
    if (index === 0 && currentPhase === 1) {
      return (
        <div key={index} className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>{" "}
          <span className={styles.terminalCommand}>{line.replace("$ ", "")}</span>
          <span className={styles.terminalCursor} />
        </div>
      );
    }

    if (index === 0 && currentPhase > 1) {
      return (
        <div key={index} className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>{" "}
          <span className={styles.terminalCommand}>{line.replace("$ ", "")}</span>
        </div>
      );
    }

    if (line.startsWith("⠋")) {
      return (
        <div key={index} className={styles.terminalLine}>
          <span style={{ color: "#3b82f6" }}>{line}</span>
        </div>
      );
    }

    if (line.startsWith("Found 3 bottlenecks:")) {
      return (
        <div key={index} className={styles.terminalLine}>
          Found <span style={{ color: "#dc2626" }}>3</span> bottlenecks:
        </div>
      );
    }

    if (line.includes("→")) {
      const parts = line.split("→");
      const rightPart = parts[1];
      const numberMatch = rightPart.match(/(\d+\.?\d*)/);
      
      return (
        <div key={index} className={styles.terminalLine}>
          {parts[0]}
          <span className={styles.terminalArrow}>→</span>
          {numberMatch ? (
            <>
              {rightPart.substring(0, numberMatch.index)}
              <span style={{ color: "#dc2626" }}>{numberMatch[0]}</span>
              {rightPart.substring((numberMatch.index || 0) + numberMatch[0].length)}
            </>
          ) : (
            rightPart
          )}
        </div>
      );
    }

    if (line.match(/^  [├└]/)) {
      return (
        <div key={index} className={styles.terminalLine}>
          <span className={styles.terminalTreeChar}>
            {line.substring(0, 4)}
          </span>
          {line.substring(4)}
        </div>
      );
    }

    if (line.includes("4x efficiency")) {
      return (
        <div key={index} className={styles.terminalLine}>
          Projected impact:{" "}
          <span style={{ color: "#dc2626", fontWeight: "bold" }}>
            4x
          </span>{" "}
          efficiency
        </div>
      );
    }

    if (line.includes("Ready to build")) {
      return (
        <div key={index} className={styles.terminalLine}>
          Status:{" "}
          <span className={styles.terminalBold}>
            Ready to build
          </span>{" "}
          <span style={{ color: "#16a34a" }}>✓</span>
        </div>
      );
    }

    return (
      <div key={index} className={styles.terminalLine}>
        {line}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.terminal}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className={styles.terminalBar}>
          <div className={`${styles.dot} ${styles.red}`} />
          <div className={`${styles.dot} ${styles.yellow}`} />
          <div className={`${styles.dot} ${styles.green}`} />
          <div className={styles.terminalTitle}>agent-integrator</div>
        </div>
        <div className={styles.terminalContent}>
          {lines.map((line, index) => renderLine(line, index))}
        </div>

      </motion.div>
    </div>
  );
}
