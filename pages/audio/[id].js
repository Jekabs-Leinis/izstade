import React from 'react'
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import SynchronizedBy from "../component/synchronized-by";
import AudioPlayer from "../component/audio-player";
import PersonInfo from "../component/person-info";
import lv_data from '../../config/lv.json'
import {useRouter} from "next/router";

export default function Voice() {
    const router = useRouter();
    const { id } = router.query;

    if (Object.keys(lv_data).includes(id)) {
        return (<div className={styles.container}>
            <Head>
                <title>Klusuma augļi</title>
                <meta name="description" content="Klusuma augļi"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <SynchronizedBy/>
                <AudioPlayer/>
                <PersonInfo/>
            </main>
        </div>);
    } else {
        return (<p className={styles.p}>The site that you are looking for doesn&apos;t exist</p>)
    }
};
