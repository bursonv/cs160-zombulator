// http://tinyurl.com/cs160ex13
// Zombulator by Vivianne Burson
// CS 160 Exercise 13: Intro to arrays

var backgroundColor;

const MIN_SIZE = 25; // old browser? change to var.
const MAX_SIZE = 500;
const NUMBER_OF_ZOMBIES = 10;
const NUMBER_OF_HUMANS = 10;

var zombieXs;
var zombieYs;
var zombieSizes;
var zombieColors;

var humanXs;
var humanYs;
var humanSizes;
var humanColors;

function setups() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHuman();
}

function draws() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHuman();
}

function initializeZombies() {
  zombieXs = [150, 220, 200];
  zombieYs = [0, 150, 200];
  zombieSizes = [50, 100, 250];
  zombieColors = [192, 192, 192];
  for (var i = 0; i < 1000; ++i) {
    zombieXs[i] = random(0, windowWidth);
    zombieYs[i] = random(0, 200);
    zombieSizes[i] = random(MIN_SIZE, MAX_SIZE);
    zombieColors[i] = color(random(200, 255), random(50, 100), random(50, 100), 150);
  }
}

function initializeHumans() {
 humanXs = [150, 220, 200];
  humanYs = [0, 150, 200];
  humanSizes = [40, 100, 300];
  humanColors = [0, 0, 0];
  for (var i = 0; i < 5000; ++i) {
    humanXs[i] = random(0, windowWidth);
    humanYs[i] = random(0, 200);
    humanSizes[i] = random(MIN_SIZE, MAX_SIZE);
    humanColors[i] = color(random(200, 255), random(50, 100), random(50, 100), 150);
  }
}

function drawZombies() {
  for (var i = 0; i < 1000; ++i) {
    fill(zombieColors[i]);
    ellipse(zombieXs[i], zombieYs[i], zombieSizes[i], zombieSizes[i]);
  }
}

function drawHumans() {
 for (var i = 0; i < 5000; ++i) {
    fill(humanColors[i]);
    ellipse(humanXs[i], humanYs[i], humanSizes[i], humanSizes[i]);
}