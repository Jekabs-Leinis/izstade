import React from 'react';
import {useRouter} from "next/router";

import lv_data from '../../config/lv.json'

export default function PersonInfo() {
    const router = useRouter();
    const { id } = router.query;
    const description = lv_data[id]?.description;

    return (
        <div>audio: {id} - {description}</div>
    )
};
