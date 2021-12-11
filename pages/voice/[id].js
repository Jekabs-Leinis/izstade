import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import { useRouter } from 'next/router'
import lv_data from '../../config/lv.json'

export default function Voice() {
    function play() {
        var audio = document.getElementById('dog');
        audio.currentTime = 12;
        audio.play();
    }
    const router = useRouter()
    const { id } = router.query
    const description = lv_data[id]?.description

  return (
    <div className={styles.container}>
      <Head>
        <title>Klusuma augļi</title>
        <meta name="description" content="Klusuma augļi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          voice: {id} - {description}
          <audio id='dog' src='/mp3/dog.mp3'></audio>
          <button onClick={play}>Click</button>
        </div>
      </main>
    </div>
  )
}