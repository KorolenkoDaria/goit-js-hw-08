import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
// console.log(player);

const storageKey = 'videoplayer-current-time';

const saveTime = function (data) {
    localStorage.setItem(storageKey, data.seconds)
}

if (localStorage.getItem(storageKey)) {
    player.setCurrentTime(localStorage.getItem(storageKey))
} 

player.on('timeupdate', throttle(saveTime, 1000));