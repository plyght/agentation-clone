"use client";

import HeroDemo from "./HeroDemo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.underline}>Point at bugs.</span>
          <br />
          Let AI <span className={styles.penUnderline}>fix them.</span>
        </h1>
        <p className={styles.tagline}>
          Agentation turns UI annotations into structured context that AI coding
          agents can understand and act on. Click any element, add a note, and
          paste the output into Claude Code, Cursor, or any AI tool.
        </p>
      </header>

      <HeroDemo />
    </section>
  );
}
