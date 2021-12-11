import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import { useRouter } from 'next/router'
import lv_data from '../../config/lv.json'

export default function Voice() {
    useEffect(() => {
      console.log('mount it!');
      const player = document.getElementById("player");
      player.currentTime = 25;
      player.play();
    }, []);

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
          audio: {id} - {description}
          <audio id="player" controls>
            <source id="audio" src="/mp3/dog.mp3" type="audio/mpeg" />
            Your browser does not support audio
          </audio>
        </div>
      </main>
    </div>
  )
}