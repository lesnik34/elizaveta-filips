import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getSearchingData } from "@api/graph";
import { PaintingI } from "@api/types";

import styles from "./style.module.scss";

const AsyncInput = () => {
  const [paintings, setPaintings] = useState<PaintingI[]>([]);
  const [phrase, setPhrase] = useState("");

  const inputHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    const result = e.currentTarget.value;
    setPhrase(result);

    if (result.length >= 3) {
      const data = await getSearchingData(result);

      setPaintings(data);
    } else {
      setPaintings([]);
    }
  };

  const getMessage = () => {
    if (phrase.length < 3 && phrase.length > 0) {
      return <span className={styles.message_info}>Type more...</span>;
    }

    if (phrase.length >= 3 && paintings.length === 0) {
      return <span className={styles.message_info}>No results</span>;
    }

    return null;
  };

  return (
    <div className={styles.main}>
      <input
        className={styles.input}
        type="text"
        value={phrase}
        onChange={inputHandler}
        placeholder="Search works..."
      />

      {getMessage()}

      <ul className={styles.list}>
        {paintings.map((el) => (
          <li key={el.id} className={styles.item}>
            <Link href={`/works/${el.category.slug}/${el.slug}`}>
              <a className={styles.link}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={el.previewImage.url}
                    alt={el.title}
                    layout="fill"
                    className={styles.image}
                  />
                </div>

                <span className={styles.title}>{el.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncInput;
