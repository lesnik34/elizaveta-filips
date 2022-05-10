import React from "react";
import Link from "next/link";

import useTranslation from "@hooks/translation";

import lng from "./language.json";
import styles from "./style.module.scss";

const NotFound = () => {
  const n = useTranslation(lng as any);

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>404</h1>

          <Link href="/">
            <a className={styles.link}>{n("back.title")}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
