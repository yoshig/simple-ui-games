(function (root) {
  var SG = root.SG = (root.SG || {});

	var Snake = SG.Snake = function() {
		this.dir = "S";
		this.segs = [[0,0],[0,1],[0,2]];
	};

	Snake.DELTA = {
		N: [-1,0],
		E: [0,1],
		W: [0,-1],
		S: [1, 0]
	}

	Snake.MARK = "S"

	Snake.prototype.move = function() {
		var move = Snake.DELTA[this.dir]
		var head = this.segs[this.segs.length - 1];
		var new_head = [move[0] + head[0], move[1] + head[1]];
		this.segs.push(new_head);
		this.segs = this.segs.slice(1);
	};

	Snake.prototype.turn = function(newDir) {
		this.dir = newDir;
	};
})(this)