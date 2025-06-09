import Image from "next/image";

import styles from "./rpa-data-aggregator.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import InfoCards from "../ui/info-cards/info-cards";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";
import ListItem from "../ui/list-item/list-item";
import Caption from "../ui/caption/caption";

export default function AboutMe() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <div className={styles.heroWrapper}>
            <Image
              src="/portfolio/me-dashboard.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Dashboard"
              priority
            />
            <Image
              src="/portfolio/me-side-panel.png"
              width={323}
              height={964}
              className={styles.shadow}
              alt="Sidebar form"
              priority
            />
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>RPA data aggregator</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                A web application designed to retrieve data from multiple
                sources and display the aggregated results in a dashboard.
              </p>
              <h2>My contribution</h2>
              <p>
                I worked on the project from the very beginning until the
                finished MVP in a cross-functional team following Agile
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
          <h1>Project overview</h1>
          <p>
            This was the second product developed by the company I worked for,
            following their main product - a RPA orchestrator. It was designed
            to supplement their core application by aggregating data from
            several instances of the RPA orchestrator and displaying it in a
            convenient way.
          </p>
          <p>
            The purpose of the application was to give bigger customers, that
            already had several instances of the RPA orchestrator installed, a
            way to monitor and have an overview of all the processes and events
            without having to log into each instance of the RPA orchestrator
            separately.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Research</h1>
          <h2>Methods:</h2>
          <p>
            <b>Stakeholder interviews.</b> There was no possibility to talk to
            users directly, however we had a few people on the team with a lot
            of RPA experience and knowledge. I set up some meetings with these
            people.
          </p>
          <p>
            <b>Industry & Competitive Research.</b> Even though competitors did
            not offer the exact same solution we were building, there were still
            a lot of RPA related products out there. At this stage, my plan was
            to learn as much as possible about the RPA industry in general -
            watch some tutorials, try out some RPA applications myself, read
            articles.
          </p>
          <p>
            <b>Familiarising with the RPA Orchestrator (the main product).</b> I
            spent some time getting to know the client’s main product - the RPA
            Orchestrator. I took some notes of what worked well, and what could
            be improved.
          </p>
          <h2>Insights:</h2>
          <ul>
            <ListItem>
              The key functionalities for the ME were going to be the dashboard
              and the event page.
            </ListItem>
            <ListItem>
              The users were most likely going to be tech savvy and familiar
              with RPA terminology.
            </ListItem>
            <ListItem>
              The users prefer to see a lot of information on the screen at
              once.
            </ListItem>
            <ListItem>
              The general layout of the aggregator should resemble the main
              application - it should be easy for the users to switch from one
              application to the other.
            </ListItem>
            <ListItem>
              The aggregator should have all the same widgets and charts as the
              main application.
            </ListItem>
          </ul>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Project scope</h1>
          <p>Here are the main features that were planned for the MVP:</p>
          <InfoCards />
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Design process and outcome</h1>
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
          <h2>Layout</h2>
          <p>
            The layout we used was pretty typical for applications containing
            dashboards:
          </p>
          <ul>
            <ListItem>A side menu for content related navigation.</ListItem>
            <ListItem>A top bar for profile and application settings.</ListItem>
            <ListItem>
              The side menu can be collapsed to maximise space for main content.
            </ListItem>
            <ListItem>
              8px scaling factor was used to keep the spacing between the
              elements consistent.
            </ListItem>
            <ListItem>All widgets and charts easily resizable.</ListItem>
            <ListItem>The dashboard can be divided into sections.</ListItem>
            <ListItem>
              Actions are handled via a side panel in order to not lose context.
            </ListItem>
          </ul>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/me-dashboard.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Dashboard"
              priority
            />
            <Caption text="Dashboard view." />
          </figure>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/side-panel-open.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Dashboard with a side panel open"
              priority
            />
            <Caption text="A side panle displaying a form to add a new widget to the dashboard." />
          </figure>
          <h2>Environment setup flow</h2>
          <p>
            Environment setup flow was a core feature for the application -
            without it we wouldn’t be able to access data from the RPA
            orchestrator. We started by having discussions with the development
            team in order to figure out the technical part of the setup. After
            figuring out the technical side, we moved on to user flow mapping.
            We settled on a three step setup process:
          </p>
          <ol>
            <ListItem ordered>
              1. Adding an environment (RPA orchestrator instance) to the
              aggregator and obtaining a connection string.
            </ListItem>
            <ListItem ordered>
              2. Logging into that environment and pasting the connection string
              from the aggregator. This action establishes a connection between
              the two applications.
            </ListItem>
            <ListItem ordered>
              3. Logging back into the aggregator and authenticating to the
              environment after connection has been established.
            </ListItem>
          </ol>
          <figure className={styles.sectionWrapper}>
            <Image
              src={"/portfolio/setup-flow.png"}
              width={1240}
              height={402}
              className={styles.shadow}
              alt="Environment setup flow"
            />
            <Caption text="A flowchart of the environment setup." />
          </figure>
          <h3>Challenges</h3>
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
          <h3>Solution</h3>
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
            src="/portfolio/warnings.png"
          <figure>
            <Image
              width={2183}
              height={964}
              className={styles.shadow}
              alt="Widgets displaying warnings"
            />
            <Caption text="An example of a system that has not been set up fully. The warning messages indicate that there are issues with environment connections." />
          </figure>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Event page and usability testing</h1>
          <p>
            We did usability testing on more complicated features, one of which
            was the Event page. Its purpose was to give an overview of the
            states of various RPA processes, sessions, resources, etc.
            throughout multiple instances of the core application. There was a
            lot of information that needed to be displayed in a way that
            emphasised unwanted trends, eg., the amount of sessions freezing was
            higher than usual.{" "}
          </p>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/ME-events-pre-testing.png"
              width={2183}
              height={964}
              // className={styles.shadow}
              alt="Event page before testing"
            />
            <Caption text="One of the earlier event page design before testing." />
          </figure>
          <h2>Testing approach</h2>
          <ul>
            <ListItem>
              5-8 moderated sessions with different participants. Participants
              were internal company employees - developers (who were unfamiliar
              with this functionality or product), customer success
              representatives, and QA testers.
            </ListItem>
            <ListItem>A mix of in-person and remote sessions.</ListItem>
            <ListItem>
              We tested nearly finished designs to identify usability issues.
            </ListItem>
            <ListItem>We used clickable Figma prototypes.</ListItem>
          </ul>
          <h2>Test findings</h2>
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
            src="/portfolio/events.png"
          <figure>
            <Image
              width={2183}
              height={964}
              className={styles.shadow}
              alt="Event page after testing"
            />
            <Caption text="Updated event page design after testing and deeper discussions." />
          </figure>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Conclusion and final thoughts</h1>
          <p>
            The RPA data aggregator was an interesting and challenging product
            to work on, and a great opportunity to learn and grow. Here are some
            key things this project has taught me:
          </p>
          <ul>
            <ListItem>
              Systemic design thinking. The aggregator was one of three products
              the client developed, which meant that any time I made a design
              decision, I had to consider how it would affect the other two
              products in terms of consistency.
            </ListItem>
            <ListItem>Design system maintenance and development.</ListItem>
            <ListItem>Working with limitations</ListItem>
            <ListItem>
              Quick adaptation. There was a rebrandingalong the way as well as
              some unplanned features.
            </ListItem>
          </ul>
          <p>Things I would have done differently:</p>
          <ul>
            <ListItem>Tested more often and on more features.</ListItem>
            <ListItem>Promoted the design system more.</ListItem>
          </ul>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
