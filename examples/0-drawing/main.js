var canvas = document.querySelector('canvas');
//Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create 2d rendering context
var ctx = canvas.getContext('2d');

//Draw a rectangle
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.fillRect(100,100,150,100);

//Draw rectangle 2
ctx.fillStyle = 'rgba(0,0,255,0.5)';
ctx.fillRect(100,400,100,150);

//Draw rectangle 3
ctx.fillStyle = 'rgba(0,255,0,0.5)';
ctx.fillRect(300,300,100,100);

//Draw a line
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(300,100);
ctx.lineTo(400,300);
ctx.strokeStyle = "#fa34a3";
ctx.stroke();

//Draw a circle
ctx.arc(300,300,30,0,Math.PI*2,false);
ctx.stroke();
