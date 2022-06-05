import React from "react";
import Link from "next/link";
import cls from "classnames";

import Bread from "@components/bread";
import { PaintingI } from "@/api/types";

import Slider from "./Slider";
import styles from "./style.module.scss";

interface WorksItemI {
  painting: PaintingI;
}

const WorksItem: React.FC<WorksItemI> = ({ painting }) => (
  <section className={styles.main}>
    <div className="container">
      <div
        className={styles.wrapper}
        itemScope
        itemType="http://schema.org/Product"
      >
        <Bread
          path={[
            { title: "Categories", slug: "works" },
            painting.category,
            { title: painting.title, slug: painting.slug },
          ]}
        />

        <h1 className="visually-hidden" itemProp="name">
          {painting.title}
        </h1>

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

          <div className={styles.monada}>
            <div className={cls(styles.info, styles.info_name)}>
              {/* <h2 className={styles.info_title}>Title</h2> */}

              <p className={styles.info_text} itemProp="name">
                {painting.title}
              </p>
            </div>

            <div
              className={styles.info_wrapper}
              itemProp="offers"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <div className={cls(styles.info)}>
                {/* <h2 className={styles.info_title}>Technique</h2> */}

                <p className={styles.info_text} itemProp="description">
                  {painting.technique}
                </p>
              </div>

              <div className={cls(styles.info, styles.info_year)}>
                {/* <h2 className={styles.info_title}>Year</h2> */}

                <p className={styles.info_text} itemProp="description">
                  {painting.year}
                </p>
              </div>

              <div className={styles.info}>
                {/* <h2 className={styles.info_title}>Size</h2> */}

                <p className={styles.info_text} itemProp="description">
                  {painting.size}
                </p>
              </div>

              <Link href="/contact">
                <a className={styles.contact}>Contact me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorksItem;
