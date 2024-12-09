import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Image from "next/image"

export default function AudioPlayer() {
  const router = useRouter();
  let player = React.createRef();
  const {id} = router.query;
  const [isPlaying, setIsPlaying] = useState(false);
  let audioSync;

  useEffect(() => {
    // console.log("page loaded", id, isPlaying);
    if (id && isPlaying) {
      startMcorpApp();

      let volume = 1;

      window.onfocus = () => {
        if (player.current) {
          player.current.volume = volume;
        }
      };

      window.onblur = () => {
        if (player.current) {
          volume = player.current.volume;
          //player.current.volume = 0;
        }
      };
    }

    return () => {
      audioSync?.stop();
      player.current?.pause();
    }
  }, [id, isPlaying]);

  function startMcorpApp() {
    let codes = [
      {appId: "5091800104256110023", motion: "iru-master"},
    ];

    let code = codes[0];

    let app = MCorp.app(code.appId, {anon: true});
    window.app = app;

    console.log("app", app);
    app.run = function () {
      console.log("app.run")
      
      let motion = app.motions[code.motion];
      motion.update({velocity: 1.0});

      window.motion = motion;

      window.testReset = () => {
        motion.update({position: 280.0, velocity: 1.0});
      }


      startSync(motion);
    };
    
    app.init();
  }

  function startSync(motion) {
    audioSync = MCorp.mediaSync(player.current, motion, {
      debug: false,
      target: 0.05,
      loop: true,
      duration: 285,
      skew: 0
    });
  }

  return (
    <div className={styles.player}>
      {isPlaying ?
        <audio id="player" preload="auto" ref={player} controls>
          <source id="audio" src={`/mp3/${id}.mp3`} type="audio/mpeg"/>
          Your browser does not support audio
        </audio>
        :
        <div>
          <Image className={styles.playBtn} onClick={() => setIsPlaying(true)} src="/icon/play_btn.png" alt="me"
                 width="200" height="200"/>
        </div>
      }
    </div>
  )
};
