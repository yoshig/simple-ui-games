var Snake = require('./snake.js');

(function (root) {
  var SG = root.SG = (root.SG || {});

	var DIM_X = 10;
	var DIM_Y = 10;

	var Board = SG.Board = function() {
		this.grid = new Array(DIM_X);

		for(var row = 0; row < this.grid.length; row++) {
			this.grid[row] = new Array(DIM_Y);
			for(var col = 0; col < this.grid[row].length; col++) {
				this.grid[row][col] = null;
			}
		};

		this.snake = new Snake();

	};

	Board.prototype.addSnake = function() {
		var snake = this.snake.segs
		for (var i = 0; i < snake.length; i++) {
			var x = snake[i][0];
			var y = snake[i][1];
			this.grid[x][y] = "S"
		}
	};

	Board.prototype.draw = function() {
		that = this;

		for(var row = 0; row < this.grid.length; row++) {
			var rowStr = "";
			for(var col = 0; col < this.grid[row].length; col++) {
				if (this.grid[row][col] === "S") {
					rowStr += "S ";
				} else {
					rowStr += "* ";
				}
			}
			console.log(rowStr);
		};
	};

	Board.prototype.render = function() {
		this.addSnake();
		this.draw();
	};

})(this)

var board = new this.SG.Board();
board.render();