import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
            <Link href="/voice/aksel">
                <a className={styles.card}>
                    Aksels
                </a>
            </Link>
            <Link href="/voice/liga">
                <a className={[styles.card, styles.list].join(" ")}>
                    Līga
                </a>
            </Link>
        </div>
      </main>
    </div>
  )
}
