import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best pizza in town</h1>

      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
        minus repudiandae. Molestias eveniet nisi doloremque sint, provident
        inventore delectus, a nesciunt accusamus illum similique dolorum non
        officiis nulla. Ad, possimus.Lorem ipsum. Molestias eveniet nisi
        doloremque sint, provident inventore delectus, a nesciunt accusamus
        illum similique dolorum non officiis nulla. Ad, possimus.Lorem ipsum.
      </p>

      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;