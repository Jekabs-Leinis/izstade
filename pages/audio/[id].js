import React, {useEffect} from 'react'
import Head from 'next/head'
import styles from '../../styles/SameLevel.module.css'
import SynchronizedBy from "../component/synchronized-by";
import AudioPlayer from "../component/audio-player";
import PersonInfo from "../component/person-info";
import lv_data from '../../config/lv.json'
import {useRouter} from "next/router";
import LangPickerWidget from "../component/lang-picker-widget";

export default function Voice() {
  const router = useRouter();
  const {id} = router.query;
  let [language, setLanguage] = React.useState('jp');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLanguage(localStorage.getItem('lang'));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>IRu</title>
        <meta name="description" content="IRu"/>
        <link rel="icon" href="../icon/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        {
          Object.keys(lv_data).includes(id)
            ? (<div>
              <LangPickerWidget onLanguageChange={(lang) => setLanguage(lang)}/>
              <AudioPlayer/>
              <PersonInfo language={language}/>
              <SynchronizedBy/>
            </div>)
            : (<p className={styles.p}>The site that you are looking for doesn&apos;t exist</p>)
        }
      </main>
    </div>
  );
};
