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
    let app = MCorp.app("731711129985873604", {anon: true});
    app.run = function () {
      let motion = app.motions["iru-japan"];
      motion.update({velocity: 1.0});

      motion.on("timeupdate", function (e) {
        console.log("pos change?", e.pos, player.current?.currentTime, e);

        //285 sec == 4:45 end of MP3
        if (e.pos >= 285) {
          motion.update({position: 0.0, velocity: 1.0});
        }
      });

      startSync(motion);
    };
    app.init();
  }

  function startSync(motion) {
    audioSync = MCorp.mediaSync(player.current, motion, { target: 0.05 });
  }

  return (
    <div className={styles.player}>
      {isPlaying ?
        <audio id="player" preload="auto" ref={player} controls>
          {/*<source id="audio" src={`/opus/${id}.opus`} type="audio/ogg; codecs=opus"/>*/}
          {/*<source id="audio" src={`/m4a/${id}.m4a`} type="audio/mp4"/>*/}
          <source id="audio" src={`/mp3/${id}.mp3`} type="audio/mpeg"/>
          Your browser does not support audio
        </audio>
        :
        <div>
          <Image className={styles.playBtn} onClick={() => setIsPlaying(true)} src="/icon/play_btn.png" alt="me"
                 width="200%" height="200%"/>
        </div>
      }
    </div>
  )
};
