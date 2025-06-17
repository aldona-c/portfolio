import Image from "next/image";

import styles from "./lifeplanner.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";
import Caption from "../ui/caption/caption";
import ListItem from "../ui/list-item/list-item";

export default function Lifeplanner() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <div className={styles.heroWrapper}>
            <Image
              src="/portfolio/lifeplanner-hero.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner app desktop version"
              priority
            />
            <Image
              src="/portfolio/lifeplanner-hero-mobile.jpg"
              width={323}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner app mobile version"
              priority
            />
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Digital safe</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                A web-based application designed to store and organize users’
                most valuable digital assets - from legal documents like wills
                and insurance papers to sentimental content like family photos.
                The goal was to create a secure, shareable platform that
                families could access in times of need.
              </p>
              <h2>My contribution</h2>
              <p>
                I joined the team initially as a frontend developer, and after a
                year transitioned into the role of UX/UI designer. Alongside
                another designer, I took over the entire design process,
                inheriting the product mid-way through development.
              </p>
            </div>
            <LabelPairs
              role="UX/UI designer, Frontend developer"
              tools="Figma, Jira"
              length="~ 1 year"
              team="2 designers, 2 stakeholders, development team"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Transitioning to the design role</h1>
          <p>
            When I transitioned to the design role, there was no active designer
            on the project anymore. My co-designer and I became fully
            responsible for all aspects of UX and UI - from auditing existing
            flows to introducing improvements and designing new features.
          </p>
          <p>
            Since much of the foundational research and decision-making had
            already been completed by previous designers, we began our work by
            reviewing existing designs and gathering information. There was not
            much documentation, so we had to take notes of existing components,
            colour palette and workflows ourselves in order to mainain
            consistency. With time, we documented the components in a Storybook.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <div>
            <h1>Simplifying data entry</h1>
            <p>
              One of the key usability challenges we identified was the high
              amount of manual input required from users when adding information
              about their assets. Users were expected to fill in long forms with
              detailed data about properties, vehicles, and other valuables - a
              process that was time-consuming and, in some cases, overwhelming.
            </p>
            <p>
              To reduce friction and improve the overall user experience, we
              explored ways to automate parts of this process by retrieving
              verified information from official sources. This included
              integrating with external databases such as the property registry
              and national car registry, allowing users to import accurate data
              with minimal effort. By minimizing manual work, we aimed to make
              the app more accessible and efficient, especially for users in
              emotionally challenging situations like planning for illness or
              loss.
            </p>
          </div>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/portfolio/lifeplanner-hero.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner property page"
            />
            <Caption text="A view of the property page. On the right side, you can see the option to retrieve data automatically." />
          </figure>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Driving user engagement</h1>
          <p>
            Another key challenge was encouraging users to actively engage with
            the app - not just during onboarding, but continuously over time.
            Since the platform revolved around preparing for sensitive and often
            emotionally heavy topics, many users needed gentle prompts and
            ongoing motivation to add their information and keep it updated.
          </p>
          <p>
            To support this, we introduced contextual tips throughout the
            interface that guided users toward relevant sections of the app. For
            example, a tip might say, “Here’s where you can organize your legal
            documents” or “Start by adding your home insurance details here.”
            These micro-guides helped reduce decision fatigue and gave users a
            sense of progress.
          </p>
          <p>
            In addition, we integrated educational content - short,
            article-style pieces that explained the importance of tasks like
            writing a will or keeping track of personal assets. By combining
            guidance with purpose-driven content, we aimed to make the
            experience more approachable and to encourage users to return
            regularly.
          </p>
          <figure className={styles.sectionWrapper}>
            <Image
              src="/portfolio/lifeplanner-tips-2.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner tips"
            />
            <Caption text="A home screen with tips displayed on the side." />
          </figure>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Sharing</h1>
          <p>
            Sharing was a core feature of the product, rooted in the idea that
            important information should be accessible to the right people -
            especially in emergencies. We designed a flexible sharing system
            that allowed users to choose exactly what to share and with whom.
            Users could grant access to their entire digital safe, specific
            sections (like legal documents or sentimental items), or even just a
            single file.
          </p>
          <p>
            To lower barriers and increase accessibility, recipients didn’t need
            a full app account - they could view shared content through a secure
            guest account. This made it easier for users to involve family
            members, caregivers, or legal contacts without requiring them to
            adopt the platform themselves. The design emphasized control,
            clarity, and peace of mind, ensuring that sensitive information
            could be shared thoughtfully and responsibly.
          </p>
          <Image
            src="/portfolio/lifeplanner-share-form.jpg"
            width={1440}
            height={964}
            className={styles.shadow}
            alt="Image of Lifeplanner sharing form"
          />
          <Caption text="An example of the sharing form. The design was in earlier exploration phases, which is why you see content in two different languages. Not everyone on the team understood Norwegian, so it was easier to create general content in English and translate afterwards." />
        </ContentWrapper>
        <ContentWrapper>
          <h1>Final thoughts and key takeaways</h1>
          <p>
            The digital safe was one of the first UX/UI design projects that I
            worked on. It gave me valuable experience and helped grow my
            confidence as a designer. Here are some key things this project has
            taught me:
          </p>
          <ul>
            <ListItem>
              The importance of documentation. Taking over the design work
              without having much direct contact with previous designers or a
              documentation made the transitional period less smooth.
            </ListItem>
            <ListItem>
              Working with stakeholders and how important it is to have a good
              design presentation, and clear explanations of the reasoning
              behing design decisions.
            </ListItem>
            <ListItem>
              Use of my development experience in design work. Both in
              communicating with the development team and creating a component
              library using Storybook.
            </ListItem>
          </ul>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
