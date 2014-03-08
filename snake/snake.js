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
		var newHead = [move[0] + this.head()[0], move[1] + this.head()[1]];
		this.segs.push(newHead);

    if (newHead[0] === this.apple[0] && newHead[1] === this.apple[1]) {
      this.newApple();
    } else {
      this.segs = this.segs.slice(1);
    }
	};

  Snake.prototype.hitBody = function() {
    var hitBod = false;
    var snake = this;
    for (var i=0; i<this.segs.length - 1; i++) {
      if (snake.head()[0] === snake.segs[i][0] &&
          snake.head()[1] === snake.segs[i][1]) { hitBod = true; }
    }
    return hitBod;
  };

	Snake.prototype.turn = function(newDir) {
		this.dir = newDir;
	};

  Snake.prototype.head = function() {
    return this.segs[this.segs.length - 1];;
  };

  Snake.prototype.newApple = function() {
    that = this;
    this.apple = [Math.floor(Math.random()*this.dimX),
                  Math.floor(Math.random()*this.dimY)];
    for (var i = 0; i < this.segs; i++) {
      if (that.apple[0] === that.segs[i][0] && that.apple[1] === that.segs[i][1]) {
        that.newApple();
      }
    };
  };

})(this)