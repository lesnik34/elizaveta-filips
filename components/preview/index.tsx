import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide as SplideComponent, SplideSlide } from "@splidejs/react-splide";

import { PreviewI } from "@api/types";
import useWindowSize from "@hooks/device_size";

import styles from "./styles.module.scss";

interface PreviewComponentI {
  preview: PreviewI[];
}

const Preview: React.FC<PreviewComponentI> = ({ preview }) => {
  const { device } = useWindowSize();
  const Splide = SplideComponent as any;

  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <Splide
            options={{
              type: "loop",
              perPage: device.isMobileWidth ? 1 : 1,
              gap: 20,
              speed: 700,
              autoplay: true,
              interval: 7000,
              pauseOnFocus: true,
              pauseOnHover: true,
              pagination: false,
              arrows: false,
            }}
          >
            {preview.map((el) => (
              <SplideSlide key={el.id}>
                <Link href={el.url}>
                  <a className={styles.link}>
                    <div className={styles.image_wrapper} itemProp="image">
                      <Image
                        src={el.image.url}
                        className={styles.image}
                        layout="fill"
                        alt="Work photo"
                      />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Preview;
