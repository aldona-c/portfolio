import styles from "./caption.module.css";

interface captionProps {
  text: string;
}

export default function Caption({ text }: captionProps) {
  return <figcaption className={styles.caption}>{text}</figcaption>;
}
