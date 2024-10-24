import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';
import ReactHtmlParser from 'react-html-parser';

import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'

export default function PersonInfo({ language = 'jp' }) {
  const router = useRouter();
  const {id} = router.query;
  const name = lv_data[id]?.name;
  
  const langData = { 'jp': jp_data, 'en': en_data, 'lv': lv_data };
  
  const description = langData[language][id]?.description;

  function toHtml(value) {
    // If there are 2 consequential tags in the text, the \n symbols between them are ignored.
    // This is manually fixed on case-by-case basis by inserting '⠀' U+2800 Braille Pattern Blank symbol.
    return ReactHtmlParser(value);
  }

  function renderPersonCard() {
    return (
      <div>
        <h1 className={styles.h1}>{toHtml(name)}</h1>
        <p className={styles.p}>{toHtml(description)}</p>
      </div>
    )
  }

  if (id) {
    return (<div className={styles.container}>
      <main className={[styles.main, styles.newLine].join(" ")}>
        {renderPersonCard()}
      </main>
    </div>)
  } else {
    return (<div></div>)
  }
};
