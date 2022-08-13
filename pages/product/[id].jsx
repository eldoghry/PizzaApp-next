import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const pizza = {
    img: "/img/pizza.png",
    name: "Pepproni",
    price: 27.5,
    prices: [27.5, 52.25, 70.8],
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex natus
    non sint delectus quos suscipit quod, autem eligendi consequatur
    labore quibusdam iste repellat dicta laborum voluptatibus veniam
    impedit esse.
  `,
  };

  const [price, setPrice] = useState(pizza.price);

  const sizeTag = ["small", "medium", "large"];

  const handlePrice = (newPrice) => setPrice(newPrice);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="/img/pizza.png"
          alt=""
          objectFit="cover"
          width="500"
          height="500"
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{price}</span>
        <p className={styles.desc}>{pizza.desc}</p>

        <h2 className={styles.subtitle}>choose the size</h2>
        <div className={styles.sizes}>
          {pizza.prices.map((price, index) => {
            return (
              <div className={styles.size}>
                <input
                  type="radio"
                  name="size"
                  id={sizeTag[index]}
                  defaultChecked={!index}
                  onChange={() => handlePrice(price)}
                />

                <label htmlFor={sizeTag[index]}>
                  <Image
                    src="/img/size.png"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />

                  <span className={styles.sizeTitle}>{sizeTag[index]}</span>
                </label>
              </div>
            );
          })}
        </div>

        <h2 className={styles.subtitle}>add additional ingrediants</h2>
        <div className={styles.ingrediants}>
          <div className={styles.option}>
            <input type="checkbox" name="double" id="double" />
            <label htmlFor="double">double ingrediants</label>
          </div>

          <div className={styles.option}>
            <input type="checkbox" name="cheese" id="cheese" />
            <label htmlFor="cheese">extra cheese</label>
          </div>

          <div className={styles.option}>
            <input type="checkbox" name="spicy" id="spicy" />
            <label htmlFor="spicy">spicy sauce</label>
          </div>

          <div className={styles.option}>
            <input type="checkbox" name="garlic" id="garlic" />
            <label htmlFor="garlic">garlic sauce</label>
          </div>
        </div>

        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className={styles.quantity}
          />
          <button className={styles.button}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
