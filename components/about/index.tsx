import React from "react";
import Image from "next/image";

import styles from "./style.module.scss";

const About = () => (
  <section className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className="visually-hidden">About</h1>

        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <Image
              src="/images/jpg/about.jpg"
              alt="My photo"
              layout="fill"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.bio_wrapper}>
              <h2 className={styles.bio_title}>Biography</h2>

              <p className={styles.bio_desc}>
                Born in 1997, Rostov-on-Don, Russia
              </p>
            </div>

            <div className={styles.edu_wrapper}>
              <h2 className={styles.edu_title}>Education</h2>

              <p className={styles.edu_text}>
                Academy of Architecture and Arts, UFU, Rostov-on-Don, 2011-2013
              </p>

              <p className={styles.edu_text}>
                Moscow Architectural University MARKHI, Moscow, 2014
              </p>

              <p className={styles.edu_text}>
                British Higher School of Art & Design, Pre- Foundation, 2015
              </p>

              <p className={styles.edu_text}>
                British Higher School of Art & Design, Moscow. Fine Art,
                BA(Hons), University of Hertfordshire, UK, 2016-2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
