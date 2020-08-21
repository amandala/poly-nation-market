import React from "react";
import BeePage from "../../components/BeePage";
import Section from "../../components/Section";
import { P, H1, H2, H4, H3 } from "../../components/Typography";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";
import TwitchChannel from "../../components/TwitchChannel";
import lineup from "./lineup.json";
import lineup2 from "./lineup2.json";

const Home = () => {
  return (
    <BeePage>
      <Section className={styles.Header}>
        <div className={styles.Definitions}>
          <H4 className={styles.Date}>August 22 & 23</H4>
          <img
            src="/pollination-logo.png"
            alt="Pollination Livestream Logo"
            className={styles.Logo}
          />
          <div className={styles.Welcome}>
            <H1 className={styles.Title}>Welcome to Pollination Livestream</H1>
            <H4 className={styles.Subtitle}>
              A Vibe Hive Productions event in collaboration with the Big Kitty
              Crew
            </H4>
            <P>
              What an amazing world with so many beeautiful flowers blooming in
              their natural habitat. The way to maximize the evolution of these
              beeautiful specimens is with cross pollination, and that is just
              what this PolliNation event is about. The sharing of sounds,
              visuals, ideas, and things we all collectively love.
            </P>
            <P>
              When rich data is passed around an ecosystem it makes every flower
              thrive and live it’s best life. That allows more people to enjoy
              those beeautiful flowers and maybe even some delicious fruit.
              PolliNation is a garden of the most hearty beings who just want to
              share their beeauty with anyone that enjoys the same things they
              do. So come hang out in our garden of beeauty, enjoy the fruits of
              lovely labour, and bee happy!
            </P>
          </div>
        </div>
      </Section>
      <div className={styles.TwitchWrapper}>
        <TwitchChannel channel="vibehiveproductions" />
        {/*@ts-ignore */}
        {/* <iframe
          className={styles.Twitch}
          title="twitch-embed"
          src={`https://player.twitch.tv/?channel=vibehiveproductions&parent=${process.env.REACT_APP_URL}`}
        ></iframe> */}
      </div>
      <Section className={styles.Padded}>
        <div className={styles.Schedule}>
          <H1 className={styles.ScheduleHeading}>
            Pollination Livestream Music Schedule
          </H1>
          <div className={styles.ScheduleDays}>
            <div className={styles.ScheduleDay}>
              <H2 className={styles.Day}>SATURDAY</H2>
              {lineup.map((row) => (
                <div>
                  {row.crew ? (
                    <H4 className={styles.CrewName}>{row.crew}</H4>
                  ) : null}
                  <H3>{row.artist}</H3>
                  <P className={styles.Time}>
                    {row.CDN} MST / {row.UK} BST
                  </P>
                </div>
              ))}
            </div>
            <div className={styles.ScheduleDay}>
              <H2 className={styles.Day}>SUNDAY</H2>
              {lineup2.map((row) => (
                <div>
                  {row.crew ? (
                    <H4 className={styles.CrewName}>{row.crew}</H4>
                  ) : null}
                  <H3>{row.artist}</H3>
                  <P className={styles.Time}>
                    {row.CDN} MST / {row.UK} BST
                  </P>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </BeePage>
  );
};

export default Home;
