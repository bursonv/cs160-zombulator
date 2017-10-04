// Zombulator by Vivianne Burson

var zombieX = 80;
var zombie2X = 100;

function setup() {
	createCanvas(800,800);
}

function draw() {
	background(255, 255, 255)
	fill(244, 244, 66);
	ellipse(zombieX, 50, 80, 80);
	// fill(150, 150, 200);
	ellipse(zombie2X, 100, 80, 80); 
	zombieX = zombieX + 1;
	zombie2X = zombie2X + 3;
}