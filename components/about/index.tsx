import React from "react";

import styles from "./style.module.scss";

const About = () => (
  <section className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className="visually-hidden">About</h1>

        <div className={styles.content}>
          <p className={styles.desc}>
            Elizaveta Filips's drawings are never made clear, her subjects are
            always drawn in an abstract and loose manner that allows her the
            freedom of experimentation and expression; taking inspiration from
            her everyday life mixed with mystical plots and characters, hip-hop
            figures and other idols/ideas Elizaveta incorporates them into a
            seductive, translucent and shadowy figure that's bursting with
            dynamics of color and tone. The context of her subject matters are
            within the abstract and intangible, sometimes you see human figures
            emerging from the quiet and chaotic desolate landscapes of her art
            and otherwise you see nothing more than a dynamic splashing of
            colors.
            <br />
            <br />
            Filips’s art practices stem mainly from stories from her own life
            and integrating them with her own subconscious and ultimately adding
            her layer of inspiration based on her musical taste, outside
            knowledge and etc. All of this forms an ambiguous but a deathly
            striking image. Elizaveta is clear in what she wants to accomplish
            but has enough freedom to add a new idea. Her art never tells you
            what exactly to feel, rather it's the emotions you first encounter
            that matters, her sporadic mashing of colors and environment present
            the antithesis of coherence but it's through the chaos her art is
            found, through the abstract and the veil you'll see her own personal
            identity carved using the same paper ink. I have no doubt she's one
            of the most talented artists I know of and I'm tremendously excited
            for her future and the future of her art.
          </p>

          <div className={styles.author_wrapper}>
            <p className={styles.author}>Review by Mohannad Othman</p>
            <p className={styles.date}>April 30, 2022</p>
            <p className={styles.city}>Khartoum, Sudan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
