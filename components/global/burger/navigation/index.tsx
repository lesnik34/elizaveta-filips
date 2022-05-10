import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

import { CategoriesContext } from "@context/categories";

import styles from "./style.module.scss";

interface NavigationI {}

const Navigation: React.FC<NavigationI> = () => {
  const [isVisible, setVisible] = useState(false);
  const categories = useContext(CategoriesContext);

  const toggler = () => {
    setVisible((state) => !state);
  };

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
      </li>

      <CSSTransition
        in={isVisible}
        classNames={{
          enterActive: styles["anim-enter"],
          enterDone: styles["anim-enter-done"],
          exitActive: styles["anim-exit"],
          exitDone: styles["anim-exit-done"],
        }}
        timeout={500}
      >
        <li className={styles.item}>
          <button className={styles.button} type="button" onClick={toggler}>
            Works
          </button>

          <ul className={styles.sub_list}>
            {categories.map((el) => (
              <li key={el.id} className={styles.sub_item}>
                <Link href={`/works/${el.slug}`}>
                  <a className={styles.sub_link}>{el.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </CSSTransition>

      <li className={styles.item}>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
