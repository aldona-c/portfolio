import Image from "next/image";

import styles from "./redesign.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";

export default function Redesign() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <Image
            src="/core-hero.png"
            width={1170}
            height={964}
            alt="Image of the RPA application"
            priority
          />
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Redesign of an RPA orchestrator</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                A redesign of a Robotic Process Automation (RPA) orchestrator
                which was already live and being used by customers. The new
                branding identity was created by a third party design agency
                while our product team was working on updating the application
                according to the new branding and also solving some existing
                usability issues.
              </p>
              <h2>My contribution</h2>
              <p>
                As a UX designer I worked on high fidelity mockups, interactive
                prototypes and contributed to the design system. I also had to
                tap into my frontend development experience and help out with
                the implementation part as we had a tight deadline and there was
                a frontend developer shortage on the team.
              </p>
            </div>
            <LabelPairs
              role="UX/UI designer"
              tools="Figma, Miro, Jira"
              length="~ 2 months"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Problem statement and goal</h1>
          <h2>Problem</h2>
          <p>
            The application was developed some years ago without the help of
            designers, which led to a few issues that we wanted to solve before
            next release. The deadline was tight so we had to prioritise and
            choose changes that would not impact the main functionality too
            much.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Planning and limitations</h1>
          <p>
            Because the deadline for the redesign release was tight and
            customers were already using the application, we needed to carefully
            plan which features were going to be updated. Any big functionality
            changes were going to be risky and needed time for usability
            testing. It was decided to focus more on the visual changes and
            small usability improvements for the initial redesign launch, and
            work on bigger functionality gradually after the launch.
          </p>
          <div className={styles.imgWrapper}>
            <h2>Before redesign</h2>
            <Image
              src="/core-old.png"
              width={1024}
              height={722}
              className={styles.imageMedium}
              alt="Image of the core application before the redesign"
            />
          </div>
          <div className={styles.imgWrapper}>
            <h2>After redesign</h2>
            <Image
              src="/core-preview-2.png"
              width={1024}
              height={722}
              className={styles.imageMedium}
              alt="Image of the core application after the redesign"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Working with chart colours</h1>
          <p>
            We used the branding colour palette for most UI elements, however we
            couldn’t do that with the dashboard charts and widgets as the new
            branding colours were very vibrant, which was great for marketing
            material, but didn’t work quite so well in a dashboard setting with
            lots of data. We had to find a palette for the charts that worked
            well with the new branding and was also easy to look at for extended
            periods of time. The palette also had to work both in light mode and
            dark.
          </p>
          <p>
            Finding the chart colours was a combination of colour theory and a
            lot of exploration and testing. We ended up with three main colour
            groups to indicate success, warning and a neutral one. Warning and
            neutral categories needed more than one colour shade to show
            different possible states.
          </p>
          <div className={styles.colourSection}>
            <div className={styles.colourPalette}>
              <div className={styles.colourPairWrapper}>
                Success
                <div className={styles.colours}>
                  <div className={styles.successCircle} />
                </div>
              </div>
              <div className={styles.colourPairWrapper}>
                Warning
                <div className={styles.colours}>
                  <div className={styles.warningCircle} />
                  <div className={styles.warningCircleLight} />
                </div>
              </div>
              <div className={styles.colourPairWrapper}>
                Neutral
                <div className={styles.colours}>
                  <div className={styles.neutralCircle} />
                  <div className={styles.neutralCircleLight} />
                </div>
              </div>
            </div>
            <div className={styles.chartColorWrapper}>
              <Image
                src="/chart-colors-dark.png"
                width={1024}
                height={460}
                className={styles.shadow}
                alt="Image of chart colors dark"
              />
              <Image
                src="/chart-colors-light.png"
                width={1024}
                height={460}
                className={styles.shadow}
                alt="Image of chart colors light"
              />
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Updating navigation</h1>
          <p>
            The navigation generally was not bad, however some functionalities
            were not grouped very well, e.g., user management was split into
            several places, and account management was mixed with the RPA
            related functionality. We ended up moving all the account and user
            related functionality to a top bar, leaving the side menu for RPA
            related things only.
          </p>
          <h1>Accessibility issues</h1>
          <p>
            We wanted to address some accessibility issues that could be fixed
            with design changes. That included mainly increasing contrast of
            text where needed and updating some icon buttons by adding
            explanatory tooltips to them or just changing them to text buttons
            where possible.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Takeaways and final design</h1>
          <p>
            Not being able to work on the company rebranding part together with
            the design agency presented challenges when redesigning the
            application. The branding material was geared more towards marketing
            and did not work as well for application design. We were missing
            fonts styles, the colour palette was insufficient. In the end we
            made it work, however some of the issues and extra work could have
            been avoided if the UX team was included earlier.
          </p>
          <Image
            src="/core-preview-2.png"
            width={1024}
            height={722}
            className={styles.imgWrapperSmallMargin}
            alt="Image of the application in dark and light mode"
          />
          <Image
            src="/core-tables.png"
            width={1024}
            height={722}
            alt="Image of tables and a chart"
          />
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
