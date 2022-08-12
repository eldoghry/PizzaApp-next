import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="30" height="30" />
        </div>

        <div className={styles.texts}>
          <span className={styles.text}>order now</span>
          <span className={styles.text}>012 345 6789</span>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="160px" height="69px" />
          <li className={styles.listItem}>events</li>
          <li className={styles.listItem}>content</li>
          <li className={styles.listItem}>blog</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="35" height="35" />
          <span className={styles.counter}>3</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
