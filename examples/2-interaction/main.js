var canvas = document.querySelector('canvas');

//Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create 2d rendering context
var c = canvas.getContext('2d');

//the circle object decalaration
function Circle(x,y,dx,dy,radius){

    //the circle properties
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    //the drawing method
    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = 'rgba(255,0,255,0.5)';
        c.fill();
    }

    //the moving method
    this.update = function(){
        
        //if the user click on the ball, make is invisible
        if(Math.abs(mousex - this.x) < this.radius &&
        Math.abs(mousey - this.y) < this.radius) {
            this.radius = 0;
            mousex = -400
            mousey = -400
        }

        //move the circle position 
        //and make it bounce if it touch the canvas border
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.y += this.dy;

        //then draw it
        this.draw();
    }
} 

//an array to keep all the circles to create
var circleArray = [];

//create 100 circles randomly
for (let i = 0; i < 20; i++) {
    //random positionning
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;

    //random speed
    var dx = (Math.random()-0.5)*8;
    var dy = (Math.random()-0.5)*8;

    //same size
    var radius = 100;

    //push the circle object in the array
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


//animation routine
function animate(){
    //method the perform animation in the browser
    //calling the same function to make an infinite recursive motion
    requestAnimationFrame(animate);

    //erase the defined area
    c.clearRect(0,0,innerWidth,innerHeight);

    //move every ball in the array
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

//set a default mouse coordinates far from the balls
var mousex = -400
var mousey = -400

//get the mouse click position
window.addEventListener('click', function (event) {
    mousex = event.x
    mousey = event.y
  })

//run the function animate
animate();
