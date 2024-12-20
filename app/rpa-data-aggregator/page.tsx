import Image from "next/image";

import styles from "./rpa-data-aggregator.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import InfoCards from "../ui/info-cards/info-cards";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";

export default function AboutMe() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <div className={styles.heroWrapper}>
            <Image
              src="/me-dashboard.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Image of a dashboard"
              priority
            />
            <Image
              src="/me-side-panel.png"
              width={323}
              height={964}
              className={styles.shadow}
              alt="Image of a sidebar form"
              priority
            />
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>RPA data aggregator</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                This was the second product developed by the company I worked
                for, following their main product—a RPA orchestrator. It was
                designed to supplement the core application by aggregating data
                from several instances of the RPA orchestrator and displaying it
                in a convenient way.
              </p>
              <h2>My contribution</h2>
              <p>
                I worked on the project from the very beginning until the
                finished MVP in a cross functional team following Agile
                methodology. My work included creating user flows, interactive
                prototypes, high fidelity mockups, usability testing and
                contributing to the design system.
              </p>
            </div>
            <LabelPairs
              role="UX/UI designer"
              tools="Figma, Miro, Jira"
              length="~ 2 years"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Discovery and planning</h1>
          <p>
            During the Discovery phase, I collaborated with stakeholders to
            understand the core problem we were trying to solve and identified
            the target audience for the product. I also spent some time getting
            to know their main product and RPA industry in general—I tried using
            some RPA applications myself, had meetings with people who are more
            experienced in the field.
          </p>
          <h2>Goals for the MVP</h2>
          <InfoCards />
          <h2>Limitations</h2>
          <p>
            <b>Application layout.</b> Because the product was going to show
            aggregated data from the core application, it was important to keep
            the two applications similar enough so that users wouldn’t have to
            do much relearning when switching from one application to the other.
            That meant that we couldn’t stray too much from the core application
            in terms of layout and some of the functionalities.
          </p>
          <p>
            <b>Material UI.</b> The development team was going to be using
            Material UI (MUI) as a component library which meant there would be
            limitations for custom designs. Although MUI components are
            customisable, bigger changes can sometimes be quite costly to
            implement, and more difficult to maintain.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Environment setup flow</h1>
          <p>
            Environment setup flow was a core feature for the
            application—without it we wouldn’t be able to access data from the
            RPA orchestrator. We started by having discussions with the
            development team in order to figure out the technical part of the
            setup. After figuring out the technical side, we moved on to user
            flow mapping. We settled on a three step setup process:
          </p>
          <ul>
            <li>
              1. Adding an environment (RPA orchestrator instance) to the
              aggregator and obtaining a connection string.
            </li>
            <li>
              2. Logging into that environment and pasting the connection string
              from the aggregator. This action establishes a connection between
              the two applications.
            </li>
            <li>
              3. Logging back into the aggregator and authenticating to the
              environment after connection has been established.
            </li>
          </ul>
          <div className={styles.sectionWrapper}>
            <Image
              src={"/setup-flow.png"}
              width={1240}
              height={402}
              className={styles.shadow}
              alt="Environment setup flow"
            />
          </div>
          <h2>Challenges</h2>
          <p>
            After having mapped out the setup flow we noticed some potential
            pain points that might cause confusion in users:
          </p>
          <p>
            <b>Multiple steps in different locations.</b> In order to fully
            complete the setup, users had to log into one application, continue
            the process in a different application, and finally go back to the
            first one for final steps.{" "}
          </p>
          <p>
            <b>Steps may be performed by separate people.</b> Depending on the
            customers organisational structure, it was possible that the three
            environment setup steps were going to be performed by one person, or
            there could be cases where each step was going to be performed by
            separate people, possibly over a span of a few weeks.
          </p>
          <h2>Solution</h2>
          <p>
            We could not simplify the three step setup due to technical
            limitations, so instead our goal was to make the process as clear as
            possible using helper text, information boxes, careful wording.
          </p>
          <p>
            We also paid a lot of attention to the dashboard, making sure that
            if any of the widgets were not working properly, the users knew what
            the reason was and where to go to fix the issue. This was also
            important in the case where separate people would be setting up the
            environments.
          </p>
          <Image
            src="/warnings.png"
            width={2183}
            height={964}
            className={styles.shadow}
            alt="Image with widgets displaying warnings"
          />
        </ContentWrapper>
        <ContentWrapper>
          <h1>Usability testing</h1>
          <p>
            We did usability testing on more complicated features, one of which
            was the Event page. Its purpose was to give an overview of the
            states of various RPA processes, sessions, resources, etc.
            throughout multiple instances of the core application. There was a
            lot of information that needed to be displayed in a way that
            emphasised unwanted trends, eg., the amount of sessions freezing was
            higher than usual.{" "}
          </p>
          <p>
            We started usability testing early using interactive Figma
            prototypes. We tested with a group of 8 participants of varying
            experience with RPA and did a few iterations of the tests.{" "}
          </p>
          <h2>Usability test findings</h2>
          <p>
            <b>UI was generally intuitive and understandable.</b> All
            participants understood the purpose of the page and easily got their
            way around it apart from a couple of confusing places.
          </p>
          <p>
            <b>Filtering UI was not ideal.</b> In initial designs we had a few
            filtering options separated into different UI elements which caused
            confusion for several test participants. The time period slider was
            particularly unclear.
          </p>
          <p>
            <b>Navigation between tabs.</b> Clicking on some of the UI elements
            takes users to the “Event list” tab that contains additional
            information. For a few participants it was not clear how to get back
            to where they came from.
          </p>
          <p>
            We ended up updating the designs by simplifying the filtering
            section and removing the time period slider as well as addressing
            the navigation issue. We repeated the tests after the changes.
          </p>
          <Image
            src="/events.png"
            width={2183}
            height={964}
            className={styles.shadow}
            alt="Image of event page"
          />
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
