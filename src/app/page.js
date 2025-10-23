// app/page.js
import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";
import "./globals.css";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div>
      {/********* Hero Section Starts *********/}
      <main className="container">
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
            <h1>THE KEY TO YOUR FUTURE STARTS HERE</h1>
            <button>Finding Your Home</button>
          </div>
        </div>
      </main>
      {/********* Hero Section Ends *********/}

      {/********* Subscribe to Newsletter Section Starts *********/}
      <section className={`container ${styles.newsletterSection}`}>
        <div className={styles.newsletterFlexItem}>
          <h2>subscribe to our NEwsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Posuere ornare quis morbi
            consectetur et. Interdum lectus in massa turpis.
          </p>
        </div>

        <div className={styles.newsletterFlexItem}>
          <ContactForm />
        </div>
      </section>
      {/********* Subscribe to Newsletter Section Ends *********/}
    </div>
  );
}
