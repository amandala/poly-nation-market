import React from "react";
import BeePage from "../../components/BeePage";
import { H1, H2, H3, P } from "../../components/Typography";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";

const About = () => {
  return (
    <BeePage>
      <Section className={styles.Wrapper}>
        <div className={styles.Left}>
          <div className={styles.Intro}>
            <H1 className={styles.Buzz}>What's all the buzz about?</H1>
            <P>
              We've been busy bees curating a weekend of live art and music.
              Blending various communities, we bring you a cross pollination of
              creative minds spanning multiple continents.
            </P>
            <P>
              Join us August 22 & 23 for a buzz worthy art and music livestream
              event featuring musical talent from Canada and the UK and local
              Canadian visual artists. We will be featuring live local sets on
              our Calgary stage and remote stream features pulled in from
              artists across the UK. The lineup is stacked and it's sure to be
              an event fit for a Queen (and her hive).
            </P>
            <P>
              <span className={styles.Bold}>
                We'll be livestreaming all the action on the homepage for the
                global hive. The party starts at noon on Saturday August 22.
              </span>
            </P>
          </div>
          <H2 className={styles.Buzz}>
            We are eternally grateful to our partners!
          </H2>
          <div>
            <H3>Bowness Arts</H3>
            <P>
              Bowness is about to get a lot more creative thanks to Bowness
              Arts. Keep your eyes peeled for a brand new art gallery and studio
              opening up right on main street soon. Special thanks to Sergei for
              donating the amazing walls for our visual pollinators to paint!
            </P>
          </div>
          <div>
            <H3>Main Street Bowness BIA</H3>
            <P>
              The Mainstreet Bowness Business Improvement Area (BIA) supports a
              wide range of businesses from popular restaurants, unique service
              shops and nightlife. A small-town atmosphere with free angled
              parking makes our area an easy-to-shop district where our owners
              work together to promote and improve our economic vitality. Our
              long and rich history dates back to the 1940’s with taxi stands
              and a street car system. Several long standing independent
              businesses still call Mainstreet Bowness home while they occupy
              some of the original buildings that still exist.{" "}
              <a
                href="https://www.mainstreetbowness.com/about"
                target="_blank"
                className={styles.Link}
              >
                Read more about their mission
              </a>
            </P>
          </div>
          <div>
            <H3>Bowness Community Association</H3>

            <P>
              Bowness is lucky to have such an amazing community association,
              and we are lucky to have their support. They've generously
              organized a selection of delicious food and refreshing treats to
              keep the hive nourished while we pollinate.{" "}
              <a
                href="https://www.mybowness.com/"
                target="_blank"
                className={styles.Link}
              >
                See why We ❤️ Bowness
              </a>
            </P>
          </div>

          <div>
            <H3>The Place Restaurant</H3>
            <P>
              The Place Restaurant is a Bowness staple and has been seriving up
              delicious food and warm conversation since 1974. They're known for
              their incredible hand made pizzas and quality local Alberta beef.
              Stop in for dinner on Monday or Tuesday and enjoy 15% off dine-in
              pastas.{" "}
              <a
                href="http://www.theplacerestaurant.ca/"
                target="_blank"
                className={styles.Link}
              >
                Check out their menu!
              </a>
            </P>
          </div>
          <div>
            <H3>Carstar Bowness</H3>
            <P>
              Not ones to miss an opportunity to make something look better, the
              folks at Carstar Bowness have provided a large mural space for our
              artists to decorate. We're thrilled!
            </P>
          </div>
          <div>
            <H3>Big Kitty Crew</H3>
            <P>
              The Big Kitty Crew is a multidiciplinary collective of
              female-identifying creative kitties exploring urban expressions,
              building community, and bridging new collaborations across the
              country through visual and performing arts.{" "}
              <a
                href="https://www.bigkittycrew.com/"
                target="_blank"
                className={styles.Link}
              >
                Check out what the kitties are up to at bigkittycrew.com
              </a>
              .
            </P>
          </div>
        </div>
      </Section>
      <Footer />
    </BeePage>
  );
};

export default About;
