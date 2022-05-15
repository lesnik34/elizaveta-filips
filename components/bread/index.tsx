import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cls from "classnames";

import styles from "./style.module.scss";

interface BreadI {
  path: { title: string; slug: string }[];
}

const Bread: React.FC<BreadI> = ({ path }) => {
  const router = useRouter();

  return (
    <ul
      itemScope
      itemType="http://schema.org/BreadcrumbList"
      className={styles.list}
    >
      {path.map((el, i) => {
        const currentPath = `/${path
          .slice(0, i + 1)
          .map((elem) => elem.slug)
          .join("/")}`;
        const isActive = currentPath === router.asPath;

        return (
          <li
            key={el.slug}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
            className={cls(styles.item, { [styles.active]: isActive })}
          >
            <Link href={currentPath}>
              <a className={styles.link} itemProp="item">
                <meta itemProp="name" content={el.title} />
                {el.title}
              </a>
            </Link>

            <meta itemProp="position" content={`${i + 1}`} />
          </li>
        );
      })}
    </ul>
  );
};

export default Bread;
