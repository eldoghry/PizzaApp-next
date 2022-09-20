import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
// import { ButtonWrapper } from "../../components/Paypal";
import axios from "axios";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
import CodOrderDetails from "../../components/CodOrderDetails";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [checkout, setCheckout] = useState(false);
  const [cash, setCash] = useState(false);
  const router = useRouter();
  // PAYPAL
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    const res = await axios.post("http://localhost:3000/api/order", data);

    const { order } = res.data;

    if (res.status === 201) {
      dispatch(reset());
      router.push(`order/${order._id}`);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={"paypal"}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order

              createOrder({
                customer: details.purchase_units[0].shipping.name.full_name,
                address:
                  details.purchase_units[0].shipping.address.address_line_1,
                status: 0, //pending
                method: 1, //paypal
                total: amount,
              });
            });
          }}
        />
      </>
    );
  };

  // END OF PAYPAL

  if (!cart || !cart.products.length) {
    return <p className="error">empty cart</p>;
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
            {cart.products.map((item, index) => (
              <tr className={styles.tr} key={index}>
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
            <button className={styles.btn} onClick={() => setCash(true)}>
              cash on delivery
            </button>
          )}

          {checkout && (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AcUc5Ptl7x3x3h3ant6Z6LSO1ITma7TflABq9-Nv6dD_cqQagpd5dots_oI32PIi6I7UAxLjSYoSVK4l",
                components: "buttons",
                currency: "USD",
              }}
            >
              <ButtonWrapper
                currency={currency}
                showSpinner={false}
                style={style}
                amount={amount}
                createOrderFn={createOrder}
              />
            </PayPalScriptProvider>
          )}
        </div>
      </div>

      {cash && (
        <CodOrderDetails
          createOrder={createOrder}
          total={cart.total}
          closeModel={setCash}
        />
      )}
    </div>
  );
};

export default Cart;
