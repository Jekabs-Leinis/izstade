import styles from '../../styles/Home.module.css'
import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'
import ReactHtmlParser from 'react-html-parser'
import Head from "next/head";
import LangPickerWidget from "../component/lang-picker-widget";
import React, {useEffect} from "react";

export default function Home({ info_key }) {
  let [language, setLanguage] = React.useState( 'jp');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLanguage(localStorage.getItem('lang'));
    }
  }, []);
  
  const langData = { 'jp': jp_data, 'en': en_data, 'lv': lv_data };
  const data = langData[language];

  const description = data[info_key]?.description;
  const name = data[info_key]?.name;

  if (!description) {
    console.error("No data found for info_key: " + info_key);
    
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>404 - Page Not Found</h1>
        </main>
      </div>
    )
  }
  function toHtml(value) {
    return ReactHtmlParser(value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>IRu</title>
        <meta name="description" content="IRu"/>
        <link rel="icon" href="../icon/favicon.ico"/>
      </Head>
      <LangPickerWidget onLanguageChange={(lang) => setLanguage(lang)}/>
      <main className={[styles.main, styles.newLine].join(" ")}>
        <div className={styles.h1}>{toHtml(name)}</div>
        <br/>
        <div>{toHtml(description)}</div>
      </main>
    </div>
  )
}
