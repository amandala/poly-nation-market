import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cx(styles.Section, className)}>{children}</div>;

export default Section;
