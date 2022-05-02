//import { useState } from 'react';
import Head from "next/head";
import styles from "./index.module.scss";
import { observer } from "mobx";
import store from "./store";

const Counter = () => {
  //const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <div className={styles.button} onClick={() => store.decrement()}>
        -
      </div>
      <div className={styles.count}>{store.counter}</div>
      <div className={styles.button} onClick={() => store.increment()}>
        +
      </div>
      <div
        className={`${styles.button} ${styles.resetButton}`}
        onClick={() => store.reset()}
      >
        Reset
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Counter />
    </div>
  );
}
