import React from "react";
import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import { PaintingI } from "@api/types";
import shimmer64 from "@utils/shimmer64";

import styles from "./style.module.scss";

interface ItemI {
  item: PaintingI;
  isSmall: boolean;
}

const Item: React.FC<ItemI> = ({ item, isSmall }) => (
  <div className={styles.main}>
    <Link href={`/works/${item.category.slug}/${item.slug}`}>
      <a className={styles.link}>
        <div
          className={cls(styles.background_wrapper, {
            [styles.isSmall]: isSmall,
          })}
        >
          <Image
            src={item.previewImage.url}
            className={styles.background}
            layout="fill"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${shimmer64("700", "475")}`}
            alt={item.title}
          />
        </div>

        {/* <span className={styles.title}>{item.title}</span> */}
      </a>
    </Link>
  </div>
);

export default Item;
