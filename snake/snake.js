(function (root) {
  var SG = root.SG = (root.SG || {});

	var Snake = SG.Snake = function() {
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

	module.exports = Snake;
})(this)