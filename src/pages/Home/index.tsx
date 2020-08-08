import React from "react";
import Twitch from "../../components/Twitch";
import BeePage from "../../components/BeePage";
import { H1, H2 } from "../../components/Typography";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <BeePage>
      <div className={styles.MainWrapper}>
        <img
          className={styles.Vibe}
          src="/vibehive-logo.png"
          alt="Vibe Hive Logo"
        />
        <H2>The vibe is alive</H2>
        <H1 className={styles.HeadingTemp}>COMING SOON!</H1>
      </div>
      <div className={styles.TwitchWrapper}>
        {/*@ts-ignore */}
        <iframe
          className={styles.Twitch}
          title="twitch-embed"
          src={`https://player.twitch.tv/?channel=a_mandala_&parent=${process.env.REACT_APP_URL}`}
          height="720"
          width="100%"
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
