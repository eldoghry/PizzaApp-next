import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ButtonWrapper } from "../../components/Paypal";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [checkout, setCheckout] = useState(false);

  // PAYPAL
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  // END OF PAYPAL

  if (!cart || !cart.products.length) {
    return <p>empty cart</p>;
  }

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
            {cart.products.map((item) => (
              <tr className={styles.tr} key={item.id}>
                <td>
                  <Link href={`/product/${item.id}`}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={`/${item.img}`}
                        alt={item.title}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  </Link>
                </td>
                <td>
                  <span className={styles.name}>{item.title}</span>
                </td>

                <td>
                  <span className={styles.extras}>
                    {item.extraOptions.join(", ")}
                  </span>
                </td>

                <td>
                  <span className={styles.price}>{item.price}</span>
                </td>

                <td>
                  <span className={styles.quantity}>{item.quantity}</span>
                </td>

                <td>
                  <span className={styles.subtotal}>
                    {item.price * item.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>cart total</h2>
          <div className={styles.text}>
            <b className={styles.title}>subtotal:</b> {cart.total}
          </div>

          <div className={styles.text}>
            <b className={styles.title}>discount:</b>$0.00
          </div>

          <div className={styles.text}>
            <b className={styles.title}>total:</b>
            {cart.total}
          </div>

          {!checkout && (
            <button className={styles.btn} onClick={() => setCheckout(true)}>
              checkout now!
            </button>
          )}

          {checkout && (
            <button className={styles.btn} onClick={() => {}}>
              cash on delivery
            </button>
          )}

          {checkout && (
            <PayPalScriptProvider
              options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper
                currency={currency}
                showSpinner={false}
                style={style}
                amount={amount}
              />
            </PayPalScriptProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
