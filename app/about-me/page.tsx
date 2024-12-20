import Image from "next/image";

import styles from "./about-me.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import PageWrapper from "../ui/page-wrapper/page-wrapper";

export default function AboutMe() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper withBackground>
          <h1>About me</h1>
          <div className={styles.introductionWrapper}>
            <div className={styles.introductionText}>
              <p>
                Hello, my name is Aldona, and I started my career in the IT
                industry as a frontend developer almost ten years ago. I
                especially enjoyed working on the visual side of frontend
                development, such as creating reusable components, writing CSS,
                as well as problem solving, which eventually led me to change my
                career path to UX/UI design.
              </p>
              <p>
                As a designer I am used to working on cross-functional teams,
                mostly according to Agile methodology. I collaborate closely
                with other designers, the development team and stakeholders.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/about-me.png"
                width={292}
                height={292}
                className={styles.img}
                alt="Icon of a closing code bracket"
              />
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Skillset</h1>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/brush.svg"
                  width={120}
                  height={120}
                  alt="Icon of a brush"
                />
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.title}>Design</div>
                <div className={styles.descriptionItem}>Wireframing</div>
                <div className={styles.descriptionItem}>Prototyping</div>
                <div className={styles.descriptionItem}>Design systems</div>
                <div className={styles.descriptionItem}>Usability testing</div>
                <div className={styles.descriptionItem}>Figma</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/code.svg"
                  width={120}
                  height={120}
                  alt="Icon of a closing code bracket"
                />
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.title}>Development</div>
                <div className={styles.descriptionItem}>React</div>
                <div className={styles.descriptionItem}>Typescript</div>
                <div className={styles.descriptionItem}>CSS/SCSS</div>
                <div className={styles.descriptionItem}>JavaScript</div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
