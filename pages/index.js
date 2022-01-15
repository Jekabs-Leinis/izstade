import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import lv_data from '../config/lv.json'

export default function Home() {
  const keys = Object.keys(lv_data)

  function personButton(id) {
    const name = lv_data[id].name;
    const link = lv_data[id].link;

    return (
      <Link key={id} href={link}>
        <a className={styles.card}>
          {name}
        </a>
      </Link>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Klusuma augļi</title>
        <meta name="description" content="Klusuma augļi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {keys.map(id => personButton(id))}
        </div>
      </main>
    </div>
  )
}

