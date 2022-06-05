import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import cls from "classnames";
import { useInView } from "react-intersection-observer";

import useTranslation from "@hooks/translation";
import { setHeaderVision } from "@store/slices/global";

import Three from "./three";
import lng from "./language.json";
import styles from "./style.module.scss";

const Hero = () => {
  const n = useTranslation(lng as any);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ rootMargin: "-100px" });

  useEffect(() => {
    dispatch(setHeaderVision(!inView));
  }, [inView]);

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className="visually-hidden">Elizaveta filips art</h1>

          {/* <div className={styles.image_wrapper}>
            <Image
              src="/images/jpg/hero.jpg"
              alt="Main background"
              layout="fill"
              className={styles.background}
            />

            <div className={styles.overlay} />
          </div> */}

          <div className={styles.three}>
            <Three />
          </div>

          <div
            className={cls(styles.title_wrapper, {
              [styles.visible]: inView,
            })}
            ref={ref}
          >
            <span className={styles.title}>Elizaveta Filips</span>

            <Link href="/works">
              <a className={styles.link}>{n("button.works")}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
