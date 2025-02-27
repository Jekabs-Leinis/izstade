 import React, {useEffect} from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import SynchronizedBy from "../component/synchronized-by";
import AudioPlayer from "../component/audio-player";
import PersonInfo from "../component/person-info";
import lv_data from '../../config/lv.json'
import {useRouter} from "next/router";

export default function Voice() {
  const router = useRouter();
  const {id} = router.query;
  if (lv_data[id]?.redirect) {
    router.push(lv_data[id].redirect);
    
    return null;
  }
  useEffect(() => {
    if (!("wakeLock" in navigator)) {
      console.error("Wake Lock API not supported.");

      return;
    }
    
    console.log("Wake Lock API is supported.")
    
    let getWakeLock = async () => {
      try {
        return await navigator.wakeLock.request("screen");
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);

        return null;
      }
    }
    
    let lock = getWakeLock()
      .then(() => console.log("Wake Lock is active"));
    
    document.addEventListener("visibilitychange", async () => {
      if (lock !== null && document.visibilityState === "visible") {
        lock = getWakeLock()
          .then(() => console.log("Wake Lock reactivated"));
      }
    });
  }, [id]);
  
  const name = lv_data[id]?.name;

  return (
    <div>
      <Head>
        <title>I Ru | {name}</title>
        <meta name="description" content="I Ru"/>
        <link rel="icon" href="/icon/favicon.ico"/>
        <script src="https://www.mcorp.no/lib/mcorp-2.0.js" async />
        <script src="https://mcorp.no/lib/mediasync.js" async />
      </Head>
      <main className={styles.main}>
        {
          Object.keys(lv_data).includes(id)
            ? (<div className={styles.person}>
              <AudioPlayer/>
              <PersonInfo/>
              <SynchronizedBy/>
            </div>)
            : (<p className={styles.p}>The site that you are looking for doesn&apos;t exist</p>)
        }
      </main>
    </div>
  );
};
