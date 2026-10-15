// Placeholder so you can confirm the page loads. Replace this with your game's code.
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#221f35";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#ffb454";
ctx.font = "28px sans-serif";
ctx.textAlign = "center";
ctx.fillText("game.js is loading. Replace me!", canvas.width / 2, canvas.height / 2);
