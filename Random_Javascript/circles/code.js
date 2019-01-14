console.log("hello");

var animate = window.requestAnimationFrame;


//create canvas
var canvas = document.createElement("canvas");
canvas.id = 'cID';
console.log(canvas);
var width = window.innerWidth;
var height = window.innerHeight;
console.log(width)
canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");


//draw circle
var cirlce = new drawCirlce(width/2, height/2, 40, 0, .5);
var color = "#000000";
var speed = 10;
var counterC = true;

var goingR = true;

var sColor="red";
var headX = width / 4;
headY = height / 8;

headWidth = height / 2;
headHeight = height / 2;

// draw rectangle
ctx.fillStyle = "#FF00FF";
ctx.fillRect(0, 0, width, height);


var render = function() {
    //console.log("render");

	cirlce.render();
    
};



//defines circle
function drawCirlce(x, y, radius, startAngle, finishAngle) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
	this.finishAngle = finishAngle;
	

}

//draws the circle
drawCirlce.prototype.render = function() {


ctx.beginPath();
ctx.moveTo(this.x,this.y);
ctx.lineTo(this.x + this.radius * Math.cos(this.finishAngle), this.y + this.radius*Math.sin(this.finishAngle));
//console.log(this.y +  this.radius * Math.sin(this.finishAngle - this.startAngle));

ctx.strokeStyle=sColor;
ctx.stroke();
	
	
};



drawCirlce.prototype.update = function() {

//I should understand this better
if(this.finishAngle % 2*Math.PI < .5  && counterC){
    if(this.radius <= width/2){
		this.radius +=1}	
	
//this.startAngle += .01;
 this.finishAngle += .01;
 console.log("finish angle is", this.finishAngle % 2*Math.PI);
 }

 else if(counterC){
		this.finishAngle +=.01;
		counterC = false;
		sColor="black";
	} else{
		counterC = true;
		sColor ="red";
	}
    
	

};



var step = function() {
    cirlce.update();

    render();
    animate(step);
};



window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};












