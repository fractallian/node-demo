class Game {
  constructor() {
    this.p1 = new Player(this, 'white');
    this.p2 = new Player(this, 'black');
    this.board = new Board(this);
  }

  takeTurn(player, colNum) {
    var piece = new Piece(player);
    var col = this.board.matrix[colNum - 1];
    if (col.length < 6) {
      col.push(piece);
    } else {
      throw new Error('column is full');
    }
    this.checkForWin(colNum);
  }

  checkForWin(colNum) {
    this.checkForColWin(colNum);
    if (this.winner) return;
    this.checkForDiagWin(colNum);
  }

  checkForColWin(colNum) {
    for (let col of this.board.matrix) {
      if (col.length < 4) continue;
      var inarow;
      var lastPlayer;
      for (let piece of col) {
        if (lastPlayer !== piece.player) {
          inarow = 1;
          lastPlayer = piece.player;
        } else {
          inarow++;
        }
        if (inarow === 4) {
          this.winner = lastPlayer;
          return;
        }
      }
    }
  }

  checkForDiagWin(colNum) {

  }
}

class Player {
  constructor(game, color) {
    this.game = game;
    this.color = color;
  }
}

class Board {
  constructor(game) {
    this.game = game;
    this.matrix = [[], [], [], [], [], [], []];
  }
}

class Piece {
  constructor(player) {
    this.player = player;
    this.game = player.game;
  }
}



module.exports = {Game, Player, Board};
