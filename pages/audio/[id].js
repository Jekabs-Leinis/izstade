import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import { useRouter } from 'next/router'
import lv_data from '../../config/lv.json'
import { setTimingsrc } from 'timingsrc';
import * as TIMINGSRC from "timing-object";
import Script from 'next/script'

export default function Voice() {
    useEffect(() => {
      console.log('mount it!');
      const player = document.getElementById("player");

      let to = new TIMINGSRC.TimingObject({range:[0,31]});
      // let sync = new TIMINGSRC.MediaSync(htmlElement, timingObject, options);
      to.update({position:19.0, velocity: 1.0});
      setTimingsrc(player, to);

      console.log("for reallzzz?", to)
    }, []);

    const router = useRouter();
    const { id } = router.query;
    const description = lv_data[id]?.description;
  return (
    <div className={styles.container}>
      <Head>
        <title>Klusuma augļi</title>
        <meta name="description" content="Klusuma augļi" />
        <link rel="icon" href="/favicon.ico" />
        <Script type="text/javascript" src="http://www.mcorp.no/lib/mcorp-2.0.js"></Script>
        <Script type="module" src="/js/main.js"></Script>
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
