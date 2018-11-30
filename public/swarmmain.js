canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
width = canvas.width;
height = canvas.height;
ctx = canvas.getContext('2d');

function start(event) {
if(event.keyCode == 13){
StartGame();
}
//alert(event.keyCode);	
}

function StartGame() {
document.getElementById("input").style.display = "none";
	
	setInterval(function(){
		
	updateGame(0.01);
	renderGame();	
		
	},10);
}

function updateGame(dt) {
	
}

function renderGame() {
ctx.clearRect(0, 0, width, height);
renderBackground();
}

function renderBackground() {
var squarewidth = window.innerWidth/70;
var squareheight = window.innerHeight/35;
console.log(squarewidth);

for(y = 0;y < 35;y+= 1) {
for(x = 0; x < 70;x+=1) {
	 ctx.beginPath();
     ctx.rect(x*squarewidth, y*squareheight, squarewidth, squareheight);
     ctx.fillStyle = '#FFFFFF';
     ctx.fill();
	 ctx.lineWidth = 1;
     ctx.strokeStyle = '#E8E8E8';
     ctx.stroke();
  }
 }
}