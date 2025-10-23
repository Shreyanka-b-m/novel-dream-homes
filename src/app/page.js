// app/page.js
import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className="container">
        <div className={styles.heroWrapper}>
          <Image
            src="/images/hero-banner.png"
            alt="Modern house exterior"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>
              THE KEY TO YOUR FUTURE STARTS HERE
            </h1>
            <button>Finding Your Home</button>
          </div>
        </div>
      </section>
    </main>
  );
}
