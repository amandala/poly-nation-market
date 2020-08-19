import React from "react";
import cx from "classnames";
import BeePage from "../../components/BeePage";
import { H1, H2, H3, P } from "../../components/Typography";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";

const LiveArt = () => {
  return (
    <BeePage>
      <Section className={styles.Wrapper}>
        <div className={styles.Left}>
          <div className={styles.Intro}>
            <img
              className={styles.Bowness}
              src="/welovebowness.png"
              alt="We Love Bowness Logo"
            />
            <H1 className={styles.Buzz}>Graffiti Jam Info Hub</H1>
          </div>
          <div>
            <P>Hello, tallented friends!</P>
            <P>
              It's time for another graffiti jam hosted by Lone 😽 I've teamed
              up with the crew at Vibe Hive Productions for tunes, and we've got
              massive support from the community once again. This time we're
              right on main street Bowness and we've got street side and alley
              walls to play with.
            </P>
            <img
              className={styles.Gif}
              src="/excellent.gif"
              alt="We Love Bowness Logo"
            />
            <H2>Timeline</H2>
            <div className={styles.TimelineEvent}>
              <P>SAT August 22 10am - 8pm </P>
              <P className={cx(styles.Bold, styles.Event)}> GRAFF JAM</P>
            </div>
            <div className={styles.TimelineEvent}>
              <P>SAT August 22 10pm - 3am</P>
              <P className={cx(styles.Bold, styles.Event)}>
                {" "}
                POLLINATION AFTER PARTY
              </P>
            </div>
            <div className={styles.TimelineEvent}>
              <P>SUN August 23 10am -8pm </P>
              <P className={cx(styles.Bold, styles.Event)}> GRAFF JAM</P>
            </div>
            <H2>There's just a few important notes</H2>
            <ol className={styles.List}>
              <li className={styles.ListItem}>
                <P>
                  This is a public, outdoor event so obviously no blatant use of
                  drugs or alcohol. We've got an after party planned for
                  Saturday night at the Meta Space downtown for you to let
                  loose. Just don't let too loose, it's gonne be hot af on
                  Sunday 🥵
                </P>
              </li>
              <li className={styles.ListItem}>
                <P>
                  We are painting various buildings on one block Bowness Road.
                  The space has been donated to us by the busninesses, but there
                  is mixed enthusiasm from the community. We need to be very
                  intentional about creating a welcoming legal regulated exhibit
                  for the entire community to enjoy, so it doesn't get buffed
                  over right away.{" "}
                  <span className={styles.Bold}>
                    So, the art absolutely can not contain any gang
                    affiliations, swears words, derogatory terms, political
                    sentiments, crew beef, or images or phrases that could be
                    considered offensive to anyone ⚠️
                  </span>
                </P>
              </li>
              <li className={styles.ListItem}>
                <P>
                  There are plenty of opportunities to delight the business
                  owners with little shouts in your piece or themed characters.
                  Specifically we want to thank Bowness Arts, The Place
                  Restaurant, Bowness Community Association, and Carstar
                  Bowness. Come chat with me and let's figure out a way to say
                  thanks for the specific wall you're painting 🤗
                </P>
              </li>

              <li className={styles.ListItem}>
                <P>
                  We will be livestreaming the event via Twitch embedded on this
                  website,{" "}
                  <span className={styles.Bold}>
                    so any considerations you might need to take to protect your
                    identity are your responsibility 👻
                  </span>
                </P>
              </li>
              <li className={styles.ListItem}>
                <P>
                  There is some concern around replicating trademarked or
                  copywrited images so we have been asked to refrain from
                  painting any well known characters 💔
                </P>
              </li>
              <li className={styles.ListItem}>
                <P>
                  We get a discount on goods at Bow Cannabis over the course of
                  the weekend. Go support the local weed shop, man. Just tell
                  them you're with me 🤙
                </P>
              </li>
            </ol>
            <P>
              Stoked you can make it. Please HMU if you have any questions at
              all!
            </P>
            <P>Much love, Lone</P>
          </div>
        </div>
      </Section>
      <Footer />
    </BeePage>
  );
};

export default LiveArt;
