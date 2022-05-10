import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";

import SearchComponent from "@components/global/search";
import { headerSelector } from "@store/selectors/global";
import Burger from "@components/global/burger";

import styles from "./style.module.scss";

const Header = () => {
  const isHeaderVisible = useSelector(headerSelector);

  return (
    <header className={styles.main}>
      <div className="container">
        <div
          className={cls(styles.wrapper, { [styles.visible]: isHeaderVisible })}
        >
          <Link href="/">
            <a className={styles.link}>
              <Image
                src="/images/svg/logo.svg"
                alt="Logo"
                layout="fill"
                className={styles.logo}
              />
            </a>
          </Link>

          <div className={styles.button_wrapper}>
            <div className={styles.search}>
              <SearchComponent />
            </div>

            <div className={styles.burger}>
              <Burger />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
