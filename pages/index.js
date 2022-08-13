import Head from "next/head";
import styles from "../styles/Home.module.css";
import Features from "../components/Features";
import PizzaList from "../components/Pizzalist";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant App</title>
        <meta name="description" content="best pizza in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Features />
      <PizzaList />
    </div>
  );
}
