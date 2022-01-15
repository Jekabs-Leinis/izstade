import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";

export default function AudioPlayer() {
    const router = useRouter();
    const {id} = router.query;
    const [isPlaying, setIsPlaying] = useState(false);
    let player;
    let audioSync;

    useEffect(() => {
        // console.log("page loaded", id, isPlaying);
        if (id && isPlaying) {
            startMcorpApp();
        }

        return () => {
            audioSync?.stop();
            player?.pause();
        }
    }, [id, isPlaying]);

    function startMcorpApp() {
        let aScript = document.createElement('script');
        aScript.type = "text/javascript";
        aScript.src = "https://www.mcorp.no/lib/mcorp-2.0.js";

        document.head.appendChild(aScript);
        aScript.onload = () => {
            let app = MCorp.app("4952025322445042341", {anon: true});
            app.run = function () {
                let motion = app.motions["audio-sync"];
                motion.update({velocity: 1.0});

                motion.on("timeupdate", function (e) {
                    // console.log("pos change?", e.pos, e);

                    //548 == 9:08 end of MP3
                    if (e.pos >= 548 && e.vel == 0) {
                        motion.update({position:0.0, velocity: 1.0});
                    }
                });

                startSync(motion);
            };
            app.init();
        };
    }

    function startPlaying() {
        setIsPlaying(true);
    }

    function startSync(motion) {
        let mediaSyncScript = document.createElement("script");
        mediaSyncScript.type = "text/javascript";
        mediaSyncScript.src = "https://mcorp.no/lib/mediasync.js";

        document.head.appendChild(mediaSyncScript);

        mediaSyncScript.onload = () => {
            player = document.getElementById("player");
            audioSync = MCorp.mediaSync(player, motion);
        };
    }

    function getAudioSource() {
        return "/mp3/" + id + ".mp3"
    }

    return (
        <div className={styles.player}>
            {isPlaying ?
                <audio id="player" controls>
                    <source id="audio" src={getAudioSource()} type="audio/mpeg"/>
                    Your browser does not support audio
                </audio>
                :
                <div>
                    <button onClick={() => startPlaying()}>start playing</button>
                </div>
            }
        </div>
    )
};
