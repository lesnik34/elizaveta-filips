import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import cls from "classnames";
import { useInView } from "react-intersection-observer";

import useTranslation from "@hooks/translation";
import { setHeaderVision } from "@store/slices/global";
import { PreviewI } from "@/api/types";

import Three from "./three";
import lng from "./language.json";
import styles from "./style.module.scss";
import Preview from "../preview";

interface HeroI {
  preview: PreviewI[];
}

const Hero: React.FC<HeroI> = ({ preview }) => {
  const n = useTranslation(lng as any);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ rootMargin: "-100px" });

  useEffect(() => {
    dispatch(setHeaderVision(false));
    return () => {
      dispatch(setHeaderVision(true));
    };
  }, []);

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className="visually-hidden">Elizaveta filips art</h1>

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

          <div className={styles.preview}>
            <Preview preview={preview} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
