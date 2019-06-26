var snake;
var gridSize = 20;
var snakeVelocity = 2;
var food;

function setup() {
	createCanvas(600,600);
	snake = new Snake();
	frameRate(10);
	generateFood();
}

function draw() {
	background(0);
	if (snake.dead()) {
		snake = new Snake();	
		generateFood();
	}
	if (snake.eatFood()) {
		generateFood();
	}
	drawFood();
	snake.update();
	snake.show();
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		snake.left();
	} else if (keyCode == RIGHT_ARROW) {
		snake.right();
	} else if (keyCode == UP_ARROW) {
		snake.up();
	} else if (keyCode == DOWN_ARROW) {
		snake.down();
	}
}

function generateFood() {
	food = createVector(floor(random(0, height/gridSize))*gridSize, floor(random(0, width/gridSize))*gridSize);
}

function drawFood() {
	fill(55);
	rect(food.x, food.y, gridSize, gridSize);
}