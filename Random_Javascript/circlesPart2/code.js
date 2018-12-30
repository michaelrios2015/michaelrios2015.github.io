console.log("hello");

var animate = window.requestAnimationFrame;

var canvas = document.createElement("canvas");
canvas.id = 'cID';
console.log(canvas);
var width = 400;
var height = 400;
canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");
var cirlce = new drawCirlce(200, 200, 40, 0, .5);
var color = "#000000";
var speed = 10;
var counterC = true;

var goingR = true;

var sColor="red";
var headX = width / 4;
headY = height / 8;

headWidth = height / 2;
headHeight = height / 2;


ctx.fillStyle = "#FF00FF";
ctx.fillRect(0, 0, width, height);


var render = function() {
    //console.log("render");

	cirlce.render();
    

};




function drawCirlce(x, y, radius, startAngle, finishAngle) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
	this.finishAngle = finishAngle;
	
	

}

drawCirlce.prototype.render = function() {
	
//	ctx.beginPath();
//ctx.arc(this.x,this.y, this.radius, this.startAngle,this.finishAngle);

	//ctx.stroke();
ctx.beginPath();
ctx.moveTo(this.x,this.y);
ctx.lineTo(this.x + this.radius * Math.cos(this.finishAngle), this.y + this.radius*Math.sin(this.finishAngle));
	//console.log(this.y +  this.radius * Math.sin(this.finishAngle - this.startAngle));
ctx.strokeStyle=sColor;
	ctx.stroke();
	
	
};




drawCirlce.prototype.update = function() {

if(this.finishAngle <= 2.5*Math.PI && counterC){
    this.radius += 1;	
	
//this.startAngle += .01;
 this.finishAngle += .01;}
	else if(this.finishAngle > 0){
		this.finishAngle -=.01;
		counterC = false;
		sColor="black";
	} else{
		counterC = true;
		sColor ="red";
	}
    
	
	if (this.x < 400 && goingR) { 
	this.x += 1;
	this.y += 1;	
	console.log(this.x)
	}
	else{
		goingR = false;
	}
	
	if (this.x >0 && !goingR) {
		console.log("else this.x");
		this.x -= 1;
		this.y -= 1;
		goingR = false;
	}
	
	else{
		goingR = true;
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







//var i = 0;
//var keysDown = {};
//var key = true;
















