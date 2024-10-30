import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';
import ReactHtmlParser from 'react-html-parser';

import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'

export default function PersonInfo({language = 'jp'}) {
  const router = useRouter();
  const {id} = router.query;
  const name = lv_data[id]?.name;

  const paragraphs = [
    jp_data[id]?.description,
    lv_data[id]?.description,
    en_data[id]?.description,
  ].map((value) => value ? value : "CONTENT IS MISSING");
  
  

  const formattedParagraphs = paragraphs.map(
    (paragraph, index) => (
      <p className={styles.p} key={index}>
        {paragraph}
      </p>
    ));

  function toHtml(value) {
    // If there are 2 consequential tags in the text, the \n symbols between them are ignored.
    // This is manually fixed on case-by-case basis by inserting '⠀' U+2800 Braille Pattern Blank symbol.
    return ReactHtmlParser(value);
  }

  if (id) {
    return (<div className={styles.container}>
      <main className={[styles.main, styles.newLine].join(" ")}>
        <h1 className={styles.h1}>{toHtml(name)}</h1>
        <h1 className={styles.h1}>{lv_data[id].symbol || "CONTENT IS MISSING"}</h1>
        <h1 className={styles.h1}>{jp_data[id].symbol || "CONTENT IS MISSING"}</h1>
        {formattedParagraphs}
      </main>
    </div>)
  } else {
    return (<div></div>)
  }
};
