import Image from "next/image";

import styles from "./lifeplanner.module.css";
import Navbar from "../ui/navbar/navbar";
import ContentWrapper from "../ui/content-wrapper/content-wrapper";
import Footer from "../ui/footer/footer";
import LabelPairs from "../ui/label-pairs/label-pairs";
import PageWrapper from "../ui/page-wrapper/page-wrapper";

export default function Lifeplanner() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <ContentWrapper wide withBackground projectHero>
          <div className={styles.heroWrapper}>
            <Image
              src="/lifeplanner-hero.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner app desktop version"
              priority
            />
            <Image
              src="/lifeplanner-hero-mobile.jpg"
              width={323}
              height={964}
              className={styles.shadow}
              alt="Lifeplanner app mobile version"
              priority
            />
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <h1>Lifeplanner</h1>
          <div className={styles.summary}>
            <div className={styles.textBlock}>
              <p>
                A digital safe for storing documents and information about your
                most valued belongings in one place, such as property documents,
                your will, information about your valuables like art or
                jewellery.
              </p>
              <h2>My contribution</h2>
              <p>
                I started on this project as a frontend developer and moved to
                the UX side after some team restructuring. As a UX/UI designer I
                was mainly working on workflows and high fidelity mockups.
              </p>
            </div>
            <LabelPairs
              role="UX/UI designer, Frontend developer"
              tools="Figma, Jira"
              length="~ 1 year"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1>Problem</h1>
          <p>
            Not having your documents organised in a secure centralised way may
            lead to issues, especially in cases where the unexpected might
            happen:
          </p>
          <p>
            <b>Natural disasters.</b> Having only physical copies of your
            documents can lead to problems in case of fire or flooding.
          </p>
          <p>
            <b>Accidents and health.</b> In the unfortunate event of an accident
            or sickness, family members might need to access your documents or
            important information.
          </p>
          <p>
            <b>Missing important documents.</b> Many people tend to postpone or
            avoid tasks related to unpleasant topics, such as preparing a will
            or a living trust.
          </p>
          <h1>Solution</h1>
          <p>
            A secure place - digital safe - for your documents and information
            that is easily accessible and sharable with your closest people.
          </p>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <div className={styles.solutionwrapper}>
            <div>
              <h1>Automating</h1>
              <p>
                Organising documents is not a fun task for most people, so our
                first priority was to automate as much of the process as
                possible so that the users won’t have to enter information
                manually.
              </p>
              <p>
                We presented an option to retrieve information automatically
                from the property and vehicle registers.
              </p>
            </div>
            <Image
              src="/lifeplanner-hero.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Image of Lifeplanner property page"
            />
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <div className={styles.solutionwrapper}>
            <Image
              src="/lifeplanner-share-form.jpg"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Image of Lifeplanner sharing form"
            />
            <div className={styles.orderMinusOne}>
              <h1>Sharing</h1>
              <p>
                The ability to share information was an important functionality
                that we paid a lot of attention to.
              </p>
              <p>
                We added options for users to share their information on
                different levels - they could share the whole safe, a specific
                section or only certain files.
              </p>
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper withBackground>
          <div className={styles.solutionwrapper}>
            <div>
              <h1>Encouragement</h1>
              <p>
                <b>Tips.</b> New users were greeted with tips helping them find
                a starting point as well as explaining in what situations having
                certain information filled out might be useful.
              </p>
              <p>
                <b>Articles.</b> We added some articles for more complicated
                topics such as where to start when you are thinking about making
                a will or in what cases it might be useful to have your assets
                documented.
              </p>
            </div>
            <Image
              src="/lifeplanner-tips-2.png"
              width={1440}
              height={964}
              className={styles.shadow}
              alt="Image of Lifeplanner tips"
            />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </PageWrapper>
  );
}
