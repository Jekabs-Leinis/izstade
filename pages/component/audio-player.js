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
         player.current.volume = 0;
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
      {appId: "4952025322445042341", motion: "audio-sync"},
      {appId: "731711129985873604", motion: "iru-japan"},
      {appId: "5091800104256110023", motion: "iru-master"},
    ];
    
    let code = codes[1];
    
    let app = MCorp.app(code.appId, {anon: true});
    app.run = function () {
      let motion = app.motions[code.motion];
      motion.update({velocity: 1.0});
      
         // window.testReset = () => {
         //   motion.update({position: 280.0, velocity: 1.0});
         // }
      
      let isResetting = false;

      motion.on("timeupdate", function (e) {
        // console.log("pos change?", e.pos, e);
         
        if (e.pos < 100) {
          isResetting = false;
        }

        //285 sec == 4:45 end of MP3
        if (e.pos >= 285) {
          if (isResetting) {
            return;
          }

          isResetting = true;

          if (id === "master") {
            resetSync(motion);
          } else {
            // Other pages can reset, but only if the main page fails to do so
            setTimeout(() => resetSync(motion), 5000);
            // console.log("Not master, resetting in 5 seconds")
          }
        }
      });

      startSync(motion);
    };
    app.init();
  }
  
  function resetSync(motion) {
    if (motion.query().pos < 285) {
      // console.log("Not resetting, pos is", motion.query().pos);
      
      return;
    }
    
    motion.update({position: 0.0, velocity: 0.0});
    
    // Wait 2.5 seconds to reduce desync on reset
    setTimeout(() => motion.update({velocity: 1.0}), 2500);
    
    // console.log("Resetting")
  }

  function startSync(motion) {
    audioSync = MCorp.mediaSync(player.current, motion, { debug: false, target: 0.05 });
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
