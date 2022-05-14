import React, { useCallback, useState } from "react";
import { Splide as SplideComponent, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

import shimmer64 from "@/utils/shimmer64";

import styles from "./style.module.scss";

interface SliderI {
  data: { id: string; url: string }[];
}

const Slider: React.FC<SliderI> = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const Splide = SplideComponent as any;

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={styles.main}>
      <Splide
        options={{
          type: "fade",
          pagination: false,
          arrows: false,
          cover: true,
        }}
      >
        {data.map((el, index) => (
          <SplideSlide key={el.id}>
            <div className={styles.image_wrapper}>
              <Image
                src={el.url}
                className={styles.image}
                layout="fill"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${shimmer64(
                  "700",
                  "475"
                )}`}
                alt="Work photo"
                onClick={() => openImageViewer(index)}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {isViewerOpen && (
        <ImageViewer
          src={data.map((el) => el.url)}
          currentIndex={currentImage}
          disableScroll
          closeOnClickOutside
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Slider;
