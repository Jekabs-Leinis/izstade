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

      window.onfocus = () => {
        if (player.current) {
         // player.current.volume = 1;
        }
      };

      window.onblur = () => {
        if (player.current) {
         // player.current.volume = 1;
        }
      };
    }

    return () => {
      audioSync?.stop();
      player.current?.pause();
    }
  }, [id, isPlaying]);

  function startMcorpApp() {
    let app = MCorp.app("5091800104256110023", {anon: true});
    app.run = function () {
      let motion = app.motions["iru-master"];
      motion.update({velocity: 1.0});

      motion.on("timeupdate", function (e) {
        // console.log("pos change?", e.pos, e);

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
    audioSync = MCorp.mediaSync(player.current, motion);
  }

  function getAudioSource() {
    return "/mp3/" + id + ".opus"
  }

  return (
    <div className={styles.player}>
      {isPlaying ?
        <audio id="player" ref={player} controls>
          <source id="audio" src={getAudioSource()} type="audio/mpeg"/>
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
