import React from "react";

import { Insta } from "@components/icons";

import styles from "./style.module.scss";

const Footer = () => (
  <footer className={styles.main}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://instagram.com/artsyfilips?igshid=YmMyMTA2M2Y="
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
          className={styles.insta}
        >
          <Insta className={styles.insta} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
