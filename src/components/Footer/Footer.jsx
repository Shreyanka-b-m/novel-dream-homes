import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className={styles.footer}>
          {/* Left Section */}
          <div className={styles.logoSection}>
            <Image
              src="/images/ndh-logo.svg"
              alt="Novel Dream Homes Logo"
              width={320}
              height={140}
              className={styles.logo}
            />
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactItem}>
                <Image
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <a href="tel:+16067075050">+1 (606)- 707- 5050</a>
              </div>
              <div className={styles.contactItem}>
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={16}
                  height={16}
                />
                <a
                  href="https://maps.app.goo.gl/GF9MGSQjUiXVyS1W8"
                  target="_blank"
                >
                  11133 Shady trail #171 Dallas, TX 75229
                </a>
              </div>
              <div className={styles.contactItem}>
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                />
                <a href="mailto:info@noveldreamhomes.com">
                  info@noveldreamhomes.com
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className={styles.servicesSection}>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/home-buying">Home Buying</Link>
              </li>
              <li>
                <Link href="/adu-options">ADU Options</Link>
              </li>
              <li>
                <Link href="/concierge">Concierge Service</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className={styles.quickLinksSection}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/available-homes">Available Homes</Link>
              </li>
              <li>
                <Link href="/communities">Communities</Link>
              </li>
              <li>
                <Link href="/financing">Financing</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyrightsBar}>
          <p>
            &copy; 2025 Novel Dream Home, Inc.
            <Link href="/privacy"> &middot; Privacy </Link>
            <Link href="/terms">&middot; Terms </Link>
            <Link href="/sitemap">&middot; Sitemap </Link>
          </p>

          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/noveldreamhomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>

            <a
              href="https://twitter.com/noveldreamhomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </a>

            <a
              href="https://www.instagram.com/noveldreamhomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
