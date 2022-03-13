import React, {useEffect, useState} from 'react'
import styles from '../styles/SameLevel.module.css'
import {useRouter} from "next/router";
import mapping from '../config/mapping.json'

export default function Voice() {
    const router = useRouter();
    const {id} = router.query;
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (id !== undefined) {
            if (Object.keys(mapping).includes(id)) {
                router.push(mapping[id]);
            } else {
                setHasError(true);
            }
        }
    }, [id]);

    return (hasError
            ? (<p className={styles.p}>The site that you are looking for doesn&apos;t exist</p>) : <div></div>
    );
};
