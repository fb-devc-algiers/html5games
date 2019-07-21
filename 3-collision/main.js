var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var rectDx = 0;

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeStyle = 'blue';
    this.fillStyle = 'rgba(255,0,255,0.5)';

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.strokeStyle = this.strokeStyle;
        c.stroke();
        c.fillStyle = this.fillStyle;
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

function Rectangle(x,y,width,height){
    this.strokeStyle = 'black';
    this.fillStyle = 'yellow';
    this.x = x;
    this.draw = function() {
        c.rect(x, y, width, height);
        c.fillStyle = this.fillStyle;
        c.fill();
        c.strokeStyle = this.strokeStyle;
        c.stroke();
    }

    this.update = function(){
        this.x += rectDx;
        this.draw();
    }

}


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 8;
var dy = 8;
var radius = 30;

var circle = new Circle(x,y,dx,dy,radius)
var rect = new Rectangle(50,innerHeight-20,150,20);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    circle.update();
    rect.update();
}


window.addEventListener('mousemove', function (event) {
    if(event.x > this.innerWidth/2) {
        rectDx = 40;
    } else {
        rectDx = -40; 
    }
  })

animate();
