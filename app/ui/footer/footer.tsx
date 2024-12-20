import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <b>Let's connect</b>
        <div className={styles.links}>
          <a href="mailto:aldona.cepliejute@gmail.com" className={styles.link}>
            Email
          </a>
          <Link
            href="https://www.linkedin.com/in/aldona-cepliejute/"
            className={styles.link}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
