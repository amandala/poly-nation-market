import React from "react";
import BeePage from "../../components/BeePage";
import Section from "../../components/Section";
import { P, H3, H4 } from "../../components/Typography";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <BeePage>
      <Section className={styles.Header}>
        <div className={styles.LogoWrapper}></div>
        <div className={styles.Definitions}>
          <H4 className={styles.Date}>August 22 & 23</H4>
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
          <P className={styles.Welcome}>
            Welcome to Poly Nation, a VibeHive Prodution in collaboration with
            Wolf Pack Creative. We're bringing you an art and music livestream
            party Featuring a graffiti mural jam, and DJs and bands from
            Calgary, AB Canada, and remote stream feature takeovers from the UK
            every 2 hours.
          </P>
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
