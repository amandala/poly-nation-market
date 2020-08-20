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
              Are you in Calgary? Come down and join us at the{" "}
              <span className={styles.Bold}>We ❤️ Bowness Graffiti Jam</span>{" "}
              from noon to 8pm Saturday and Sunday. Lone from the Big Kitty Crew
              curated a talented group of individuals to bring some beauty and
              color to one lucky block on Bowness Road. Join us as 24 talented
              visual artists decorate 5 giant walls with graffiti and street
              art. There will be a small pop-up market with local artisan goods,
              and food trucks to keep you refreshed while you're here.
            </P>
            <P>
              Not in Calgary? No worries, you can still join in on the fun.{" "}
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
              opening up right on main street. The new creative hub is the
              central location for our daytime creations. Come down and say
              "Hi"!
            </P>
          </div>
          <div>
            <H3>Bowness Community Association</H3>
            <P>
              Bowness is lucky to have such an amazing community association,
              and we are lucky to have their support. They've generously
              organized a selection of delicious food and refreshing treats to
              keep the hive nourished while we pollinate.
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
              country through visual and performing arts. Check out what the
              kitties are up to at{" "}
              <a
                href="https://www.bigkittycrew.com/"
                target="_blank"
                className={styles.Link}
              >
                bigkittycrew.com
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
