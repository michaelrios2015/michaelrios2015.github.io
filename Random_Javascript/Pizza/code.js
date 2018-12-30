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
var fill = "red";
var speed = 10;

var goingR = true;

	var growing = true;
var headX = width / 4;
headY = height / 8;

headWidth = height / 2;
headHeight = height / 2;

//var i = 0;

var keysDown = {};
//var key = true;

console.log(keysDown);

//ctx.fillStyle = "#FF00FF";
//ctx.fillRect(0, 0, width, height);


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


	
	ctx.beginPath();
ctx.arc(this.x,this.y, this.radius, this.startAngle,this.finishAngle);

	
	ctx.stroke();
ctx.fillStyle=fill;
	ctx.beginPath();
ctx.moveTo(this.x ,this.y );
ctx.lineTo(this.x + this.radius * Math.cos(this.startAngle) , this.y + this.radius * Math.sin(this.startAngle) );


ctx.lineTo(this.x + this.radius * Math.cos(this.finishAngle), this.y + this.radius*Math.sin(this.finishAngle));
	//console.log(this.y + this.radius * Math.sin(this.startAngle));
ctx.lineTo(this.x, this.y);
	ctx.fill();
	ctx.stroke();
	
	
};




drawCirlce.prototype.update = function() {
//console.log(keysDown);
/*	
	if (keysDown.length === 0) {
				 this.radius += .1;	
	
//this.startAngle += .01;
 this.finishAngle += .01;
		
	}
*/	


	 for (var key in keysDown) {
		 
        var value = Number(key);
		 
	
		 
if (value == 37) {

		
		 	if (this.radius < width/2 && growing){
		this.radius += 5;
				console.log(growing);
	} else if (this.radius > 0){
		this.radius -= 5;

		fill ="pink";
		growing = false;
		console.log(growing);
	} else{
		growing = true;
		fill = "red";
		//this.x += 10;
	}
		;
	
	
		//this.radius += 5;	
	
this.startAngle += .5;
 this.finishAngle += .5;

		 
/*} else{
		
		 	if (this.radius > 0){
		this.radius -=  5;
			
	};			 //this.radius -= 5;	
	
this.startAngle -= .5;
 this.finishAngle -= .5;
	
*/	
}
//console.log(value); 
//		 console.log(keysDown);

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



window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
});





















