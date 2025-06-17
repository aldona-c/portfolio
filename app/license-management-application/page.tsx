import Image from "next/image";

import styles from "./license-management-application.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";
import ListItem from "../ui/list-item/list-item";

export default function Lifeplanner() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <Image
            src="/license-manager-shadow.png"
            width={1440}
            height={964}
            alt="License manager page"
            priority
          />
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>License management application</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                A web-based internal license management tool for a mid-sized
                tech company.
              </p>
              <h2>My contribution</h2>
              <p>
                I was brought in to support a redesign of the internal license
                management platform while working on a different product for the
                same company at the same time. We worked as a small team
                consisting of a project manager, one designer and two
                developers. I was responsible mainly for user flows and high
                fidelity mockups.
              </p>
            </div>
            <LabelPairs
              role="UX/UI designer"
              tools="Figma, Jira"
              length="~ 5 months"
              team="1 designer, PM, 2 developers"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Project overview</h1>
          <p>
            The company already had a license management tool developed, however
            it was not being used by the internal teams at the time. It needed
            some usability improvements, technical updates, and a visual
            refresh.
          </p>
          <p>
            This internal project was not a business priority, and I was
            expected to spend minimal time on it. The goal was to quickly create
            Figma mockups based on requirements from the product manager.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <div>
            <h1>Challenges</h1>
            <p>Key challenges included:</p>
            <ul>
              <ListItem>
                Working with pre-existing logic and flows that couldn’t be
                changed too much.
              </ListItem>
              <ListItem>
                Designing quickly with little to no discovery or research.
              </ListItem>
              <ListItem>
                Making sense of feature requests without access to real user
                feedback.
              </ListItem>
              <ListItem>
                Balancing this with my main design responsibilities on another
                product.
              </ListItem>
            </ul>
            <p>
              Even though I had limited time, I still wanted to dig deeper and
              understand the issues we were trying to solve, rather than just
              creating mockups and following specifications blindly. For every
              feature I tried to ask questions such as:
            </p>
            <ul>
              <ListItem>“What issue is this feature trying to solve?”</ListItem>
              <ListItem>“What task is the user trying to accomplish?”</ListItem>
              <ListItem>“Can this flow be simplified?”</ListItem>
            </ul>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Approach and process</h1>
          <p>
            Given the constraints, I focused on clarity, consistency, and speed.
          </p>
          <ul>
            <ListItem>
              <b>Organising my work.</b> I wanted to make sure that I could
              focus on the issues properly, so I dedicated specific days of the
              week to working on the licence management tool, discussing the
              scope with project managers beforehand.
            </ListItem>
            <ListItem>
              <b>Clarifying requirements.</b> I spent time with the PM to
              interpret the intent behind each request, identifying places where
              simplification was possible.
            </ListItem>
            <ListItem>
              <b>Designing for edge cases.</b> I made sure that any kind of
              exceptions or unexpected flows are accounted for.
            </ListItem>
            <ListItem>
              <b>Using known patterns.</b> I relied on established UX/UI
              conventions to speed up design and make onboarding easier for
              internal users.
            </ListItem>
          </ul>
          <h2>Design snapshot</h2>
          <p>
            I don’t have much visual material from this project, but I recreated
            one of the key screens to illustrate my approach. This screen
            displays essential information about license agreements and was
            central to internal users' daily workflows.
          </p>
          <p>
            My goal was to present critical information clearly without
            overwhelming the interface. To achieve this, I used collapsible
            panels to let users access detailed information on demand, reducing
            visual clutter while keeping key data available when needed. I also
            implemented color-coded status tags to make important details - such
            as license state or renewal urgency - immediately scannable. These
            small UI decisions helped bring structure and clarity to an
            otherwise dense set of data.
          </p>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/license-manager.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="License agreement page"
            />
          </figure>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Outcome and reflections</h1>
          <p>
            Although this wasn’t a high-visibility project, the redesign
            provided a cleaner, more consistent experience for internal teams.
            It also helped me grow personally. This project taught me to:
          </p>
          <ul>
            <ListItem>Manage priorities across multiple initiatives.</ListItem>
            <ListItem>
              Stay proactive and thoughtful even when the brief was minimal.
            </ListItem>
          </ul>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
