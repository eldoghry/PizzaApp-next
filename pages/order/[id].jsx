import styles from "../../styles/Order.module.css";
import Image from "next/image";


const Order = () => {
  let status = 0;

  const statusClass = (index) => {
    if (index < 1) return styles.done;
    else if (index === 1) return styles.inProgress;
    if (index > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>customer</th>
                <th>address</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>12345678924153</span>
                </td>

                <td>
                  <span className={styles.customer}> Mohamed Magdy</span>
                </td>

                <td>
                  <span className={styles.address}> 98 downtown, cairo</span>
                </td>

                <td>
                  <span className={styles.subtotal}> 111</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width={60} height={60} />
            <span className={styles.stateTitle}>payment</span>

            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width={60} height={60} />
            <span className={styles.stateTitle}>prepartion</span>

            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width={60} height={60} />
            <span className={styles.stateTitle}>shipping</span>

            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/img/delivered.png" alt="" width={60} height={60} />
            <span className={styles.stateTitle}>delivered</span>

            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>
        </div>
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
          <button
            className={styles.btn}
            style={{ cursor: "not-allowed", color: "white" }}
            disabled
          >
            paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
