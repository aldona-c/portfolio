import styles from "./label-pairs.module.css";

interface pairProps {
  role: string;
  tools: string;
  length: string;
}

export default function LabelPairs({ role, tools, length }: pairProps) {
  return (
    <div>
      <div className={styles.pair}>
        <label className={styles.label}>My role</label>
        <div>{role}</div>
      </div>
      <div className={styles.pair}>
        <label className={styles.label}>Tools used</label>
        <div>{tools}</div>
      </div>
      <div className={styles.pair}>
        <label className={styles.label}>Project length</label>
        <div>{length}</div>
      </div>
    </div>
  );
}
