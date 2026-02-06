"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  role: "user" | "agent";
  content: string;
}

export default function AgentSyncDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [streamingId, setStreamingId] = useState<number | null>(null);
  const idCounterRef = useRef(0);

  useEffect(() => {
    const runAnimation = async () => {
      setMessages([]);
      setStreamingId(null);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const msg1: Message = {
        id: ++idCounterRef.current,
        role: "user",
        content: "What annotations do I have?",
      };
      setMessages([msg1]);
      setStreamingId(msg1.id);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStreamingId(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const msg2: Message = {
        id: ++idCounterRef.current,
        role: "agent",
        content:
          "Let me check... Found 3 annotations on /dashboard: 1. Button color too light (pending) 2. Sidebar icon misaligned (pending) 3. Footer text unclear (acknowledged)",
      };
      setMessages((prev) => [...prev, msg2]);
      setStreamingId(msg2.id);
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setStreamingId(null);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const msg3: Message = {
        id: ++idCounterRef.current,
        role: "user",
        content: "Resolve #1, the button color was fixed",
      };
      setMessages((prev) => [...prev, msg3]);
      setStreamingId(msg3.id);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStreamingId(null);

      await new Promise((resolve) => setTimeout(resolve, 800));

      const msg4: Message = {
        id: ++idCounterRef.current,
        role: "agent",
        content:
          "Resolved annotation #1 with note: Button color updated to meet contrast requirements.",
      };
      setMessages((prev) => [...prev, msg4]);
      setStreamingId(msg4.id);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStreamingId(null);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      runAnimation();
    };

    runAnimation();
  }, []);

  return (
    <div className="acd-container">
      <div className="acd-chat">
        <div className="acd-content-wrap">
          {messages.map((msg) => (
            <div key={msg.id} className="acd-message">
              <div
                className={`acd-label ${msg.role === "user" ? "acd-label-user" : "acd-label-agent"}`}
              >
                {msg.role === "user" ? "You" : "Claude"}
              </div>
              <div className="acd-content">
                <span
                  className={`acd-stream ${streamingId === msg.id ? "streaming" : ""}`}
                >
                  {msg.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
