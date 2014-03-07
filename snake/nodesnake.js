(function (root) {
  var Snake = root.Snake = (root.Snake || {});

	var Snake = Snake.Snake = function() {
		this.dir = "S";
		this.segs = [[0,0],[0,1],[0,2]];
	};

	var DELTA = {
		N: [0,-1],
		E: [1,0],
		W: [-1,0],
		S: [1, 0]
	}

	Snake.prototype.move = function() {
		var move = this.DELTA[dir]
		this.coords = [move[0] + this.coords[0], move[1] + this.coords[1]]
	};

	Snake.prototype.turn = function(newDir) {
		this.dir = newDir;
	};

	var DIM_X = 20;
	var DIM_Y = 20;


	var Board = Snake.Board = function() {
		this.grid = new Array(DIM_X);

		for(var row = 0; row < this.grid.length; row++) {
			this.grid[row] = new Array(DIM_Y);
			for(var col = 0; col < this.grid[row].length; col++) {
				this.grid[row][col] = null;
			}
		};
		this.snake = new Snake.Snake();

	};

	Board.prototype.draw = function() {
		that = this
		for(var row = 0; row < this.grid.length; row++) {
			for(var col = 0; col < this.grid[row].length; col++) {
				if (that.snake.indexOf([row, col]) !== -1) {
					console.log("S")
				} else {
					console.log(" ")
				}
			}
		};
	};

	Board.prototype.render = function() {

	};

	var Coord = Snake.Coord = function() {
	};

	Coord.prototype.plus = function() {};


	})(this)

var board = new this.Snake.Board();
board.draw();