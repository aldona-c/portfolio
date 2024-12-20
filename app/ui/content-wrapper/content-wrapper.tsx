import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./content-wrapper.module.css";

interface MyProps {
  children?: ReactNode;
  row?: boolean;
  wide?: boolean;
  withBackground?: boolean;
  projectHero?: boolean;
  id?: string;
}

export default function ContentWrapper({
  children,
  row,
  wide,
  withBackground,
  projectHero,
  id,
}: MyProps) {
  return (
    <div
      id={id}
      className={clsx(
        styles.wrapper,
        withBackground && styles.background,
        projectHero && styles.projectHero
      )}
    >
      <div
        className={clsx(
          styles.inner,
          row && styles.innerRow,
          wide ? styles.wide : styles.narrow
        )}
      >
        {children}
      </div>
    </div>
  );
}
