import {LoadImage} from './assets.mjs';


const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

//1-draw a shape
context.fillRect(25, 25, 100, 100);

//2-draw an image
LoadImage('../img/ninja2.png').then(img => {
    context.drawImage(img, 25, 35);
});

//3-drawing a background
context.fillStyle = '#e2fcbf';
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//3-Positioning and Resizing the Canvas
const VIEWPORT_HEIGHT = 1080;
const VIEWPORT_WIDTH = 720;
const SCREEN_VIEWPORT_RATIO = window.innerHeight / VIEWPORT_HEIGHT;
canvas.setAttribute('height', window.innerHeight);
canvas.setAttribute('width', VIEWPORT_WIDTH *
SCREEN_VIEWPORT_RATIO);

//3-Scaling Content on the Canvas
LoadImage('../img/ninja2.png').then(img => {
    context.drawImage(
        img,
        25 * SCREEN_VIEWPORT_RATIO,
        128 * SCREEN_VIEWPORT_RATIO);
});