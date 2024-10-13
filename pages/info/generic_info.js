import styles from '../../styles/Home.module.css'
import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'
import ReactHtmlParser from 'react-html-parser'
import Head from "next/head";

export default function Home({ info_key }) {
  const description_lv = lv_data[info_key]?.description;
  const description_en = en_data[info_key]?.description;
  const description_jp = jp_data[info_key]?.description;
  const name_lv = lv_data[info_key]?.name;
  const name_en = en_data[info_key]?.name;
  const name_jp = jp_data[info_key]?.name;

  if (!description_lv || !description_en || !description_jp) {
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
      <main className={[styles.main, styles.newLine].join(" ")}>
        <div className={styles.alignLeft}><i>Scroll down for english end latvian</i></div>
        <br/>
        <div className={[styles.alignLeft, styles.h2].join(" ")}>JP</div>
        <br/>
        <div className={styles.h1}>{toHtml(name_jp)}</div>
        <br/>
        <div>{toHtml(description_jp)}</div>
        <br/>
        <br/>
        <div className={[styles.alignLeft, styles.h2].join(" ")}>ENG</div>
        <br/>
        <div className={styles.h1}>{toHtml(name_en)}</div>
        <br/>
        <div>{toHtml(description_en)}</div>
        <br/>
        <br/>
        <div className={[styles.alignLeft, styles.h2].join(" ")}>LV</div>
        <br/>
        <div className={styles.h1}>{toHtml(name_lv)}</div>
        <br/>
        <div>{toHtml(description_lv)}</div>
      </main>
    </div>
  )
}
