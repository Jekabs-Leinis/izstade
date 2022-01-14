import React from 'react'
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import SynchronizedBy from "../component/synchronized-by";
import AudioPlayer from "../component/audio-player";
import PersonInfo from "../component/person-info";

export default function Voice() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Klusuma augļi</title>
                <meta name="description" content="Klusuma augļi" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <PersonInfo/>
                    <AudioPlayer/>
                    <SynchronizedBy/>
                </div>
            </main>
        </div>
    )
};
