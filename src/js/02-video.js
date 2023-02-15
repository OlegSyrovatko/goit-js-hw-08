
import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) player.setCurrentTime(currentTime)

const saveCurrentTime = function (time) {
    localStorage.setItem("videoplayer-current-time", Math.round(time.seconds));
}

const getThrottle = throttle(saveCurrentTime, 1000);
player.on('timeupdate', getThrottle);



