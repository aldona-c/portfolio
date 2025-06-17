import styles from "./list-item.module.css";
import clsx from "clsx";

interface listItemProps {
  ordered?: boolean;
  children: React.ReactNode;
}

export default function ListItem({ children, ordered }: listItemProps) {
  return (
    <li className={clsx(styles.listItem, ordered && styles.ordered)}>
      {children}
    </li>
  );
}
