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
          <H3 className={styles.Date}>August 22 & 23</H3>
          <img
            src="/pollination-logo.png"
            alt="Pollination Livestream Logo"
            className={styles.Logo}
          />
          <div className={styles.Welcome}>
            <H1>Welcome to Pollination Livestream</H1>
            <P>
              A VibeHive Produtions event in collaboration with the Big Kitty
              Crew. We're bringing you an art and music livestream party
              featuring live music from Calgary, AB Canada, with remote feature
              takeovers from the UK every 2 hours, and a two day live graffiti
              mural jam hosted by Lone.
            </P>
          </div>
        </div>
      </Section>
      <div className={styles.TwitchWrapper}>
        {/*@ts-ignore */}
        <iframe
          className={styles.Twitch}
          title="twitch-embed"
          src={`https://player.twitch.tv/?channel=vibehiveproductions&parent=${process.env.REACT_APP_URL}`}
        ></iframe>
      </div>
      <Footer />
    </BeePage>
  );
};

export default Home;
