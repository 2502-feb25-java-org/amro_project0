// initial canvas
const canvas = document.querySelector("canvas");
let Width = 600;
let Height = 620;
canvas.width = Width;
canvas.height = Height;
let c = canvas.getContext('2d');

// get score object
let score = document.getElementById("score");
let sc = 0;

//set bg image
var bg = new Image();
bg.src = 'ca-bg.jpg';
c.drawImage(bg, 0, 0);

// key event map
var map = {
    '37': false, // Left 
    '39': false, // Right 
    '38': false, // Top 
    // '40': false, // Bottom
}

// handle key event
addEventListener('keydown', function (event) {
    if (event.keyCode in map) {
        map[event.keyCode] = true;

        if (map['37']) {
            player.x += -10;

        } else if (map['39']) {
            player.x += 10;

        } else if (map['38']) {
            player.y += -10;
        }
        // else if (map['40']) { //prevent back
        //     player.y += 10;
        // }

    }
});

// to disable the key otherwise is not going to change the key
addEventListener('keyup', function (event) {
    if (event.keyCode in map) {
        map[event.keyCode] = false;
    }
});

// set the player image
let player_img = new Image();
player_img.src = 'Pin.png';


// create a player
let player = {
    width: 50,
    height: 60,
    x: Width / 2,
    y: Height,
    draw: function () {

        if (this.x <= 0) {
            this.x = 0; // set x = 0 to not pass left side
        } else if (this.x >= (innerWidth - this.width)) {
            this.x = (innerWidth - this.width); // set x = (full width - player size) to not pass right side
        }

        if (this.y <= 0) {
            this.y = 0; // set y = (full height - player size) to not pass top side
        } else if (this.y < this.height / 5) { // if y close to zero then end the game
            location.reload();
        }
        else if (this.y >= (Height - this.height)) {
            this.y = (Height - this.height); // set y = 0 to not pass bottom side
        }
        c.drawImage(bg, 0, 0);
        c.drawImage(player_img, this.x, this.y, this.width, this.height);

    }

};

class Ball {
    constructor(radius, velocity, color) {
        this.radius = radius;
        this.color = color;
        this.x = Math.random() * (Width - radius * 2) + radius;
        this.y = 0;
        let dir = Math.random() * Math.PI * 2;
        this.dx = velocity * Math.cos(dir);
        this.dy = velocity;
    }

    draw1() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.lineWidth = 3;
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    update() {
        // if (this.x + this.radius > width || this.x - this.radius < 0)
        //     this.dx = -this.dx;
        // if (this.y + this.radius > width || this.y - this.radius < 0)
        //     this.dy = -this.dy;

        //this.x += this.dx;
        this.y += this.dy;
        this.draw1();
    }
};

let ball = new Ball(10, 3, "white");
let ball1 = new Ball(10, 3, "red");
let ball2 = new Ball(10, 3, "green");

// animation
function move() {
    requestAnimationFrame(move); //method tells the browser that you wish to perform an animation
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    ball.update();
    ball1.update();
    ball2.update();
    if (ball.y == Height-20) {
        ball = new Ball(10, 3, "white");
        ball1 = new Ball(10, 3, "red");
        ball2 = new Ball(10, 3, "green");
    }
    
    if(ball.y == player.y || ball1.y == player.y || ball2.y == player.y){
        console.log("HH");
        sc++;
        score.innerText = "Score: " + sc;
    }
}
move();







// var x = 200;
// var y = 20;
// var dx = 2;
// var dy = -2;

// function draw1() {
// ctx.beginPath();
// ctx.arc(x, y, 10, 0, Math.PI*2);
// ctx.fillStyle = "black";
// ctx.fill();
// x += dx;
// y -= dy;
// }

// function draw1(){

// for (let i = 0; i < 5; i++) {
//     // let x = Math.random() * window.innerWidth;
//     // let y = Math.random() * window.innerHeight;
//     // let r = Math.random() * 255;
//     // let g = Math.random() * 255;
//     // let b = Math.random() * 255;
//     ctx.beginPath();
//     ctx.arc(x, y , 10, 0 , Math.PI * 2, false);
//     ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
//     ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
//     ctx.fillRect(x + x, y + y, 10, 10);
//     ctx.stroke();
//     ctx.clearRect();
// }
// }

// for (let y = 0; y < window.innerHeight; y++) {
//     for (let x = 0; x < window.innerWidth; x++) {

//             let r = Math.random() * 255;
//     let g = Math.random() * 255;
//      let b = Math.random() * 255;

//         ctx.beginPath();
//         ctx.arc(x, y , 10, 0 , Math.PI * 2, false);
//         ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
//         ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
//         ctx.stroke();
//     }

// }
// }

// setInterval(draw1, 1000);



