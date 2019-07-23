var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth-200;
canvas.height = window.innerHeight-200;

var c = canvas.getContext('2d');

var rectDx = 8;

function checkCollision(circle, rect){
    if((circle.y + circle.radius > canvas.height-20) && 
    (circle.x >rect.x && circle.x < rect.x+rect.width)){
        return true;
    }
    return false;
}

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
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;

        if(checkCollision(this, rect)){
            this.dy = -Math.abs(this.dy);
        }
        if(this.y - this.radius < 0){
            this.dy = Math.abs(this.dy);
        }
        this.y += this.dy;

        if(this.y + this.radius > canvas.height){
            this.y = 0;
            this.dy = 8;
        }

        this.draw();
    }
} 

function Rectangle(x,y,width,height){

    this.strokeStyle = 'black';
    this.fillStyle = 'yellow';
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function() {
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.fillStyle;
        c.fill();
        c.strokeStyle = this.strokeStyle;
        c.stroke();
    }

    this.update = function(){
        if((k.ArrowRight == 1) && (this.x+this.width+rectDx) < canvas.width){
            this.x += rectDx;
        }
        if((k.ArrowLeft == 1) && (this.x - rectDx > 0) ){
            this.x -= rectDx;
        }
        this.draw();
    }

}


var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var dx = 5;
var dy = 5;
var radius = 30;

var circle = new Circle(x,y,dx,dy,radius)
var rect = new Rectangle(50,canvas.height-20,400,20);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    circle.update();
    rect.update();
}


var k = { ArrowLeft:0, ArrowRight:0};
onkeydown = d=> k[d.key] = 1;
onkeyup = d=> k[d.key] = 0;
animate();
