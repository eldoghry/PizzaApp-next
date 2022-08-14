import styles from "../../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    

    <div className={styles.container}>
    <div className={styles.left}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th>product</th>
            <th>name</th>
            <th>extras</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> Peproni</span>
            </td>

            <td>
              <span className={styles.extras}>
                garlic sauce, double ingrediants, extra cheese,spicy sauce
              </span>
            </td>

            <td>
              <span className={styles.price}> 55.5</span>
            </td>

            <td>
              <span className={styles.quantity}> 2</span>
            </td>

            <td>
              <span className={styles.subtotal}> 111</span>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> Peproni</span>
            </td>

            <td>
              <span className={styles.extras}>
                garlic sauce, double ingrediants, extra cheese,spicy sauce
              </span>
            </td>

            <td>
              <span className={styles.price}> 55.5</span>
            </td>

            <td>
              <span className={styles.quantity}> 2</span>
            </td>

            <td>
              <span className={styles.subtotal}> 111</span>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> Peproni</span>
            </td>

            <td>
              <span className={styles.extras}>
                garlic sauce, double ingrediants, extra cheese,spicy sauce
              </span>
            </td>

            <td>
              <span className={styles.price}> 55.5</span>
            </td>

            <td>
              <span className={styles.quantity}> 2</span>
            </td>

            <td>
              <span className={styles.subtotal}> 111</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={styles.right}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>cart total</h2>
        <div className={styles.text}>
          <b className={styles.title}>subtotal:</b>$111
        </div>

        <div className={styles.text}>
          <b className={styles.title}>discount:</b>$10.0
        </div>

        <div className={styles.text}>
          <b className={styles.title}>total:</b>$101.0
        </div>
        <button className={styles.btn}>checkout now!</button>
      </div>
    </div>
  </div>
  );
};

export default Cart;
