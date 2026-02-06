"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./HeroDemo.module.css";

type CursorType = "pointer" | "crosshair" | "ibeam";

interface CursorPosition {
  x: number;
  y: number;
  type: CursorType;
}

export default function HeroDemo() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    x: 0,
    y: 0,
    type: "pointer",
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragBox, setDragBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [showAreaOutline, setShowAreaOutline] = useState(false);
  const [toolbarExpanded, setToolbarExpanded] = useState(false);
  const [toolbarHovered, setToolbarHovered] = useState(false);
  const [toolbarClicking, setToolbarClicking] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [showMarker1, setShowMarker1] = useState(false);
  const [showMarker2, setShowMarker2] = useState(false);
  const [showMarker3, setShowMarker3] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [browserFaded, setBrowserFaded] = useState(false);
  const [sidebarIconSelected, setSidebarIconSelected] = useState(false);
  const [metricSelected, setMetricSelected] = useState(false);
  const [buttonHighlight, setButtonHighlight] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setCursorPos({ x: 280, y: 240, type: "pointer" });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setToolbarHovered(true);
      await new Promise((resolve) => setTimeout(resolve, 200));

      setToolbarClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setToolbarClicking(false);
      setToolbarHovered(false);
      setToolbarExpanded(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      setCursorPos({ x: 50, y: 80, type: "pointer" });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setButtonHighlight(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setButtonHighlight(false);

      setCursorPos({ x: 50, y: 120, type: "pointer" });
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSidebarIconSelected(true);
      setShowMarker1(true);
      setShowPopup(true);
      setPopupPos({ x: 50, y: 100 });
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setShowPopup(false);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setCursorPos({ x: 30, y: 180, type: "crosshair" });
      await new Promise((resolve) => setTimeout(resolve, 400));

      setIsDragging(true);
      setDragBox({ x: 30, y: 180, width: 0, height: 0 });
      await new Promise((resolve) => setTimeout(resolve, 100));

      for (let i = 0; i <= 20; i++) {
        setDragBox({ x: 30, y: 180, width: i * 10, height: i * 4 });
        await new Promise((resolve) => setTimeout(resolve, 20));
      }

      setIsDragging(false);
      setDragBox(null);
      setShowAreaOutline(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setCursorPos({ x: 150, y: 200, type: "pointer" });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setMetricSelected(true);
      setShowMarker2(true);
      setShowPopup(true);
      setPopupPos({ x: 150, y: 180 });
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setShowPopup(false);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setCursorPos({ x: 280, y: 240, type: "pointer" });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setToolbarHovered(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      setToolbarClicking(true);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setToolbarClicking(false);
      setToolbarHovered(false);

      setBrowserFaded(true);
      setShowTerminal(true);
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setShowTerminal(false);
      setBrowserFaded(false);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setSidebarIconSelected(false);
      setMetricSelected(false);
      setShowAreaOutline(false);
      setShowMarker1(false);
      setShowMarker2(false);
      setShowMarker3(false);
      setToolbarExpanded(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      runAnimation();
    };

    runAnimation();
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.browser} ${browserFaded ? styles.faded : ""}`}>
        <div className={styles.browserBar}>
          <div className={`${styles.dot} ${styles.red}`} />
          <div className={`${styles.dot} ${styles.yellow}`} />
          <div className={`${styles.dot} ${styles.green}`} />
          <div className={styles.urlBar}>localhost:3000</div>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarLogo} />
            <div className={styles.sidebarIcons}>
              <div className={styles.sidebarIcon} />
              <div
                className={`${styles.sidebarIcon} ${styles.active} ${sidebarIconSelected ? styles.selected : ""}`}
              />
              <div className={styles.sidebarIcon} />
            </div>
            <div className={styles.sidebarBottom}>
              <div className={`${styles.sidebarIcon} ${styles.circle}`} />
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.logo} />
                <span className={styles.titleText}>Benji's Dashboard</span>
              </div>
              <div className={styles.button} />
            </div>

            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.metricLabel} />
                <div className={styles.metricValue} />
              </div>
              <div
                className={`${styles.metric} ${metricSelected ? styles.selected : ""}`}
              >
                <div className={styles.metricLabel} style={{ width: "55px" }} />
                <div className={`${styles.metricValue} ${styles.wide}`} />
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel} style={{ width: "38px" }} />
                <div className={styles.metricValue} style={{ width: "40px" }} />
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div className={styles.th} style={{ width: "60px" }} />
                <div className={styles.th} style={{ width: "45px" }} />
                <div className={styles.th} style={{ width: "40px" }} />
              </div>
              <div className={styles.tableRow}>
                <div className={styles.td} style={{ width: "70px" }} />
                <div className={styles.td} style={{ width: "50px" }} />
                <div className={styles.tdPill} />
              </div>
              <div className={styles.tableRow}>
                <div className={styles.td} style={{ width: "55px" }} />
                <div className={styles.td} style={{ width: "42px" }} />
                <div className={styles.tdPill} style={{ width: "42px" }} />
              </div>
              <div className={styles.tableRow}>
                <div className={styles.td} style={{ width: "62px" }} />
                <div className={styles.td} style={{ width: "48px" }} />
                <div className={styles.tdPill} style={{ width: "45px" }} />
              </div>
            </div>

            {buttonHighlight && (
              <motion.div
                className={styles.buttonHighlight}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  width: "55px",
                  height: "26px",
                }}
              />
            )}

            {showAreaOutline && (
              <motion.div
                className={styles.areaOutline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                style={{
                  left: "30px",
                  top: "180px",
                  width: "200px",
                  height: "80px",
                }}
              />
            )}
          </div>
        </div>

        {dragBox && (
          <div
            className={styles.dragBox}
            style={{
              left: `${dragBox.x}px`,
              top: `${dragBox.y}px`,
              width: `${dragBox.width}px`,
              height: `${dragBox.height}px`,
            }}
          />
        )}

        <motion.div
          className={styles.cursor}
          animate={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            transition: isDragging ? "none" : undefined,
          }}
        >
          <motion.div
            className={styles.cursorPointer}
            animate={{
              scale: cursorPos.type === "pointer" ? 1 : 0,
              opacity: cursorPos.type === "pointer" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M0.5 0.5L0.5 14.5L4.5 10.5L7 17L9 16L6.5 9.5L11.5 9L0.5 0.5Z"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          <motion.div
            className={styles.cursorCrosshair}
            animate={{
              scale: cursorPos.type === "crosshair" ? 1 : 0,
              opacity: cursorPos.type === "crosshair" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="6"
                stroke="#3b82f6"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="4"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
              <line
                x1="10"
                y1="16"
                x2="10"
                y2="20"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="10"
                x2="4"
                y2="10"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
              <line
                x1="16"
                y1="10"
                x2="20"
                y2="10"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          <motion.div
            className={styles.cursorIbeam}
            animate={{
              scale: cursorPos.type === "ibeam" ? 1 : 0,
              opacity: cursorPos.type === "ibeam" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path
                d="M1 0H11M6 0V18M1 18H11"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className={`${styles.toolbar} ${toolbarExpanded ? styles.expanded : ""} ${toolbarHovered ? styles.hovered : ""} ${toolbarClicking ? styles.clicking : ""}`}
          initial={false}
        >
          {!toolbarExpanded && (
            <div className={styles.toolbarIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {toolbarExpanded && (
            <div className={styles.toolbarButtons}>
              <button className={`${styles.toolbarBtn} ${styles.active}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.75 8L12 4.75L19.25 8L12 11.25L4.75 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button className={styles.toolbarBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4.75"
                    y="4.75"
                    width="14.5"
                    height="14.5"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <div className={styles.toolbarDivider} />
              <button className={styles.toolbarBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 12H16M12 8V16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className={styles.toolbarBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.75 8.75V19.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.75 8.75H19.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <button className={`${styles.toolbarBtn} ${styles.disabled}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M5 12L12 5M5 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </motion.div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              className={styles.popup}
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 4 }}
              transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                left: `${popupPos.x}%`,
                top: `${popupPos.y}px`,
              }}
            >
              <div className={styles.popupHeader}>Add note</div>
              <div className={styles.popupInput}>
                This icon should be more prominent
              </div>
              <div className={styles.popupActions}>
                <button className={`${styles.popupBtn} ${styles.cancel}`}>
                  Cancel
                </button>
                <button
                  className={`${styles.popupBtn} ${styles.submit} ${styles.green}`}
                >
                  Save
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMarker1 && (
            <motion.div
              className={`${styles.marker} ${styles.blue}`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ left: "62px", top: "134px" }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMarker2 && (
            <motion.div
              className={`${styles.marker} ${styles.green}`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ left: "150px", top: "180px" }}
            >
              ✓
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMarker3 && (
            <motion.div
              className={`${styles.marker} ${styles.orange}`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ left: "220px", top: "220px" }}
            >
              !
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            className={styles.terminal}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className={styles.terminalBar}>
              <div className={`${styles.terminalDot} ${styles.red}`} />
              <div className={`${styles.terminalDot} ${styles.yellow}`} />
              <div className={`${styles.terminalDot} ${styles.green}`} />
              <div className={styles.terminalTitle}>Claude Code</div>
            </div>
            <div className={styles.terminalContent}>
              <div className={styles.terminalWelcome}>
                <strong>Analyzing annotations...</strong>
              </div>
              {"\n"}
              Found 2 issues:
              {"\n"}
              1. Sidebar icon visibility (line 42)
              {"\n"}
              2. Metric card layout (line 89)
              {"\n\n"}
              <span style={{ color: "#22c55e" }}>✓</span> Fixed icon contrast
              {"\n"}
              <span style={{ color: "#22c55e" }}>✓</span> Updated card spacing
              {"\n\n"}
              <strong>Ready to commit changes.</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
