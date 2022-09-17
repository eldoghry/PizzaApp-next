import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container} id="products">
      <h1 className={styles.title}>The best pizza in town</h1>

      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
        minus repudiandae. Molestias eveniet nisi doloremque sint, provident
        inventore delectus, a nesciunt accusamus illum similique dolorum non
        officiis nulla.
      </p>

      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza._id} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
