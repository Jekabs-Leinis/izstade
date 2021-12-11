import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import lv_data from '../config/lv.json'

export default function Home() {
console.log("?", lv_data);
    const description_lv = lv_data['INFO'].text_lv;
    const description_en = lv_data['INFO'].text_en;
    const name = lv_data['INFO'].name;
  return (
    <div>
      <main className={[styles.main, styles.newLine].join(" ")}>
        <div className={styles.h1}>
            <b>{name}</b>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            {description_lv}
            <br/>
            <br/>
            {description_en}
        </div>
      </main>
    </div>
  )
}