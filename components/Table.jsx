import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Table.module.css";

const status = ["prepartion", "shiping", "deliverd"];

function Table({ data, type, updateOrderStatus }) {
  // cart -> table in cart page
  // adminProduct -> table in Admin page
  // adminOrder -> table in admin page

  const handleNext = (id) => updateOrderStatus(id);

  const createTableHead = () => {
    if (type === "cart")
      return ["product", "name", "extras", "price", "quantity", "total"];
    else if (type === "order") return ["order", "customer", "address", "total"];
    else if (type === "orders")
      return ["order", "customer", "total", "status", "cta"];
    else if (type === "adminProducts")
      return ["image", "id", "title", "price", "cta"];
  };

  const createTableRow = (data) => {
    if (type === "cart" || type === "adminProducts") {
      return data.map((item) => (
        <tr key={item._id} className={styles.tr}>
          <td>
            <Link href={`/product/${item._id}`}>
              <div
                className={styles.imgContainer}
                style={{
                  width: type === "adminProducts" ? "80px" : "",
                  height: type === "adminProducts" ? "80px" : "",
                }}
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </Link>
          </td>

          {type === "adminProducts" && (
            <td>
              <span className={styles.id}>{`${item._id}`.slice(0, 6)}...</span>
            </td>
          )}

          <td>
            <span className={styles.name}>{item.title}</span>
          </td>

          {type === "cart" && (
            <td>
              <span className={styles.extras}>
                {item.extraOptions.join(", ")}
              </span>
            </td>
          )}

          <td>
            <span className={styles.price}>
              {type === "adminProducts"
                ? item.prices.map((price, index) => `${price}`).join(" / ")
                : item.price}
            </span>
          </td>

          {type === "cart" && (
            <td>
              <span className={styles.quantity}>{item.quantity}</span>
            </td>
          )}

          {type === "cart" && (
            <td>
              <span className={styles.subtotal}>
                {item.price * item.quantity}
              </span>
            </td>
          )}

          {type === "adminProducts" && (
            <td>
              <button
                className="btn btn-small btn-green"
                style={{ marginRight: "1rem" }}
              >
                edit
              </button>
              <button className="btn btn-small btn-danger">delete</button>
            </td>
          )}
        </tr>
      ));
    } else if (type === "order") {
      return (
        <tr className={styles.tr} key={data._id}>
          <td>
            <span className={styles.id}>{data._id}</span>
          </td>

          <td>
            <span className={styles.customer}>{data.customer}</span>
          </td>

          <td>
            <span className={styles.address}>{data.address}</span>
          </td>

          <td>
            <span className={styles.subtotal}>{data.total}</span>
          </td>
        </tr>
      );
    } else if (type === "orders") {
      return data.map((item) => (
        <tr className={styles.tr} key={item._id}>
          <td>
            <Link href={`/order/${item._id}`}>
              <span className={styles.id} style={{ cursor: "pointer" }}>
                {`${item._id}`.slice(0, 10)}...
              </span>
            </Link>
          </td>
          <td>
            <span className={styles.customer}>{item.customer}</span>
          </td>{" "}
          <td>
            <span className={styles.subtotal}>{item.total}</span>
          </td>
          <td>
            <span className={styles.status}>{status[item.status]}</span>
          </td>
          <td>
            <button
              className="btn"
              onClick={() => updateOrderStatus(item._id)}
              disabled={item.status >= 2}
              style={{ cursor: item.status >= 2 ? "not-allowed" : "pointer" }}
            >
              next &#x2794;
            </button>
          </td>
        </tr>
      ));
    }
  };

  const tableHeadCells = createTableHead();

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {tableHeadCells.map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>{createTableRow(data)}</tbody>
    </table>
  );
}

export default Table;
