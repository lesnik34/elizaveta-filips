import React from "react";

import { PaintingI } from "@api/types";
import Bread from "@components/bread";

import ItemList from "@components/works_list";
import styles from "./style.module.scss";

interface CategoriesPageI {
  paintings: PaintingI[];
  category: { slug: string; title: string };
}

const CategoriesPage: React.FC<CategoriesPageI> = ({ paintings, category }) => (
  <section className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        <Bread path={[{ title: "Categories", slug: "works" }, category]} />

        <h2 className={styles.title}>{category.title}</h2>

        <ItemList isSmall={category.slug === "canvas"} paintings={paintings} />
      </div>
    </div>
  </section>
);

export default CategoriesPage;
