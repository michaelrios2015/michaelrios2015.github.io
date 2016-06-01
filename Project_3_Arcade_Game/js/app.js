//these varibales should in theory make it easier to modify teh scale of the game though I am not using them all at the moment
var GAME_HEIGHT = 606;
var GAME_WIDTH = 505;

var COL_WIDTH = 101;
var ROW_HEIGHT = 83;

var CHAR_WIDTH = 50;
var CHAR_HEIGHT = 70;

var ENEMY_HEIGHT = 80;
var ENEMY_WIDTH = 100;

var TOP_SPACE = 52; // not sure why this is here but there is extra white spave on top

var CHAR_START_X = GAME_WIDTH / 2 - CHAR_WIDTH;
var CHAR_START_Y = GAME_HEIGHT - TOP_SPACE - ROW_HEIGHT * 2;
var gameStart = true;
var gameLost = false;

// create an array of enemies thanks jacomorodriguez
var allEnemies = [];

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    var row = Math.floor((Math.random() * 3)); //randomw number 1-3, will place the enemy
    this.y = TOP_SPACE + row * ROW_HEIGHT; // clears white space and places in correct row
    this.speed = Math.floor((Math.random() * 3)); // chooses speed

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log("dt = " + dt);
    if (this.x > GAME_WIDTH) { //gone to the end of the screen
        //reset the bugs should probably be it's own function
        this.x = 0;
        var col = Math.floor((Math.random() * 4));
        this.y = TOP_SPACE + col * ROW_HEIGHT;
        this.speed = Math.floor((Math.random() + player.score / 8) * 3); //speed increases as score increases I am not sure if this is the best way to do it but wanted to at least make a stab at it
        //console.log("speed = " + this.speed);
    } else { //keep moving
        this.x = this.x + 50 * (this.speed + 1) * dt; //using it but not entirely sure what it does
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




//would like to add enemies as players score increase 
for (var i = 0; i < 4; i++) {
    allEnemies.push(new Enemy());
}

/* not working at this point while work on slowly think I need a Game object
var allEnemies = function(score.points) {//wanted to increase number of enemies as score goes up not working yet think I would need to rethink how the game runs in total 
	
	var allEnemies = [];
	
	console.log("score = " + score);
	for (var i = 0; i < 3 + score; i++) {
	
    allEnemies.push(new Enemy());
}

return allEnemies;
	
}*/



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images

    this.x = CHAR_START_X; // would prefer to use canvas
    this.y = CHAR_START_Y; //the way the char y coordinates loads seesm very odd
    this.lives = 5;
    this.score = 0; //score might be better here 

};

Player.prototype.character = function(key) {
    switch(key) {
    case 'one':
        this.sprite = 'images/char-boy.png';
        break;
    case 'two':
        this.sprite = 'images/char-cat-girl.png';
        break;
    case 'three':
        this.sprite = 'images/char-horn-girl.png';
        break;
    case 'four':
        this.sprite = 'images/char-pink-girl.png';
        break;        
    case 'five':
        this.sprite = 'images/char-princess-girl.png';
        break;
    default:
        console.log("sorry not an option");
}
    }
   

// Update the Players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) { //do I need this??
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //console.log("x = " + this.x + "y = " + this.y);
    //Probably should move this into render function
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + player.score, 0, 40);
    ctx.fillText("Lives: " + player.lives, 2*COL_WIDTH, 40);
};

Player.prototype.handleInput = function(key) {
    //WE ARE PLAYING
    if (!gameLost && !gameStart) {
        //switch statement would be better more elegent
        if (key === "left") {
            if (this.x <= CHAR_START_X - COL_WIDTH * 2) { //gotten to the end of the screen
                this.x = CHAR_START_X - COL_WIDTH * 2;
            } else {
                this.x = this.x - COL_WIDTH;
            }

        } else if (key === "right") { //gotten to the end of the screen
            if (this.x >= CHAR_START_X + COL_WIDTH * 2) {
                this.x = CHAR_START_X + COL_WIDTH * 2;
            } else {
                this.x = this.x + COL_WIDTH;
            }

        } else if (key === "up") { //gotten to the top
            if (this.y <= CHAR_START_Y - ROW_HEIGHT * 4) {
                this.y = CHAR_START_Y;
                this.x = CHAR_START_X;
                player.score++; //increase the score
            } else {
                this.y = this.y - ROW_HEIGHT;
            }

        } else if (key === "down") { //gotten to bottom

            if (this.y >= CHAR_START_Y) {
                this.y = CHAR_START_Y;
            } else {
                this.y = this.y + ROW_HEIGHT;
            }

        }
    //STARTING THE GAME CHOOSE A CHARACTER    
    } else if (gameStart)

    {
        //console.log(key);
        //THIS DOES NOT SEEM RIGHT
        if (key === "one" || key === "two" || key === "three" || key === "four" || key === "five") {
            gameStart = false;
            player.character(key);
            //console.log("turn gameStart False " + gameStart);
        }

    //GAME OVER    
    } else {
        if (key === "spacebar") {
            gameLost = false;
            //RESET PLAYER it's own function??
            this.lives = 5;
            this.score = 0;
            gameStart = true;

        }

    }

};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'spacebar',
        13: 'enter',
        49: 'one',
        50: 'two',
        51: 'three',
        52: 'four',
        53: 'five'


    };


    player.handleInput(allowedKeys[e.keyCode]);

});


//are we alive??
Player.prototype.alive = function(enemies) {

    var length = enemies.length;

    //need to know length and width of characters
    for (var i = 0; i < length; i++) {
        //console.log("enemy x = " + enemies[0].x)
        //this could probably be it's own funtion 
        //WHY WIDTH/2 not sure?? and what about characters width and height?? 
        if (enemies[i].x <= this.x && this.x <= enemies[i].x + ENEMY_WIDTH / 2 && this.y >= enemies[i].y && this.y <= enemies[i].y + ENEMY_HEIGHT / 2) { //you got hit go back to the begining 
            this.y = CHAR_START_Y;
            this.x = CHAR_START_X;
            this.lives--;


        }

        this.gameOver(this.lives);

    }

};



Player.prototype.gameOver = function(lives) {

    if (lives <= 0) {
        gameLost = true;

    }


};


var player = new Player();