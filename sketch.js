// Zombulator by Vivianne Burson

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;
var backgroundColor;
var humanX = 500;
var humanV = 0;
var humanA = -0.2;
var humanDamping = -0.5;
var humanSize = 80;
var humanColor;


function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(144, 168, 255);
	zombieColor = color(242, 255, 0);
	humanColor = color(0, 0, 0);
}

function draw() {
	background(backgroundColor);
	noStroke();
	fill(humanColor);
	ellipse(windowWidth / 4, humanX, humanSize, humanSize);
	fill(zombieColor);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	zombieY += zombieV;
	zombieV += zombieA;
	humanX += humanV;
	humanV += humanA;
	if(zombieY >= windowHeight) {
		zombieY = windowHeight;
		zombieV *= zombieDamping;
		zombieSize *= 0.8;
	if(humanX >= windowHeight);
		humanX = windowHeight;
		humanV *= humanDamping;
		humanSize *= 0.8;
	}
}