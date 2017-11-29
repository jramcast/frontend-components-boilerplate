import myModule from './myModule';

const paragraph = document.getElementsByClassName('component-example__hello')[0];

setInterval(
    () => { paragraph.style.color = myModule.getRandomColor(); },
    100
);
