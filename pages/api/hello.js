import React, { useState, useEffect } from 'react';
import { setTimingsrc } from 'timingsrc';
// import * as TIMINGSRC from "timing-object";

export default function handler(req, res) {
    // let to = new TIMINGSRC.TimingObject({range:[0,31]});
    let x = 2;

    res.status(200).json({ name: 'John Doe', value: x, to: 3 })
}
