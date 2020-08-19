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
            <div className={styles.Section}>
              <H2>Location</H2>
              <P>
                The stage and street side wall are located at 6324 Bowness Road
                NW. That's where most of the action is. I've hidden my trailer
                in the alley. Come find me when you get here!
              </P>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10025.006254907736!2d-114.1793155767421!3d51.08536473687913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ec2abb60d99%3A0x17d1be8ff9c6576d!2s6324%20Bowness%20Rd%20NW%2C%20Calgary%2C%20AB%20T3B%200E5!5e0!3m2!1sen!2sca!4v1597819456293!5m2!1sen!2sca"
                width="100%"
                height="450"
                aria-hidden="false"
              ></iframe>
            </div>
            <div className={styles.Section}>
              <H2>Timeline</H2>
              <div className={styles.TimelineEvent}>
                <P className={styles.Date}>
                  SAT August 22 <span className={styles.Time}>10am - 8pm</span>
                </P>
                <P className={cx(styles.Bold, styles.Event)}> GRAFF JAM</P>
              </div>
              <div className={styles.TimelineEvent}>
                <P className={styles.Date}>
                  SAT August 22 <span className={styles.Time}>10pm - 3am</span>
                </P>
                <P className={cx(styles.Bold, styles.Event)}>
                  {" "}
                  POLLINATION AFTER PARTY
                </P>
              </div>
              <div className={styles.TimelineEvent}>
                <P className={styles.Date}>
                  SUN August 23 <span className={styles.Time}>10am - 8pm</span>
                </P>
                <P className={cx(styles.Bold, styles.Event)}> GRAFF JAM</P>
              </div>
            </div>
            <div className={styles.Section}>
              <H2>There's just a few important notes</H2>
              <ol className={styles.List}>
                <li className={styles.ListItem}>
                  <P>
                    I've set up an online marketplace powered by Shopify on this
                    event website. We will also have a pop-up market on site.
                    All sales are non-commission, so if you have art or goods
                    for sale, let's get them up on the market!
                  </P>
                </li>
                <li className={styles.ListItem}>
                  <P>
                    This is a public, outdoor event so obviously no blatant use
                    of drugs or alcohol. We've got an after party planned for
                    Saturday night at the Meta Space downtown for you to let
                    loose. Just don't let too loose, it's gonne be hot af on
                    Sunday 🥵
                  </P>
                </li>
                <li className={styles.ListItem}>
                  <P>
                    We are painting various buildings on one block Bowness Road.
                    The space has been donated to us by the busninesses, but
                    there is mixed enthusiasm from the community. We need to be
                    very intentional about creating a welcoming legal regulated
                    exhibit for the entire community to enjoy, so it doesn't get
                    buffed over right away.{" "}
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
                    owners with little shouts in your piece or themed
                    characters. Specifically we want to thank Bowness Arts, The
                    Place Restaurant, and The Bowness Community Association.
                    Come chat with me and let's figure out a way to say thanks
                    for the specific wall you're painting 🤗
                  </P>
                </li>

                <li className={styles.ListItem}>
                  <P>
                    We will be livestreaming the event via Twitch embedded on
                    this website,{" "}
                    <span className={styles.Bold}>
                      so any considerations you might need to take to protect
                      your identity are your responsibility 👻
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
                    We get a discount on goods at Bow Cannabis over the course
                    of the weekend. Go support the local weed shop, man. Just
                    tell them you're with me 🤙
                  </P>
                </li>
                <li className={styles.ListItem}>
                  <P>
                    I've got 10 cans of paint for each artist. I cleared out
                    Beast's garage and got a mixed bag of Loop and Montana. I'll
                    hand out the paint at 10am on Saturday first come, first
                    served styles. If you're on a wall with Hebrw, Toner, or
                    Ashk, chat with them about scheme so we can try to proddy
                    the larger walls 🎨
                  </P>
                </li>
              </ol>
            </div>
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
