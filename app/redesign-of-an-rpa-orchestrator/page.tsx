import Image from "next/image";

import styles from "./redesign.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";
import ListItem from "../ui/list-item/list-item";
import Caption from "../ui/caption/caption";

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
              team="2 designers, 2 stakeholders, development team"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Problem statement and goal</h1>
          <h2>Problem</h2>
          <p>
            Although the RPA tool delivers critical automation functionality,
            the UI was built without design oversight. As a result:
          </p>
          <ul>
            <ListItem>
              Visual styling clashes with the modern brand direction.
            </ListItem>
            <ListItem>
              Some of the features and actions are not grouped intuitively.
            </ListItem>
          </ul>
          <h2>Goal</h2>
          <p>Redesign the RPA web interface to:</p>
          <ul>
            <ListItem>
              Adopt a clean, brand-aligned visual system (fonts, colors,
              spacing) that feels contemporary.
            </ListItem>
            <ListItem>
              Reorganize the structure and menus into logical groups based on
              task flow.
            </ListItem>
          </ul>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Design audit</h1>
          <p>
            We started the work by performing a design audit. The goal was to
            assess visual consistency and alignment with design best practices
            accross the application, as well as revisit how the content is
            structured, and check for accessibility issues.
          </p>
          <h2>Visual style observations</h2>
          <ul>
            <ListItem>
              Dated colour palette no longer aligned with the brand
            </ListItem>
            <ListItem>
              Not sufficient text colour contrast on widgets and charts
            </ListItem>
            <ListItem>Font size of many of the elements was too small</ListItem>
          </ul>
          <h2>Structural and navigation issues</h2>
          <ul>
            <ListItem>User management split into several places</ListItem>
            <ListItem>
              Account management mixed with RPA related functionality
            </ListItem>
            <ListItem>
              Side menu too crowded - expanding menu items often evokes a
              scrollbar which could be avoided
            </ListItem>
          </ul>
          <figure>
            <Image
              src="/core-old.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Application before the redesign"
            />
            <Caption text="Application before the redesign" />
          </figure>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Working with colours</h1>
          <p>
            The new colour palette was provided by a third party design agency,
            however, it was designed with marketing in mind rather than UX/UI of
            the actual application. The main colours were very vibrant, which
            worked great for print and digital marketing, but not quite as well
            for an application with a lot of data. We were also missing some
            shades of gray.
          </p>
          <h2>Adjusting the colour palette</h2>
          <p>
            For most of the elements we tried to stick with the new branding as
            much as possible. We added some extra shades of gray and had to
            adjust the saturation of the accent colours a bit to work better for
            a data heavy application.
          </p>
          <h2>Finding the right chart colours</h2>
          <p>
            The most challenging part was to find the right colours for the
            charts and widgets. We had to display several different states, make
            them distinguishable enough, as well as comfortable to look at for
            extended periods of time. The same pallete also had to work both in
            dark and light modes.
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
                alt="Chart colors dark"
              />
              <Image
                src="/chart-colors-light.png"
                width={1024}
                height={460}
                className={styles.shadow}
                alt="Chart colors light"
              />
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Updating navigation</h1>
          <p>
            The navigation generally was not bad, however some functionalities
            were not grouped very well, e.g., user management was split into
            several places, and account management was mixed with the RPA
            related functionality. We ended up moving all the account and user
            related functionality to a top bar, leaving the side menu for RPA
            related things only.
          </p>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/core-dashboard-light.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Dashboard in light mode"
            />
            <Caption text="The new design with the updated top bar and side menu" />
          </figure>
          <h1>Accessibility issues</h1>
          <p>
            We wanted to address some accessibility issues that could be fixed
            with design changes. That included mainly increasing contrast of
            text where needed and updating some icon buttons by adding
            explanatory tooltips to them or just changing them to text buttons
            where possible.
          </p>
        </ContentWrapper>
        <ContentWrapper>
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
          <figure className={styles.sectionWrapper}>
            <Image
              src="/core-new-dark.png"
              width={1024}
              height={722}
              className={styles.shadow}
              alt="Application in dark mode"
            />
            <Caption text="Dashboard view in dark mode" />
          </figure>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/core-dashboard-light.png"
              width={1024}
              height={722}
              className={styles.shadow}
              alt="Application in light mode"
            />
            <Caption text="Dashboard view in light mode" />
          </figure>
          <figure>
            <Image
              src="/core-tables.png"
              width={1024}
              height={722}
              alt="Image of tables and a chart"
            />
            <Caption text="Some examples of other elements used in the application. In this case, mostly the colouring was changed without any bigger updates" />
          </figure>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
