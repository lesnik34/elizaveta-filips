import React from "react";
import Link from "next/link";

import { PaintingI } from "@api/types";

import styles from "./style.module.scss";

interface ItemI {
  item: PaintingI;
}

const Item: React.FC<ItemI> = ({ item }) => (
  <div className={styles.main}>
    <Link href={`/works/${item.category.slug}/${item.slug}`}>
      <a className={styles.link}>
        <div className={styles.background_wrapper}>
          <img
            src={item.previewImage.url}
            alt={item.title}
            className={styles.background}
          />
        </div>

        <span className={styles.title}>{item.title}</span>
      </a>
    </Link>
  </div>
);

export default Item;
