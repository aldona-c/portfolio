import Image from "next/image";

import styles from "./card.module.css";

interface cardProps {
  title: string;
  description: string;
  icon: string;
}

export default function Card({ title, description, icon }: cardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image src={icon} width={120} height={120} alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
