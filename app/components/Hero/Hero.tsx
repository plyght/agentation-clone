"use client";

import HeroDemo from "./HeroDemo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroDemo />
    </section>
  );
}
