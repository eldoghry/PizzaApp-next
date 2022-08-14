import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Link href={"/product/1"}>
        <Image
          src="/img/pizza.png"
          alt=""
          width="150"
          height="150"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
