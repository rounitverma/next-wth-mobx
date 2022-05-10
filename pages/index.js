//import { useState } from 'react';
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { observer } from "mobx-react";
import { useStore } from "../stores/";

const Data = observer(() => {
  const [update, setUpdate] = useState(false);
  const { store } = useStore();
  const dataStore = store.dataStore;
  useEffect(() => {
    dataStore.fetchDataFromServer();
  }, [update]);
  return (
    <div>
      <div className={styles.counter}>{dataStore.data.id}</div>
      <button onClick={() => setUpdate((prevState) => !prevState)}>
        Fetch New Data
      </button>
    </div>
  );
});

const Home = () => {
  return (
    <div>
      <Data />
    </div>
  );
};

export default Home;
