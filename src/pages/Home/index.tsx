import React from "react";
import BeePage from "../../components/BeePage";
import Section from "../../components/Section";
import { P, H4, H3 } from "../../components/Typography";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <BeePage>
      <Section className={styles.Header}>
        <div className={styles.LogoWrapper}></div>
        <div className={styles.Definitions}>
          <img
            src="/wordmark.png"
            alt="Poly Nation Logo"
            className={styles.Logo}
          />
          <div className={styles.Definition}>
            <div className={styles.Word}>
              <H3>poly-</H3>
              <H4>/ˈpälē/</H4>
            </div>
            <P>
              a combining form with the meanings “much, many” used in the
              formation of compound words: polyculture; polyhedron.
            </P>
          </div>
          <div className={styles.Definition}>
            <div className={styles.Word}>
              <H3>nation</H3>
              <H4>/ˈnāSH(ə)n/</H4>
            </div>
            <P>
              a large body of people united by common descent, history, culture,
              or language, inhabiting a particular country or territory.
            </P>
          </div>
        </div>
      </Section>
      <div className={styles.TwitchWrapper}>
        {/*@ts-ignore */}
        <iframe
          className={styles.Twitch}
          title="twitch-embed"
          src={`https://player.twitch.tv/?channel=a_mandala_&parent=${process.env.REACT_APP_URL}`}
        ></iframe>
      </div>
      <footer className={styles.Footer}>
        <a
          className={styles.ExternalLink}
          href="http://www.portad.ca"
          target="_blank"
          rel="noopener noreferrer"
        >{`Site made with ♡ by Amanda Haynes`}</a>
      </footer>
    </BeePage>
  );
};

export default Home;
