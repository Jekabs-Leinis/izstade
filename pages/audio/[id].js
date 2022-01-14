import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import { useRouter } from 'next/router'
import lv_data from '../../config/lv.json'
import SynchronizedBy from "../component/synchronizedBy";
import AudioPlayer from "../component/audio-player";

export default function Voice() {
    let motion = null;

    useEffect(() => {
        let anotherScript = document.createElement("script");
        anotherScript.type = "text/javascript";
        anotherScript.src = "https://webtiming.github.io/timingsrc/lib/timingsrc-v2.js";

        document.head.appendChild(anotherScript);

        anotherScript.onload = () => {
            timingObjectLoaded();
        };
    }, []);

    function timingObjectLoaded() {
        console.log("whaaat?");
        let to = new TIMINGSRC.TimingObject({range:[0,100]});
        console.log("to...", to);

        let aScript = document.createElement('script');
        aScript.type = "text/javascript";
        aScript.src = "https://www.mcorp.no/lib/mcorp-2.0.js";

        document.head.appendChild(aScript);
        aScript.onload = () => {
            let app = MCorp.app("4952025322445042341");
            app.run = function () {
                motion = app.motions["shared"];
                motion.on("timeupdate", function (e) {
                    console.log("pos change?",e.pos, e, to.pos);
                    to.update({position: e.pos, velocity: e.vel});
                });
            };
            app.init();
        };

        let mediaSyncScript = document.createElement("script");
        mediaSyncScript.type = "text/javascript";
        mediaSyncScript.src = "https://mcorp.no/lib/mediasync.js";

        document.head.appendChild(mediaSyncScript);

        mediaSyncScript.onload = () => {
            console.log("media sync loaded");
            MCorp.mediaSync(document.getElementById('player'), to);
            MCorp.mediaSync(document.getElementById('player2'), to);
//            MCorp.mediaSync(document.getElementById('video'), to);
        };
    }

    function handleClick() {
        motion.update(2)
    }

    function startPlaying() {
        motion.update({velocity:1.0, volume: 10})
    }

    function stopPlaying() {
        motion.update({velocity:0.0})
    }

    const router = useRouter();
    const { id } = router.query;
    const description = lv_data[id]?.description;
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

          <audio id="player2" controls>
              <source id="audio" src="/mp3/dog.mp3" type="audio/mpeg" />
              Your browser does not support audio
          </audio>
          <button onClick={() => handleClick()}>click me</button>
          <button onClick={() => startPlaying()}>start playing</button>
          <button onClick={() => stopPlaying()}>stop playing</button>
        </div>
        <AudioPlayer/>
        <SynchronizedBy/>
      </main>
    </div>
  )
};
