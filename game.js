
const canvas = document.querySelector("canvas");
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');



for (let i = 0; i < 200; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    c.beginPath();
    c.arc(x, y , 10, 0 , Math.PI * 2, false);
    c.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    c.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    c.fillRect(x + x, y + y, 10, 10);
    c.stroke();
}