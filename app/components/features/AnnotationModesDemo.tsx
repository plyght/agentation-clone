"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "text-selection" | "element-click" | "multi-select" | "area-selection" | "animation-pause";

const tabs = [
  { key: "text-selection" as TabKey, label: "Text" },
  { key: "element-click" as TabKey, label: "Elements" },
  { key: "multi-select" as TabKey, label: "Multi-Select" },
  { key: "area-selection" as TabKey, label: "Area" },
  { key: "animation-pause" as TabKey, label: "Animation" },
];

const captions: Record<TabKey, string> = {
  "text-selection": "Select text to annotate typos, content issues, or copy changes.\nThe quoted text is included in the output.",
  "element-click": "Click any element to add feedback.\nAgentation identifies it by class name, ID, or semantic content.",
  "multi-select": "Hold `⌘`+`⇧` and click elements individually, or drag to select multiple at once.\nAll selected elements are included in a single annotation.",
  "area-selection": "Drag to select any region, even empty space.\nUseful for layout feedback or indicating where something should go.",
  "animation-pause": "Freeze CSS animations to annotate specific states.\nClick pause in the toolbar to stop all animations.",
};

export default function AnnotationModesDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>("text-selection");
  const [animationKey, setAnimationKey] = useState(0);

  const handleTabClick = (key: TabKey) => {
    setActiveTab(key);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="fd-container">
      <div className="fd-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`fd-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="fd-demo">
        <AnimatePresence mode="wait">
          {activeTab === "text-selection" && <TextDemo key={`text-${animationKey}`} />}
          {activeTab === "element-click" && <ElementsDemo key={`elements-${animationKey}`} />}
          {activeTab === "multi-select" && <MultiSelectDemo key={`multi-${animationKey}`} />}
          {activeTab === "area-selection" && <AreaDemo key={`area-${animationKey}`} />}
          {activeTab === "animation-pause" && <AnimationDemo key={`animation-${animationKey}`} />}
        </AnimatePresence>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "rgba(0,0,0,0.5)", whiteSpace: "pre-line", lineHeight: 1.3 }}>
        {captions[activeTab]}
      </p>
    </div>
  );
}

