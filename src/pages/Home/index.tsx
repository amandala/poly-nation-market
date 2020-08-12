import React from "react";
import BeePage from "../../components/BeePage";
import Section from "../../components/Section";
import { P, H1, H3, H4 } from "../../components/Typography";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <BeePage>
      <Section className={styles.Header}>
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
          <div className={styles.Welcome}>
            <H1>Welcome to Poly Nation</H1>
            <P>
              a VibeHive Prodution in collaboration with Big Kitty Crew. We're
              bringing you an art and music livestream party featuring DJs and
              bands from Calgary, AB Canada, with remote crew feature takeovers
              from the UK every 2 hours, and a live graffiti mural jam.
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
      <Footer />
    </BeePage>
  );
};

export default Home;
