import React from "react";

import useTranslation from "@hooks/translation";
import { PaintingI } from "@api/types";

import ItemList from "@components/works_list";
import lng from "./language.json";
import styles from "./style.module.scss";

interface FeaturedI {
  paintings: PaintingI[];
}

const Featured: React.FC<FeaturedI> = ({ paintings }) => {
  const n = useTranslation(lng as any);

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* <h2 className={styles.title}>{n("featured.title")}</h2> */}

          <ItemList paintings={paintings} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
