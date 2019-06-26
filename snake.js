function Snake() {
	this.position = createVector(height/2, width/2);
	this.ori = createVector(1, 0);
	this.size = 0;
	this.tail = [];

	this.show = function() {
		for (var i = 0; i < this.tail.length; i++) {
			fill(255);
			rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);			
		}
	}

	this.update = function() {
		for (var i = 0; i < this.tail.length-1; i++) {
			this.tail[i] = this.tail[i+1];
		}

		this.tail[this.size] = createVector(this.position.x, this.position.y);

		this.position.x += this.ori.x * gridSize;
		this.position.y += this.ori.y * gridSize;
	}

	this.eatFood = function() {
		if (dist(this.position.x, this.position.y, food.x, food.y) === 0) {
			this.size++;
			this.tail[this.size] = createVector(this.position.x, this.position.y);
			return true;
		}
		return false;
	}

	this.dead = function() {
		if (this.outOfBounds() || this.hitItself()) {
			return true;
		}
		return false;
	}

	this.outOfBounds = function() {
		if (this.position.x < 0 || this.position.x >= height ||
			this.position.y < 0 || this.position.y >= width) {
			return true;
		}
		return false;
	}

	this.hitItself = function() {
		for (var i = 1; i < this.tail.length; i++) {
			if (dist(this.tail[i].x, this.tail[i].y, this.position.x, this.position.y) === 0) {
				return true;
			}
		}
		return false;
	}

	this.up = function() {
		if (this.ori.y == 0){
			this.ori.x = 0
			this.ori.y = -1;
		}
	}

	this.down = function() {
		if (this.ori.y == 0) {
			this.ori.x = 0
			this.ori.y = 1;
		}
	}

	this.left = function() {
		if (this.ori.x == 0) {
			this.ori.x = -1;
			this.ori.y = 0
		}
	}

	this.right = function() {
		if (this.ori.x == 0) {
			this.ori.x = 1;
			this.ori.y = 0
		}
	}
}