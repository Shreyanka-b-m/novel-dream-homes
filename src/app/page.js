// app/page.js
import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={`${styles.hero} container`}>
        <Image
          src="/images/hero-banner.png"
          alt="Modern house"
          fill
          // width={900}
          // height={400}
          priority
          className={styles.heroImage}
        />
        {/* <div className={styles.overlay}></div> */}
        <div className={styles.heroContent}>
          <h1>THE KEY TO YOUR FUTURE STARTS HERE</h1>
          <button className={styles.btn}>Finding Your Home</button>
        </div>
      </section>
    </main>
  );
}
