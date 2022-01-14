import React from 'react';
import {useRouter} from "next/router";

export default function AudioPlayer() {
    const router = useRouter();
    console.log("in audio player btw", router.query);

    const { id } = router.query;

    //TODO implement
    function getAudioSource() {
        return "/mp3/dog.mp3"
    }

    return (
        <div>player for {id}
            <audio id="player" controls>
                <source id="audio" src="/mp3/dog.mp3" type="audio/mpeg" />
                Your browser does not support audio
            </audio>
        </div>
    )
};
