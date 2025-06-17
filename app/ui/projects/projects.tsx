import Link from "next/link";
import Image from "next/image";

import styles from "./projects.module.css";

const projects = [
  {
    title: "RPA data aggregator",
    description:
      "A web application that displays aggregated data from several instances of an RPA orchestrator.",
    img: "/portfolio/me-preview.png",
    role: "UX/UI Designer",
    industry: "Robotic Process Automation",
    length: "2 years",
    href: "/rpa-data-aggregator",
    alt: "Image of charts",
  },
  {
    title: "Redesign of an RPA orchestrator",
    description:
      "A web application that specializes in (RPA) orchestration, helping organizations automate and streamline their business processes.",
    img: "/portfolio/core-preview.png",
    role: "UX/UI Designer",
    industry: "Robotic Process Automation",
    length: "2 months",
    href: "/redesign-of-an-rpa-orchestrator",
    alt: "Image of an application",
  },
  {
    title: "Digital safe",
    description:
      "A web application designed to store and organize users’ most valuable digital assets.",
    img: "/portfolio/lifeplanner-preview.png",
    role: "UX/UI Designer, Frontend Developer",
    industry: "Personal organization",
    length: "1.5 years",
    href: "/lifeplanner",
    alt: "Image of an application desktop and mobile view",
  },
  {
    title: "License management application",
    description:
      "A web-based internal license management tool for a mid-sized tech company.",
    img: "/portfolio/license-manager-preview.png",
    role: "UX/UI Designer",
    industry: "Internal tooling",
    length: "5 months",
    href: "/license-management-application",
    alt: "License agreement page",
  },
];

export default function Projects() {
  return (
    <>
      {projects.map((project) => {
        return (
          <section key={project.title} className={styles.section}>
            <Link
              href={project.href}
              className={styles.imageLink}
              aria-label="Read case study"
            >
              <div className={styles.imageBox}>
                <Image
                  src={project.img}
                  width={702}
                  height={408}
                  alt={project.alt}
                />
              </div>
            </Link>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <dl className={styles.descriptionList}>
                <div className={styles.pairGroup}>
                  <dt>
                    <b>Role:&nbsp;</b>
                  </dt>
                  <dd>{project.role}</dd>
                </div>
                <div className={styles.pairGroup}>
                  <dt>
                    <b>Industry:&nbsp;</b>
                  </dt>
                  <dd>{project.industry}</dd>
                </div>
                <div className={styles.pairGroup}>
                  <dt>
                    <b>Project legth:&nbsp;</b>
                  </dt>
                  <dd>{project.length}</dd>
                </div>
              </dl>
              <Link className={styles.link} href={project.href}>
                Read case study
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
}
