
import Vimeo from "@vimeo/player";
// import throttle from "lodash.throttle"; 
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

// const makeApiRequestThrottled = useRef(throttle(makeApiRequestT, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) player.setCurrentTime(currentTime)



// const throttledSaveCurrentTime = throttle(vvv, 1000);
// const vvv = sTime() {  }
// const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);
// throttle(, 3000);

// const saveCurrentTime = function () {
//     console.log(callback.seconds);
//     localStorage.setItem("videoplayer-current-time", callback.seconds);
// }

// player.on('timeupdate', function (callback) {
//     const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);
// });



// const CURRENT_TIME = 'videoplayer-current-time';
// const videoFrame = document.querySelector('#vimeo-player');


const saveCurrentTime = function (time) {
    let stopedTime = { seconds: Math.floor(time.seconds) };
    localStorage.setItem(CURRENT_TIME, JSON.stringify(stopedTime));
    console.log(stopedTime);
};
const throttledSaveCurrentTime = throttle(saveCurrentTime, 2000);

player.on('timeupdate', throttledSaveCurrentTime);
const seconds = localStorage.getItem(CURRENT_TIME);

player.setCurrentTime(JSON.parse(seconds).seconds);