import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

interface CategoriesI {
  categories: {
    id: string;
    slug: string;
    title: string;
  }[];
}

const Categories: React.FC<CategoriesI> = ({ categories }) => (
  <div className={styles.main}>
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Categories</h1>

        <ul className={styles.list}>
          {categories.map((el) => (
            <li key={el.id} className={styles.item}>
              <Link href={`/works/${el.slug}`}>
                <a className={styles.link}>{el.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Categories;
