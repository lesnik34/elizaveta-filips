import React, { useEffect, useState } from "react";
import cls from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";

import { PaintingI } from "@api/types";

import Item from "./Item";
import styles from "./style.module.scss";

interface WorksListI {
  paintings: PaintingI[];
  isSmall?: boolean;
}

const MAX_ITEMS = 10;

const WorksList: React.FC<WorksListI> = ({ paintings, isSmall = false }) => {
  const [items, setItems] = useState(paintings.slice(0, MAX_ITEMS));

  useEffect(() => {
    setItems(paintings.slice(0, MAX_ITEMS));
  }, [paintings]);

  const addItems = () => {
    const newItems = paintings.slice(items.length, items.length + MAX_ITEMS);
    setItems((prevState) => [...prevState, ...newItems]);
  };

  return (
    <div className={styles.main}>
      <InfiniteScroll
        dataLength={items.length}
        next={addItems}
        hasMore={paintings.length !== items.length}
        loader={<span className={styles.loader}>Loading...</span>}
        className={cls(styles.list, { [styles.small]: isSmall })}
      >
        {items.map((el) => (
          <div key={el.id} className={styles.item}>
            <Item isSmall={isSmall} item={el} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default WorksList;
