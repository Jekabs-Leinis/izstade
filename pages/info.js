import styles from '../styles/Home.module.css'
import lv_data from '../config/lv.json'
import en_data from '../config/lv.json'
import ReactHtmlParser from 'react-html-parser'

export default function Home() {
  const description_lv = lv_data['info']?.description;
  const description_en = lv_data['info']?.description;
  const name_lv = lv_data['info']?.name;
  const name_en = en_data['info']?.name;

  function toHtml(value) {
    return ReactHtmlParser(value);
  }

  return (
    <div className={styles.container}>
      <main className={[styles.main, styles.newLine].join(" ")}>
        <div className={styles.alignLeft}><i>Scroll down for english</i></div><br/>
        <div className={[styles.alignLeft, styles.h2].join(" ")}>LV</div><br/>
        <div className={styles.h1}>{toHtml(name_lv)}</div><br/>
        <div>{toHtml(description_lv)}</div>
        <br/>
        <br/>
        <div className={[styles.alignLeft, styles.h2].join(" ")}>ENG</div><br/>
        <div className={styles.h1}>{toHtml(name_en)}</div><br/>
        <div>{toHtml(description_en)}</div>
      </main>
    </div>
  )
}
