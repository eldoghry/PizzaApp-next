import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image
            src="/img/pizza.png"
            alt={`${pizza.title}`}
            width="150"
            height="150"
            style={{ cursor: "pointer" }}
          />
        </a>
      </Link>

      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.description}</p>
    </div>
  );
};

export default PizzaCard;
