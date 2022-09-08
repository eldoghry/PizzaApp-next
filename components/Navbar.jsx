import classes from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.callButton}>
          <Image src="/img/telephone.png" alt="" width={30} height={30} />
        </div>

        <div className={classes.texts}>
          <span className={classes.text}>order now !</span>
          <span className={classes.text}>012 345 6789</span>
        </div>
      </div>

      <div className={classes.item}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`#products`}>Products</Link>
          </li>

          <li className={classes.listItem}>
            <Link href={`#products`}>Menu</Link>
          </li>

          <Link href={`/`} className={classes.NavImgContainer}>
            <Image
              className={classes.NavImg}
              style={{ cursor: "pointer" }}
              src="/img/logo.png"
              alt="logo"
              width="160px"
              height="69px"
            />
          </Link>

          <li className={classes.listItem}>
            <Link href={`#`}>events</Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`#`}>content</Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`#`}>blog</Link>
          </li>
        </ul>
      </div>

      <div className={classes.item}>
        <Link href={`/cart`}>
          <div className={classes.cart}>
            <Image src="/img/cart.png" alt="" width="35" height="35" />
            <span className={classes.counter}>3</span>
          </div>
        </Link>

        <div id="toggleMenu" className={classes.toggleMenu}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
