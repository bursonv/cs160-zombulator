// Zombulator by Vivianne Burson

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.3;
var zombieDamping = -0.5;
var zombieSize = 75;
var zombieColor;
var backgroundColor;
var humanX = 500;
var humanV = 0.6;
var humanA = -0.2;
var humanDamping = -0.5;
var humanSize = 30;
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
		zombieSize *= 0.5;
	if(humanX >= windowHeight);
		humanV *= humanDamping;
		humanSize *= 0.6;
	}
}