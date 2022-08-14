import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="30" height="30" />
        </div>

        <div className={styles.texts}>
          <span className={styles.text}>order now !</span>
          <span className={styles.text}>012 345 6789</span>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`#products`}>Products</Link>
          </li>

          <li className={styles.listItem}>
            <Link href={`#products`}>Menu</Link>
          </li>

          <Link href={`/`}>
            <Image
              style={{ cursor: "pointer" }}
              src="/img/logo.png"
              alt="logo"
              width="160px"
              height="69px"
            />
          </Link>

          <li className={styles.listItem}>
            <Link href={`#`}>events</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`#`}>content</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`#`}>blog</Link>
          </li>
        </ul>
      </div>

      <div className={styles.item}>
        <Link href={`/cart`}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="35" height="35" />
            <span className={styles.counter}>3</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
