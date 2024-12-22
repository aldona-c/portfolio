import styles from "./info-cards.module.css";
import Card from "../card/card";

const cards = [
  {
    title: "Environment setup flow",
    description:
      "A way to connect to multiple instances of the RPA orchestrator in order to retrieve data.",
    icon: "/portfolio/cog.svg",
  },
  {
    title: "Dashboard",
    description:
      "Dashboard and its management system - widget creation, filtering, edit mode.",
    icon: "/portfolio/chart.svg",
  },
  {
    title: "Event page",
    description:
      "A page that provides insight into the state of RPA processes, sessions, resources.",
    icon: "/portfolio/warning.svg",
  },
  {
    title: "Fresh design according to rebranding",
    description: "A design according to the recent rebranding material.",
    icon: "/portfolio/brush.svg",
  },
  {
    title: "User management system",
    description:
      "User and user group management including different levels of access.",
    icon: "/portfolio/user.svg",
  },
  {
    title: "Filtering system",
    description: "Filtering throughout various sections of the application.",
    icon: "/portfolio/filter.svg",
  },
];

export default function InfoCards() {
  return (
    <div className={styles.wrapper}>
      {cards.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        );
      })}
    </div>
  );
}
