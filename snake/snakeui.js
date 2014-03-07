(function (root) {
  var SG = root.SG = (root.SG || {});

	var View = SG.View = function($el) {
		this.$el = $el;

		this.board = new SG.Board(20, 20);
		this.snake = this.board.snake;
	};

	View.FRAME_RATE = 200;

	View.KEYS = {
		38: "N",
		37: "W",
		40: "S",
		39: "E"
	}

	View.prototype.handleKeyEvent = function(event) {
		console.log(View.KEYS[event.keyCode])
		if (View.KEYS[event.keyCode]) {
			this.board.snake.turn(View.KEYS[event.keyCode]);
		} else {
		}
	};

	View.prototype.step = function() {
		this.$el.children("div").remove();
		this.snake.move();
		var boardInst = this.board.render();
		this.drawBoard(boardInst);
	};

	View.prototype.drawBoard = function(board) {
		for (var i = 0; i < board.length; i++){
			if (board[i] === null) {
				this.$el.append('<div class="cell"></div>');
			} else {
				this.$el.append('<div class="snake"></div>');
			}
		}
	};

	View.prototype.start = function() {

		$(window).keydown(this.handleKeyEvent.bind(this));

		window.setInterval(
			this.step.bind(this),
			View.FRAME_RATE
		);
	};
})(this)

$(function() {

	var $board = $('.board');
	$board.append('<div class="cell"></div>');
	var view = new window.SG.View($board);

	view.start();
})