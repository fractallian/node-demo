// contains traversable squares
class Field {
  constructor(matrix) {
    this.squares = [];
    for (let y=0; y<matrix.length; y++) {
      let row = [];
      for (let x=0; x<matrix[y].length; x++) {
        row.push(new Square(this, x, y, matrix[y][x]));
      }
      this.squares.push(row);
    }

    this.rabbit = new Rabbit(this);
    this.rabbit.eat();
  }
  getSquare(x, y) {
    var row = this.squares[y];
    return row && row[x];
  }
  // returns 1, 2 or 4 squares
  getCenter() {
    var x = [];
    var y = [];
    var width = this.squares[0].length;
    var height = this.squares.length;
    x.push(Math.floor(width / 2));
    y.push(Math.floor(height / 2));
    if (width % 2) { // width is even
      x.push(Math.ceil(width / 2));
    }
    if (height % 2) { // height is even
      y.push(Math.ceil(height / 2));
    }
    var squares = [];
    for (let xCoord of x) {
      for (let yCoord of y) {
        squares.push(this.getSquare(xCoord - 1, yCoord - 1));
      }
    }
    return squares;
  }
  getStartSquare() {
    var centerSquares = this.getCenter();
    var start;
    for (let square of centerSquares) {
      if (!start || square.carrotCount > start.carrotCount) {
        start = square;
      }
    }
    return start;
  }
}

// helps with traversing the field
class Square {
  constructor(field, x, y, carrotCount) {
    this.field = field;
    this.x = x;
    this.y = y;
    this.carrotCount = carrotCount;
  }
  up() {
    return this.field.getSquare(this.x, this.y - 1);
  }
  down() {
    return this.field.getSquare(this.x, this.y + 1);
  }
  left() {
    return this.field.getSquare(this.x - 1, this.y);
  }
  right() {
    return this.field.getSquare(this.x + 1, this.y);
  }
}

class Rabbit {
  constructor(field) {
    this.field = field;
    this.square = field.getStartSquare();
    this.carrotsEaten = 0;
  }
  eat() {
    this.carrotsEaten += this.square.carrotCount;
    this.square.carrotCount = 0;
    this.move();
  }
  move() {
    var nextSquare;

    // find the square with the most carrots
    for (let direction of ['up', 'down', 'left', 'right']) {
      let possible = this.square[direction]();

      // skip impossible moves and squares with no carrots
      if (!possible || possible.carrotCount === 0) continue;

      if (!nextSquare || possible.carrotCount > nextSquare.carrotCount) {
        nextSquare = possible;
      }
    }
    if (nextSquare) {
      this.square = nextSquare;
      this.eat(); // eat carrots then try to keep moving
    }
    // if no carrots were found in adjacent squares, do nothing
  }
}

module.exports = Field;




