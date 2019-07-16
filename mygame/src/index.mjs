import {LoadImage} from './assets.mjs';

const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

//draw a shape
context.fillRect(25, 25, 100, 100);

//draw an image
LoadImage('../img/ninja2.png').then(img => {
    context.drawImage(img, 25, 35);
});