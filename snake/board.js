(function (root) {
  var SG = root.SG = (root.SG || {});

	var Board = SG.Board = function(dimX, dimY) {
		this.dimX = dimX;
		this.dimY = dimY;
		this.snake = new SG.Snake();

	};

	Board.prototype.addSnake = function(grid) {
		var snake = this.snake.segs
		for (var i = 0; i < snake.length; i++) {
			var x = snake[i][0];
			var y = snake[i][1];
			grid[x][y] = "S"
		}
	};

	Board.prototype.render = function() {
		var grid = new Array(this.dimX)
		for(var row = 0; row < this.dimX; row++) {
			grid[row] = new Array(this.dimY);
			for(var col = 0; col < this.dimY; col++) {
				grid[row][col] = null;
			}
		};

		this.addSnake(grid)


		return this.flatten(grid)
	};

	Board.prototype.flatten = function(board) {
		flatBoard = [];
		for (var i = 0; i < board.length; i ++) {
			for (var j = 0; j < board[0].length; j ++) {
			  flatBoard.push(board[i][j]);
			}
		}
		return flatBoard;
	};


	Board.prototype.draw = function() {
		var grid = this.createBoard();
		that = this;

		for(var row = 0; row < grid.length; row++) {
			var rowStr = "";
			for(var col = 0; col < grid[row].length; col++) {
				if (grid[row][col] === "S") {
					rowStr += "S ";
				} else {
					rowStr += "* ";
				}
			}
			console.log(rowStr);
		};
		console.log("                 ")
	};

})(this)