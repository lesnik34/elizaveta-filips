import React from "react";
import Link from "next/link";

import { PaintingI } from "@/api/types";

import Slider from "./Slider";
import styles from "./style.module.scss";

interface WorksItemI {
  painting: PaintingI;
}

const WorksItem: React.FC<WorksItemI> = ({ painting }) => (
  <section className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className="visually-hidden">{painting.title}</h1>

        <div className={styles.content}>
          <div className={styles.slider}>
            <Slider
              data={
                painting.images.length > 0
                  ? painting.images
                  : [painting.previewImage]
              }
            />
          </div>

          <div className={styles.info_wrapper}>
            <div className={styles.info}>
              <h2 className={styles.info_title}>Title</h2>

              <p className={styles.info_text}>{painting.title}</p>
            </div>

            <div className={styles.info}>
              <h2 className={styles.info_title}>Technique</h2>

              <p className={styles.info_text}>{painting.technique}</p>
            </div>

            <div className={styles.info}>
              <h2 className={styles.info_title}>Size</h2>

              <p className={styles.info_text}>{painting.size}cm</p>
            </div>

            <div className={styles.info}>
              <h2 className={styles.info_title}>Year</h2>

              <p className={styles.info_text}>{painting.year}</p>
            </div>

            <Link href="/contact">
              <a className={styles.contact}>Contact me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorksItem;