function TextDemo() {
  const [cursorPos, setCursorPos] = useState({ left: 300, top: 180 });
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (cancelled) return;

      setCursorPos({ left: 50, top: 56 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (cancelled) return;

      setHighlightVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (cancelled) return;

      setMarkerVisible(true);
      setPopupVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 400));
      if (cancelled) return;

      const text = "Fix typo";
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return;
        setInputText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 80));
      }

      await new Promise((resolve) => setTimeout(resolve, 1200));
      if (cancelled) return;

      setPopupVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (cancelled) return;

      setHighlightVisible(false);
      setMarkerVisible(false);
      setInputText("");
      setCursorPos({ left: 300, top: 180 });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!cancelled) runAnimation();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      className="demo-window text-demo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="demo-browser-bar">
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-url">localhost:3000/blog</div>
      </div>
      <div className="demo-content">
        <p className="demo-quote">
          &quot;Simple can be harder than complex: You have to work hard to get your thinking clean to make it <span>simpl</span>. But it&apos;s worth it in the end because once you get there, you can move mountains.&quot;
        </p>
        <p className="demo-quote-author">— Steve Jobs</p>

        {highlightVisible && (
          <motion.div
            className="tsd-highlight"
            style={{ left: "50px", top: "56px", width: "34px", height: "16px" }}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "34px" }}
            transition={{ duration: 0.3 }}
          />
        )}

        <AnimatePresence>
          {markerVisible && (
            <motion.div
              className="demo-marker"
              style={{ top: "58px", left: "96px" }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {popupVisible && (
            <motion.div
              className="demo-popup"
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="demo-popup-header">&quot;simpl&quot;</div>
              <div className="demo-popup-input">{inputText}<span style={{ opacity: 0.4 }}>|</span></div>
              <div className="demo-popup-actions">
                <div className="demo-popup-btn cancel">Cancel</div>
                <div className="demo-popup-btn submit">Add</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="demo-cursor"
          animate={{ left: cursorPos.left, top: cursorPos.top }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M3 1H7M3 15H7M5 1V15" stroke="#000" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>

        <Toolbar />
      </div>
    </motion.div>
  );
}

function ElementsDemo() {
  const [cursorPos, setCursorPos] = useState({ left: 300, top: 180 });
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (cancelled) return;

      setCursorPos({ left: 120, top: 120 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (cancelled) return;

      setHighlightVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (cancelled) return;

      setMarkerVisible(true);
      setPopupVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (cancelled) return;

      setPopupVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (cancelled) return;

      setHighlightVisible(false);
      setMarkerVisible(false);
      setCursorPos({ left: 300, top: 180 });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!cancelled) runAnimation();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      className="demo-window"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="demo-browser-bar">
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-url">localhost:3000/settings</div>
      </div>
      <div className="demo-content">
        <div style={{ padding: "10px", background: "#fff", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }} />
            <div style={{ flex: 1 }}>
              <div style={{ width: "80px", height: "10px", background: "rgba(0,0,0,0.1)", borderRadius: "4px", marginBottom: "6px" }} />
              <div style={{ width: "120px", height: "8px", background: "rgba(0,0,0,0.06)", borderRadius: "4px" }} />
            </div>
          </div>

          {highlightVisible && (
            <motion.div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                right: "10px",
                bottom: "10px",
                border: "2px solid #3b82f6",
                borderRadius: "8px",
                pointerEvents: "none",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>

        <AnimatePresence>
          {markerVisible && (
            <motion.div
              className="demo-marker"
              style={{ top: "50px", left: "120px" }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {popupVisible && (
            <motion.div
              className="demo-popup"
              style={{ top: "95px" }}
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="demo-popup-header">Profile card</div>
              <div className="demo-popup-input">Increase avatar size</div>
              <div className="demo-popup-actions">
                <div className="demo-popup-btn cancel">Cancel</div>
                <div className="demo-popup-btn submit">Add</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="demo-cursor"
          animate={{ left: cursorPos.left, top: cursorPos.top }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" strokeWidth="1" />
            <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" strokeWidth="1" />
          </svg>
        </motion.div>

        <Toolbar />
      </div>
    </motion.div>
  );
}

function MultiSelectDemo() {
  const [cursorPos, setCursorPos] = useState({ left: 300, top: 180 });
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectionBox, setSelectionBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [markersVisible, setMarkersVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (cancelled) return;

      setCursorPos({ left: 20, top: 40 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (cancelled) return;

      setSelectionBox({ x: 20, y: 40, width: 0, height: 0 });
      for (let i = 0; i <= 20; i++) {
        if (cancelled) return;
        setSelectionBox({ x: 20, y: 40, width: i * 10, height: i * 6 });
        setCursorPos({ left: 20 + i * 10, top: 40 + i * 6 });
        await new Promise((resolve) => setTimeout(resolve, 20));
      }

      await new Promise((resolve) => setTimeout(resolve, 200));
      if (cancelled) return;

      setSelectionBox(null);
      setSelectedItems([0, 1, 2]);
      setMarkersVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (cancelled) return;

      setSelectedItems([]);
      setMarkersVisible(false);
      setCursorPos({ left: 300, top: 180 });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!cancelled) runAnimation();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      className="demo-window"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="demo-browser-bar">
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-url">localhost:3000/admin</div>
      </div>
      <div className="demo-content">
        <div className="msd-items">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`msd-item ${selectedItems.includes(i) ? "selected" : ""}`}>
              <div className={`msd-checkbox ${selectedItems.includes(i) ? "checked" : ""}`}>
                {selectedItems.includes(i) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position: "relative", top: "-1px", left: "1px" }}>
                    <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span>Task item {i + 1}</span>
            </div>
          ))}
        </div>

        {selectionBox && (
          <div
            style={{
              position: "absolute",
              left: `${selectionBox.x}px`,
              top: `${selectionBox.y}px`,
              width: `${selectionBox.width}px`,
              height: `${selectionBox.height}px`,
              border: "2px dashed #22c55e",
              background: "rgba(34, 197, 94, 0.08)",
              pointerEvents: "none",
            }}
          />
        )}

        <AnimatePresence>
          {markersVisible && (
            <motion.div
              className="demo-marker green"
              style={{ top: "60px", left: "220px" }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="demo-cursor"
          animate={{ left: cursorPos.left, top: cursorPos.top }}
          transition={{ duration: 0.02 }}
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" strokeWidth="1" />
            <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" strokeWidth="1" />
          </svg>
        </motion.div>

        <Toolbar />
      </div>
    </motion.div>
  );
}

function AreaDemo() {
  const [cursorPos, setCursorPos] = useState({ left: 300, top: 180 });
  const [areaVisible, setAreaVisible] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (cancelled) return;

      setCursorPos({ left: 30, top: 80 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (cancelled) return;

      setAreaVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (cancelled) return;

      setMarkerVisible(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (cancelled) return;

      setAreaVisible(false);
      setMarkerVisible(false);
      setCursorPos({ left: 300, top: 180 });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!cancelled) runAnimation();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      className="demo-window"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="demo-browser-bar">
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-url">localhost:3000/dashboard</div>
      </div>
      <div className="demo-content">
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <div style={{ flex: 1, height: "60px", background: "rgba(0,0,0,0.04)", borderRadius: "8px" }} />
          <div style={{ flex: 1, height: "60px", background: "rgba(0,0,0,0.04)", borderRadius: "8px" }} />
          <div style={{ flex: 1, height: "60px", background: "rgba(0,0,0,0.04)", borderRadius: "8px" }} />
        </div>

        {areaVisible && (
          <motion.div
            style={{
              position: "absolute",
              left: "30px",
              top: "80px",
              width: "180px",
              height: "70px",
              border: "2px dashed #22c55e",
              background: "rgba(34, 197, 94, 0.08)",
              borderRadius: "4px",
              pointerEvents: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        <AnimatePresence>
          {markerVisible && (
            <motion.div
              className="demo-marker green"
              style={{ top: "115px", left: "220px" }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="demo-cursor"
          animate={{ left: cursorPos.left, top: cursorPos.top }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <line x1="8.5" y1="0" x2="8.5" y2="17" stroke="black" strokeWidth="1" />
            <line x1="0" y1="8.5" x2="17" y2="8.5" stroke="black" strokeWidth="1" />
          </svg>
        </motion.div>

        <Toolbar />
      </div>
    </motion.div>
  );
}

function AnimationDemo() {
  const [cursorPos, setCursorPos] = useState({ left: 300, top: 180 });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const runAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (cancelled) return;

      setCursorPos({ left: 280, top: 260 });
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (cancelled) return;

      setPaused(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (cancelled) return;

      setPaused(false);
      setCursorPos({ left: 300, top: 180 });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!cancelled) runAnimation();
    };

    runAnimation();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      className="demo-window"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="demo-browser-bar">
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-dot" />
        <div className="demo-url">localhost:3000</div>
      </div>
      <div className="demo-content">
        <div style={{ marginTop: "40px" }}>
          <div style={{ width: "100%", height: "4px", background: "rgba(0,0,0,0.06)", borderRadius: "2px", overflow: "hidden" }}>
            <motion.div
              style={{
                height: "100%",
                width: "30%",
                background: "linear-gradient(90deg, #3b82f6, #7b9fff)",
                borderRadius: "2px",
              }}
              animate={paused ? {} : { x: ["0%", "233%", "0%"] }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <motion.div
          className="demo-cursor"
          animate={{ left: cursorPos.left, top: cursorPos.top }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M0.5 0.5L0.5 14.5L4.5 10.5L7 17L9 16L6.5 9.5L11.5 9L0.5 0.5Z" fill="white" stroke="black" strokeWidth="1" />
          </svg>
        </motion.div>

        <Toolbar paused={paused} />
      </div>
    </motion.div>
  );
}

function Toolbar({ paused = false }: { paused?: boolean }) {
  return (
    <div className="demo-toolbar">
      <div className="demo-toolbar-buttons">
        <div className={`demo-toolbar-btn ${paused ? "active" : ""}`} style={{ opacity: paused ? 1 : 0.35 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8 6L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 18L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="demo-toolbar-btn" style={{ opacity: 0.35 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="demo-toolbar-btn" style={{ opacity: 0.35 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="demo-toolbar-btn" style={{ opacity: 0.35 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10 11.5L10.125 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 11.5L13.87 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 7.5V6.25C9 5.42157 9.67157 4.75 10.5 4.75H13.5C14.3284 4.75 15 5.42157 15 6.25V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 7.75H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.75 7.75L7.11691 16.189C7.16369 17.2649 7.18708 17.8028 7.41136 18.2118C7.60875 18.5717 7.91211 18.8621 8.28026 19.0437C8.69854 19.25 9.23699 19.25 10.3139 19.25H13.6861C14.763 19.25 15.3015 19.25 15.7197 19.0437C16.0879 18.8621 16.3912 18.5717 16.5886 18.2118C16.8129 17.8028 16.8363 17.2649 16.8831 16.189L17.25 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="demo-toolbar-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="demo-toolbar-divider" />
        <div className="demo-toolbar-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M16.25 16.25L7.75 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.75 16.25L16.25 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
