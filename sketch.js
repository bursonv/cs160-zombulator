// http://tinyurl.com/cs160ex20end
// Zombulator by Vivianne Burson
// CS 160 Exercise 20: Collisions (end of exercise)
// - Everything is in place, but we have only stubbed isTouching.

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 350;

var population = [];

var zombieCount = 0;
var humanCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  for(var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        print("Fight! Fight! Fight!");
      }
    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
      ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  stroke(0);
  textSize(16);
  textAlign(CENTER);
  text("Zombies: " + zombieCount, width / 2, 50);
  text("Humans: " + humanCount, width / 2, height - 50);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initializeZombie() {
  return {
    humaniodType: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(65, 255), random(50, 260), random(50, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humaniodType == target.humaniodType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return (distance <= (this.size/2 + target.size/2));
    }
  };
}

function initializeHuman() {
  return {
    humaniodType: "human",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 4),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(64, 232), random(50, 211), 262),
    move: function() {
        var direction = random(0, 100);
        if (direction < 20) {
          this.x += this.speed;
        } else if (direction < 40) {
          this.x -= this.speed;
        } else if (direction < 60) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      },
    draw: function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    },
    isTouching: function(target) {
      if (this.humaniodType == target.humaniodType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return (distance <= (this.size/2 + target.size/2));
    }
  };
}