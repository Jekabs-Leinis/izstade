import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Home.module.css';
import parse from "html-react-parser";

import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'
import {ST} from "next/dist/shared/lib/utils";

export default function PersonInfo({language = 'jp'}) {
  const router = useRouter();
  const {id} = router.query;
  const name = lv_data[id]?.name;

  const paragraphs = [
    lv_data[id]?.description,
    jp_data[id]?.description,
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
    return parse(value);
  }

  if (id) {
    return (<div className={styles.container}>
      <main className={[styles.main, styles.newLine].join(" ")}>
        <h1 className={styles.h1}>{toHtml(name)}</h1>
        <h1 className={styles.h1}>
          <object className={styles.latvianSign} data={`/icon/lv/${lv_data[id].symbol}.svg`} type="image/svg+xml">
            CONTENT IS MISSING
          </object>
          <span className={styles.japaneseSign}>{jp_data[id].symbol || "CONTENT IS MISSING"}</span>
        </h1>
        <h3>
          <i>
            {lv_data[id].symbolDescription || "CONTENT IS MISSING"} / {en_data[id].symbolDescription || "CONTENT IS MISSING"}
          </i>
        </h3>
        {formattedParagraphs}
      </main>
    </div>)
  } else {
    return (<div></div>)
  }
};
