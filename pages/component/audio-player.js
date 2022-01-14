import React, {useEffect, createRef} from 'react';
import {useRouter} from "next/router";

export default function AudioPlayer() {
    const router = useRouter();
    const { id } = router.query;
    let player = createRef();
    let motion = null;

    useEffect(() => {
        if (id) {
            startMcorpApp();
        } else {
            console.log("wait a bit");
        }

    }, [id]);

    function startMcorpApp() {
        let aScript = document.createElement('script');
        aScript.type = "text/javascript";
        aScript.src = "https://www.mcorp.no/lib/mcorp-2.0.js";

        document.head.appendChild(aScript);
        aScript.onload = () => {
            let app = MCorp.app("3730955481553182142");
            app.run = function () {
                motion = app.motions["shared"];
                motion.on("timeupdate", function (e) {
                    console.log("pos change?",e.pos, e);
                    // to.update({position: e.pos, velocity: e.vel});
                });

                startSync(motion);
            };
            app.init();
        };
    }

    function startSync(motion) {
        let mediaSyncScript = document.createElement("script");
        mediaSyncScript.type = "text/javascript";
        mediaSyncScript.src = "https://mcorp.no/lib/mediasync.js";

        document.head.appendChild(mediaSyncScript);

        mediaSyncScript.onload = () => {
            console.log("media sync loaded", id);
            let player = document.getElementById("player");
            if (id != "master") {
                MCorp.mediaSync(player, motion);
            } else {
                player.play();

                player.onended = function() {
                    console.log("player pos", player.currentTime);

                    player.play();
                };

                player.ontimeupdate = function () {
                    if (motion) {
                        console.log("player position", player.currentTime);
                        motion.update(player.currentTime, player.playbackRate);
                    }
                }
            }
        };
    }

    //TODO implement
    function getAudioSource() {
        return "/mp3/dog.mp3"
    }

    return (
        <div>player for {id} running
            <audio ref={player} id="player" controls>
                <source id="audio" src="/mp3/dog.mp3" type="audio/mpeg" />
                Your browser does not support audio
            </audio>
        </div>
    )
};
