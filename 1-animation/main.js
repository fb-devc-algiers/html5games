var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = 'rgba(0,255,0,0.5)';
        c.fill();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.y += this.dy;

        this.draw();
    }
} 

var circleArray = [];

for (let i = 0; i < 100; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random()-0.5)*8;
    var dy = (Math.random()-0.5)*8;
    var radius = 30;
    circleArray.push(new Circle(x,y,dx,dy,radius))
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    //circle.update();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();


/* c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(300,300,100,100);

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "#fa34a3";
c.stroke();

c.arc(300,300,30,0,Math.PI*2,false);
c.stroke();

for (let index = 0; index < 300; index++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerWidth;

    c.beginPath();
    c.arc(x,y,30,0,Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
} */

/*
function Circle(x,y) {
    this.x = x;
    this.y = y;
    this.draw = function(){

    }
}

var circle = new Circle(200,200);

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;

var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    circle.clearRect(0,0,innerWidth, innerHeight);
    circle.draw();
    circle.beginPath();
    circle.arc(x,y,0,Math.PI * 2, false);
    circle.strokeStyle = 'blue';
    circle.stroke;
}
*/