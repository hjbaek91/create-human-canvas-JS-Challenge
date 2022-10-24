const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

// main body
ctx.fillRect(230, 200, 120, 250);

// arms
ctx.fillRect(180, 200, 30, 150);
ctx.fillRect(370, 200, 30, 150);

// legs
ctx.fillRect(230, 470, 30, 120);
ctx.fillRect(320, 470, 30, 120);

// main face
ctx.arc(289.5, 100, 80, 0, 2 * Math.PI);
ctx.fill();

// left eye
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(260, 80, 12, Math.PI, 2 * Math.PI);
ctx.fill();

// rigth eye
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(320, 80, 12, Math.PI, 2 * Math.PI);
ctx.fill();

// mouth
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(290, 120, 30, 0, Math.PI);
ctx.fill();
