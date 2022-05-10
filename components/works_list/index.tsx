import React from "react";

import { PaintingI } from "@api/types";

import Item from "./Item";
import styles from "./style.module.scss";

interface WorksListI {
  paintings: PaintingI[];
}

const WorksList: React.FC<WorksListI> = ({ paintings }) => (
  <div className={styles.main}>
    <ul className={styles.list}>
      {paintings.map((el) => (
        <li key={el.id} className={styles.item}>
          <Item item={el} />
        </li>
      ))}
    </ul>
  </div>
);

export default WorksList;
