import React from "react";

import { PaintingI } from "@api/types";

import ItemList from "@components/works_list";
import styles from "./style.module.scss";

interface FeaturedI {
  paintings: PaintingI[];
}

const Featured: React.FC<FeaturedI> = ({ paintings }) => (
  <section className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        {/* <h2 className={styles.title}>{n("featured.title")}</h2> */}

        <ItemList paintings={paintings} />
      </div>
    </div>
  </section>
);
export default Featured;
