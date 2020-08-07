import React from "react";
import BeePage from "../../components/BeePage";
import { H1 } from "../../components/Typography";
import Section from "../../components/Section";
import styles from "./index.module.scss";

const About = () => {
  return (
    <BeePage>
      <Section>
        <div className={styles.Left}>
          <H1>What is Poly Nation?</H1>
        </div>
      </Section>
    </BeePage>
  );
};

export default About;
