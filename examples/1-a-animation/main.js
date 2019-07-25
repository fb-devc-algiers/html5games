var canvas = document.querySelector('canvas');
//Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Create 2d rendering context
var ctx = canvas.getContext('2d');

//the circle initial position
var x = 50;
var y = 50;

//the circle size
var radius = 30;

//the circle moves speed
var speedx = 8;
var speedy = 8;


//animation routine
function animate(){
    //method the perform animation in the browser
    //calling the same function to make an infinite recursive motion
    requestAnimationFrame(animate);

    //erase the defined area
    ctx.clearRect(0,0,innerWidth,innerHeight);

    //move the circle position
    //and make it bounce on the borders
    if(x + radius > innerWidth || x - radius < 0){
        speedx = -speedx;
    }
    x += speedx;

    if(y + radius > innerHeight || y - radius < 0){
        speedy = -speedy;
    }
    y += speedy;

    //draw the circle
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.fillStyle = 'rgba(0,255,0,0.5)';
    ctx.fill();
}

//run the function animate
animate();
