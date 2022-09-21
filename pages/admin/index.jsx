import Table from "../../components/Table";
import styles from "./../../styles/Admin.module.css";
import axios from "axios";
import { useState } from "react";
import ProductModel from "../../components/ProductModel";

function Admin({ products, orders }) {
  const [ordersList, setOrdersList] = useState(orders);
  const [productsList, setProductsList] = useState(products);
  const [openModel, setOpenModel] = useState(false);

  const handleNextStatus = async (id) => {
    const status = ordersList.filter((o) => o._id === id)[0].status;

    if (status < 2) {
      try {
        const res = await axios.put(`http://localhost:3000/api/order/${id}`, {
          status: status + 1,
        });

        setOrdersList([
          res.data.order,
          ...ordersList.filter((o) => o._id !== id),
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createPizza = async (data) => {
    try {
      const res = await axios.post(`http://localhost:3000/api/product/`, data);

      console.log(res);
      setProductsList([...productsList, res.data.product]);
      setOpenModel(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Admin dashboard</h1>
        <button
          className="btn btn-danger"
          style={{ position: "absolute" }}
          onClick={() => setOpenModel(true)}
        >
          create pizza
        </button>

        <div className={styles.products}>
          {products.length > 0 && (
            <Table
              data={productsList}
              type="adminProducts"
              style={{ flex: 1 }}
            />
          )}

          {products.length === 0 && <p>Loading .... </p>}
        </div>
        <div className={styles.orders}>
          {ordersList.length > 0 && (
            <Table
              data={ordersList}
              type="orders"
              updateOrderStatus={handleNextStatus}
            />
          )}
          {ordersList.length === 0 && <p>Loading .... </p>}
        </div>
      </div>

      {openModel && (
        <ProductModel openModel={setOpenModel} createPizza={createPizza} />
      )}
    </div>
  );
}

export default Admin;

export async function getServerSideProps() {
  const productsRes = await axios.get("http://localhost:3000/api/product");
  const ordersRes = await axios.get("http://localhost:3000/api/order");

  return {
    props: {
      products: productsRes.status === 200 ? productsRes.data.products : [],
      orders: ordersRes.status === 200 ? ordersRes.data.orders : [],
    },
  };
}
