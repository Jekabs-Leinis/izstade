import TimingObject from "https://webtiming.github.io/timingsrc/lib/timingsrc-esm-v3.js";
import MCorp from "http://www.mcorp.no/lib/mcorp-2.0.js";

const to = new TimingObject({range:[0,100]});
const sync = MCorp.mediaSync(document.getElementById('player'), to);

let MCORP_MOTION_NAME = "your_motion_name";
let MCORP_APP_ID = "your_appid";

let app = MCorp.app(MCORP_APP_ID, {anon:true});
app.run = function () {
    let timingProvider = app.motions[MCORP_MOTION_NAME];
    if (document.readyState === "complete") {
      console.log("readyState");
    } else {
        window.onload = function () {
            console.log("windows on load");
        };
    }
};
app.init();
