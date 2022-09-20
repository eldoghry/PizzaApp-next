import Head from "next/head";
import styles from "../styles/Home.module.css";
import Features from "../components/Features";
import PizzaList from "../components/Pizzalist";
import axios from "axios";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant App</title>
        <meta name="description" content="best pizza in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Features />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/product");

  return {
    props: {
      pizzaList: res.status === 200 ? res.data.products : [],
    },
  };
}
