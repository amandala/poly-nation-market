import React from "react";

import styles from "./index.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <a
      className={styles.ExternalLink}
      href="http://www.portad.ca"
      target="_blank"
      rel="noopener noreferrer"
    >{`Site made with ♡ by Amanda`}</a>
  </footer>
);

export default Footer;
