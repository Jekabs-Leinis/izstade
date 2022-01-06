import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import { useRouter } from 'next/router'
import lv_data from '../../config/lv.json'

export default function Voice() {
    let timingProvider = {position:2};

    useEffect(() => {
        let aScript = document.createElement('script');
        aScript.type = "text/javascript";
        aScript.src = "https://www.mcorp.no/lib/mcorp-2.0.js";

        document.head.appendChild(aScript);
        aScript.onload = () => {
            console.log("whaaatrewerwer?", MCorp);
            let app = MCorp.app("4952025322445042341");

            console.log("mb now?");
            app.run = function () {
                var motion = app.motions["shared"];
                motion.on("timeupdate", function (e) {
                    console.log("pos change?",e);
                });

                motion.update(1);
            };
            app.init();
        };

        let mediaSyncScript = document.createElement("script");
        mediaSyncScript.type = "text/javascript";
        mediaSyncScript.src = "https://mcorp.no/lib/mediasync.js";

        document.head.appendChild(mediaSyncScript);

        mediaSyncScript.onload = () => {
            console.log("media sync loaded");
            // MCorp.mediaSync(document.getElementById('player'), to);
        };

        let anotherScript = document.createElement("script");
        anotherScript.type = "text/javascript";
        anotherScript.src = "https://webtiming.github.io/timingsrc/lib/timingsrc-esm-v3.js";

        anotherScript.onload = () => {
            console.log("whaaat?");
            //OK this could go on server side
            let to = new TIMINGSRC.TimingObject({provider:timingProvider});
            console.log("to...", to);
        };
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
};
