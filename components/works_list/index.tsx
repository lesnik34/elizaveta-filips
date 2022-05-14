import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { PaintingI } from "@api/types";

import Item from "./Item";
import styles from "./style.module.scss";

interface WorksListI {
  paintings: PaintingI[];
}

const MAX_ITEMS = 10;

const WorksList: React.FC<WorksListI> = ({ paintings }) => {
  const [items, setItems] = useState(paintings.slice(0, MAX_ITEMS));

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
        className={styles.list}
      >
        {paintings.map((el) => (
          <li key={el.id} className={styles.item}>
            <Item item={el} />
          </li>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default WorksList;
