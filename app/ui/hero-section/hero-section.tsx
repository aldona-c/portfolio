import Image from "next/image";

import styles from "./hero-section.module.css";
import ContentWrapper from "../content-wrapper/content-wrapper";

export default function HeroSection() {
  return (
    <ContentWrapper row wide withBackground>
      <p className={styles.text}>
        Hi there, I’m Aldona, a{" "}
        <span className={styles.textEmphasised}>UX/UI designer</span> with
        frontend development experience
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src={"/hero-img.svg"}
          width={409}
          height={433}
          alt="Illustration of a person sitting by a computer"
          priority
        />
      </div>
    </ContentWrapper>
  );
}
