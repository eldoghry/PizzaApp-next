import { useState } from "react";
import styles from "../styles/CodOrderDetails.module.css";

function CodOrderDetails({ total, createOrder, closeModel }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  //   const [errorMsg, setErrorMsg] = useState("");

  const handlePlaceOrder = () => {
    if (!customer || !address) {
      setErrorMsg("name & address are required");
      return;
    }

    createOrder({
      customer,
      address,
      total,
      method: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>You will paid 10$</h3>

        <span className={styles.closeModel} onClick={() => closeModel(false)}>
          &#10005;
        </span>

        <div className={styles.item}>
          <label htmlFor="customer">customer</label>
          <input
            type="text"
            id="customer"
            name="customer"
            placeholder="mohamed magdy"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="address">address</label>
          <textarea
            cols={30}
            rows={4}
            type="text"
            id="address"
            name="address"
            placeholder="123 street"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="btn btn-green" onClick={handlePlaceOrder}>
          place order
        </button>

        {errorMsg.length !== 0 && (
          <span className={styles.msg}>{errorMsg}</span>
        )}
      </div>
    </div>
  );
}

export default CodOrderDetails;
