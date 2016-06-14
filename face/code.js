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
var boxes = [];
var box = new drawBoxWDot(0, 0, 10, 10);
var box2 = new drawBoxWDot(50, 0, 10, 10);



var goingR = true;

//boxes.push(box);


for (var i = 0; i < 10; i++) {
    boxes[i] = new drawBoxWDot(i * 10, 0, 10, 10);
    console.log(boxes[i]);
    //boxes[i].render();
}



var img = new Image();
img.src = "llama.jpg";


console.log(boxes);

var render = function() {
    //background color
    //ctx.fillStyle = "#FF00FF";
    //ctx.fillRect(0, 0, width, height);
    box2.render();
    //computer.render();
    //ball.render();
    console.log("render");

    //ctx.rotate(.005);
    ctx.drawImage(img, 100, 100);
    for (var i = 0; i < boxes.length; i++) {
        console.log(boxes[i]);
        console.log(box);
        box.render();
        boxes[i].render();
    }

};



var headX = width / 4;
headY = height / 8;

headWidth = height / 2;
headHeight = height / 2;


function drawBoxWDot(x, y, height, width) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xVelocity = 1;
}

drawBoxWDot.prototype.render = function() {


    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "#0000FF";
    ctx.fillRect(this.x + this.width / 4, this.y + this.height / 4, this.width / 4, this.height / 4);

};


box.render();


drawBoxWDot.prototype.update = function() {


    if (this.width < width && goingR) {
        this.width += 1;

        this.height += 1;
        //this.x +=1;


        //boxes.push(new drawBoxWDot(0, 0, 10 ,10)); 
    } else if (this.width >= width) {
        this.width -= 1;
        this.height -= 1;
        goingR = false;
    } else if (this.width > 0 && !goingR) {
        this.width -= 1;
        this.height -= 1;
    } else {
        goingR = true;
    }
    console.log(this.x);

};



var step = function() {
    box.update();
    box2.update();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].update();
    }


    render();
    animate(step);
    console.log("step");
};



window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};








//Draw a head
ctx.strokeStyle = "#000000";
ctx.lineWidth = 4;
ctx.strokeRect(headX, headY, headWidth, headHeight);

//right eye
ctx.fillStyle = "#0000FF";
ctx.fillRect(headX + headWidth / 10, headY + headHeight / 3, headWidth / 10, headHeight / 10);

//right eyeball
ctx.fillStyle = "#000000";
ctx.fillRect(headX + headWidth / 10, headY + headHeight / 3, headWidth / 20, headHeight / 20);


//left eye
ctx.fillStyle = "#0000FF";
ctx.fillRect(175, 125, 25, 25);

//left eyeball
ctx.fillStyle = "#000000";
ctx.fillRect(175, 140, 10, 10);


//mouth
ctx.fillStyle = "#000000";
ctx.fillRect(150, 200, 50, 50);














//var i = 0;
//var keysDown = {};
//var key = true;


















/*
draw();
eyeball = new Eyeball(100, 100, 40, 40);
eyeball.render();
//animate();

function animate() {
    console.log("amimate");
	requestAnimationFrame(animate);
    draw();
	eyeball.render();
}

//draw();
/*
function eyeball(){

		ctx.fillStyle =  "#0000FF";
		ctx.fillRect(100, 100, 40, 40);

}

function Eyeball(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;


    Eyeball.prototype.render = function () {
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    };

/*    Eyeball.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    this.x_speed = x;
    this.y_speed = y;
    if (this.x < 0) {
        this.x = 0;
        this.x_speed = 0;
    } else if (this.x + this.width > 400) {
        this.x = 400 - this.width;
        this.x_speed = 0;
    } else if (this.y > 380) {
        this.y = 380;
        this.y_speed = 0;
    } else if (this.y - this.height < 10) {
        this.y = 10 + this.height;
        this.y_speed = 10;
    }
    };
    
	Eyeball.prototype.update = function () {
    for (var key in keysDown) {
		
        var value = Number(key);
		console.log(value);
        if (value == 37) {
            this.paddle.move(-4, 0);
        } else if (value == 39) {
            this.paddle.move(4, 0);
        } else if (value == 38) {
            this.paddle.move(0, -4);
        } else if (value == 40) {
            this.paddle.move(0, 4);
        }else {
            this.paddle.move(0, 0);
        }
    }
};
	
}



function draw() {
//var time = new Date().getTime()* .002 ;
//console.log(time); 

//console.log(i);

//face
//console.log("draw");
ctx.fillStyle = "#FF00FF";
ctx.fillRect(0, 0, 500, 500);

//eyeball 1
ctx.strokeRect(100, 100, 100, 100);
//eyeball();
//console.log(key);


//if (key === true) {

	//for (var key in keysDown) {
		//	var value = Number(key);
        //if (value == 37) {
		//ctx.fillStyle =  "#0000FF";
		//ctx.fillRect(100, 100, 40, 40);//}
	//}
//}
	
	/* else {
		ctx.fillStyle =  "#0000FF";
		ctx.fillRect(100, 120, 40, 40);
}
*/


/*
if (i%60 < 30){
	ctx.fillStyle =  "#0000FF";
	ctx.fillRect(100, 100, 40, 40);}
	else {
	ctx.fillStyle =  "#0000FF";
	ctx.fillRect(100, 120, 40, 40);}


//eyeball 2
ctx.strokeRect(300, 100, 100, 100);
ctx.fillStyle =  "#0000FF";
ctx.fillRect(300, 100, 40, 40);

//mouth
ctx.strokeRect(100, 300, 300, 100);
ctx.fillStyle =  "white";
ctx.fillRect(110, 302, 40, 40);

ctx.fillStyle =  "white";
ctx.fillRect(200, 302, 40, 40);

ctx.fillStyle =  "white";
ctx.fillRect(300, 302, 40, 40);

//i++;
}

/*
animate();
function init() {
    canvas = getCanvas();
    context = canvas.getContext( '2d' );
}
function draw() {
    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 38;
    var y = Math.cos( time * 0.9 ) * 96 + 38;

    context.fillStyle = 'rgb(245,245,245)';
    context.fillRect( 0, 0, 255, 255 );
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}
*/

/*
window.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
	key = true;
	console.log(keysDown[event.keyCode]);
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
	//key = false;
});


//console.log(keysDown[event.keyCode]);

*/