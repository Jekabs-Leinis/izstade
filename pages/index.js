import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klusuma augļi</title>
        <meta name="description" content="Klusuma augļi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/voice/akcel" className={styles.card}>
            Aksels
          </a>
          <a href="/voice/liga" className={[styles.card, styles.list].join(" ")}>
            Līga
          </a>
        </div>
      </main>
    </div>
  )
}
