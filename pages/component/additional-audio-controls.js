import React from 'react';
import {useRouter} from "next/router";

export default function AdditionalAudioControls() {
    const router = useRouter();
    console.log("get playerId", router.query);

    const { id } = router.query;

    function handleClick() {
        motion.update(2)
    }

    function startPlaying() {
        motion.update({velocity:1.0, volume: 10})
    }

    function stopPlaying() {
        motion.update({velocity:0.0})
    }

    return (
        <div>
            <button onClick={() => handleClick()}>click me</button>
            <button onClick={() => startPlaying()}>start playing</button>
            <button onClick={() => stopPlaying()}>stop playing</button>
        </div>
    )
};
