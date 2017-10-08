// Zombulator by Vivianne Burson

var zombieX = 80;
var zombie2X = 100;
var edge =1000;
var speed1 = 1; 
var size = 80;

function setup() {
	createCanvas(edge,800);
	background(255, 255, 255);
}

function draw() {
	strokeWeight(4);
	fill(random(255), random(255), random(255));
	ellipse(zombieX, 50, 80, 80);
	// fill(150, 150, 200);
	ellipse(zombie2X, 100, 80, 80); 
	zombieX = zombieX + speed1;
	zombie2X = zombie2X + 5;
	
	if(zombieX >= edge){
	zombieX = 0;
	// speed1 = speed1 + 1;
	size = size + 20;
	}
	if (zombie2X >= edge) {
	zombie2X = 0;
	}
} 