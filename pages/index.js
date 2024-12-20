import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import lv_data from '../config/lv.json'

export default function Home() {
  const keys = Object.keys(lv_data)
    .filter(name => !lv_data[name]?.redirect);
    // .filter(name =>  name === 'master' || lv_data[name].description !== "") TODO: uncomment this before launch

  function personButton(id) {
    const name = lv_data[id].name;
    const link = lv_data[id].link;

    return (
      <Link key={id} href={link} className={styles.card}>
        {name}
      </Link>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>I Ru</title>
        <meta name="description" content="I Ru" />
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {keys.map(id => personButton(id))}
        </div>
      </main>
    </div>
  )
}

