﻿import styles from '../../styles/Home.module.css'
import lv_data from '../../config/lv.json'
import en_data from '../../config/en.json'
import jp_data from '../../config/jp.json'
import ReactHtmlParser from 'react-html-parser'

export default function Home() {
    const description_lv = lv_data['info_japan']?.description;
    const description_en = en_data['info_japan']?.description;
    const description_jp = jp_data['info_japan']?.description;
    const name_lv = lv_data['info_japan']?.name;
    const name_en = en_data['info_japan']?.name;
    const name_jp = jp_data['info_japan']?.name;

    function toHtml(value) {
        return ReactHtmlParser(value);
    }

    return (
        <div className={styles.container}>
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
