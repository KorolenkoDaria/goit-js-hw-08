import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const storageKey = 'videoplayer-current-time';

const saveTime = function (data) {
    localStorage.setItem(storageKey, data.seconds)
}
const savedData = localStorage.getItem(storageKey);
if (savedData) {
    player.setCurrentTime(savedData);
} 

player.on('timeupdate', throttle(saveTime, 1000));