// http://tinyurl.com/cs160ex16
// Zombulator by Vivianne Burson
// CS 160 Exercise 16: Biased Random Walk

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;
var humans;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
  moveHumans();
}


// Zombies. Raaahh!

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombies[index] = {
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150)
  };
}



function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    drawZombie(zombies[i]);
  }
}

function drawZombie(zombie) {
  fill(zombie.color);
  ellipse(zombie.x, zombie.y, zombie.size, zombie.size);
 } 

function moveZombies () {
  for (var i = 0; i <NUMBER_OF_ZOMBIES; ++i);
      moveZombie(zombies[i]);
  }
}

function movezombie(zombie) {
  var direction = random(0, 100);
  if (direction < 20) {
    zombie.x += zombie.speed;
  } else if (direction == 1) {
    zombie.x -= zombie.speed;
  } else if (direction == 2) {
    zombie.y += zombie.speed; 
  } else {
    zombie.y -= zombie.speed;
  }
}

// Humans. Mmmm brains!

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}


function initializeHuman(index) { 
  humans[index] = {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    size: random(MIN_SIZE, MAX_SIZE),
    speed: random(0.2, 10),
    color: color(random(50, 150), random(50,150), random(150, 255), 150)
  };
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    drawHuman(i);
  }
}

function drawHuman(index) {
  var human = humans[index];
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
}

function moveHumans(){
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
   var human = humans[i];
   moveHuman(human);
  }
}

function movehuman(human) {
  human.x += human.speed; 
}