import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';
import ReactHtmlParser from 'react-html-parser';

import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'

export default function PersonInfo() {
  const router = useRouter();
  const { id } = router.query;
  const name = lv_data[id]?.name;
  const description_lv = lv_data[id]?.description;
  const description_en = en_data[id]?.description;

  function toHtml(value) {
    return ReactHtmlParser(value);
  }

  function renderPersonCard(id) {
    if (Object.keys(lv_data).includes(id)) {
      return (
        <div>
          <h1 className={styles.h1}>{toHtml(name)}</h1>
          <p className={styles.p}>{toHtml(description_lv)}</p>
          <br/>
          <br/>
          <p className={styles.p}>{toHtml(description_en)}</p>
        </div>
      )
    } else {
      return (
        <p className={styles.p}>The side that you are looking for doesn't exist</p>
      )
    }
  }

  return (
    <div className={styles.container}>
      <main className={[styles.main, styles.newLine].join(" ")}>
        {renderPersonCard(id)}
      </main>
    </div>
  )
};
