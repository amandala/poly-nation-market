import React from "react";

import styles from "./index.module.scss";

const BeePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Page}>
      <div className={styles.Wrapper}>{children}</div>
    </div>
  );
};

export default BeePage;
