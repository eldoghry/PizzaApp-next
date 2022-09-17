import classes from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.callButton}>
          <Image
            src="/img/telephone.png"
            alt="tele icon"
            width={30}
            height={30}
          />
        </div>

        <div className={classes.texts}>
          <span className={classes.text}>order now !</span>
          <span className={classes.text}>012 345 6789</span>
        </div>
      </div>

      <div className={classes.item}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link href={`/`} passHref>
              Home
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`/`} passHref>
              Products
            </Link>
          </li>

          <li className={classes.listItem}>
            <Link href={`/`} passHref>
              Menu
            </Link>
          </li>

          <Link href={`/`} className={classes.NavImgContainer} passHref>
            <a>
              <Image
                className={classes.NavImg}
                // style={{ cursor: "pointer" }}
                src="/img/logo.png"
                alt="logo"
                width={160}
                height={70}
              />
            </a>
          </Link>

          <li className={classes.listItem}>
            <Link href={`#`} passHref>
              events
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`#`} passHref>
              content
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href={`#`} passHref>
              blog
            </Link>
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

        {/* <div id="toggleMenu" className={classes.toggleMenu}>
          <span></span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
