import styles from "../styles/Features.module.css";
import Image from "next/image";
import { useState } from "react";

const Features = () => {
  const [index, setIndex] = useState(0);

  const imgs = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    } else if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt=""
          objectFit="cover"
          width="100"
          height="100"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {imgs.map((img, index) => {
          return (
            <div className={styles.imgContainer} key={index}>
              <Image
                src={img}
                alt="pizza"
                objectFit="cover"
                layout="fill"
                className={styles.img}
              />
            </div>
          );
        })}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt=""
          objectFit="cover"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};

export default Features;
