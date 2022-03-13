import React, {useEffect} from 'react'
import styles from '../styles/SameLevel.module.css'
import {useRouter} from "next/router";
import mapping from '../config/mapping.json'

export default function Voice() {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (Object.keys(mapping).includes(id)) {
            router.push(mapping[id]);
        }
    }, [id]);

    return(
        <div className={styles.container}>
            {
                Object.keys(mapping).includes(id)
                    ? (<div></div>)
                    : (<p className={styles.p}>The site that you are looking for doesn&apos;t exist</p>)
            }
        </div>
    );
};
