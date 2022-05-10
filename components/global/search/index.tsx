import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import cls from "classnames";

import { Search as SearchIcon } from "@components/icons";
import { headerSelector } from "@store/selectors/global";

import AsyncInput from "./async_input";
import styles from "./style.module.scss";

interface SearchI {}

const Search: React.FC<SearchI> = () => {
  const [isVisible, setVisible] = useState(false);
  const isHeaderVisible = useSelector(headerSelector);

  const onClose = () => {
    setVisible(false);
  };

  const onOpen = () => {
    setVisible(true);
  };

  return (
    <div
      className={cls(
        styles.main,
        { [styles.active]: isHeaderVisible },
        { [styles.visible]: isVisible }
      )}
    >
      <button
        type="button"
        className={styles.search}
        onClick={onOpen}
        aria-label="Search"
      >
        <SearchIcon className={styles.search_icon} />
      </button>

      <CSSTransition
        in={isVisible}
        classNames={{
          enterActive: styles["anim-enter"],
          enterDone: styles["anim-enter-done"],
          exitActive: styles["anim-exit"],
          exitDone: styles["anim-exit-done"],
        }}
        timeout={{
          enter: 500,
          exit: 300,
        }}
        unmountOnExit
        mountOnEnter
      >
        <div className={styles.popup}>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <button
                  className={styles.close}
                  onClick={onClose}
                  type="button"
                  aria-label="Close"
                />
              </div>

              <AsyncInput />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Search;
