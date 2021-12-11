import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/SameLevel.module.css'

export default function SameLevel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klusuma augļi</title>
        <meta name="description" content="Klusuma augļi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="./newLevel" className={[styles.card, styles.yellow].join(" ")}>
            Tas pats līmenis
          </a>
        </div>
      </main>
    </div>
  )
}