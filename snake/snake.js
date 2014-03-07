(function (root) {
  var SG = root.SG = (root.SG || {});

	var Snake = SG.Snake = function(dimX, dimY) {
		this.dir = "S";
		this.segs = [[0,0],[0,1],[0,2]];
    this.apple = [3, 3];
    this.dimX = dimX;
    this.dimY = dimY;
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
		var new_head = [move[0] + this.head()[0], move[1] + this.head()[1]];
		this.segs.push(new_head);

    if (new_head[0] === this.apple[0] && new_head[1] === this.apple[1]) {
      this.apple = this.newApple
    } else {
      this.segs = this.segs.slice(1);
    }
	};

	Snake.prototype.turn = function(newDir) {
		this.dir = newDir;
	};

  Snake.prototype.head = function() {
    return this.segs[this.segs.length - 1];;
  };

  Snake.prototype.newApple = function() {
    this.apple = [Math.floor(Math.random()*dimX), Math.floor(Math.random()*dimY)]
    console.log(apple)
  };

})(this)