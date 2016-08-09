var _ = require('lodash');


// rotate a n x n matrix 90 degrees in place

class Matrix {
  constructor(n) {
    this._n = n;
    this._matrix = [];
    var range = _.range(0, n);
    for (let i of range) {
      this._matrix[i] = _.map(range, () => {
        return _pixel();
      });
    }
  }

  print() {
    var str = '';
    for (let row of this._matrix) {
      str += row.join('|') + '\n';
    }
    console.log(str);
  }

  rotate() {
    var nR = Math.floor(this._n / 2);
    for (let r=0; r<nR; r++) {
      var nX = this._n - (r + 1);
      for (let x=r; x<nX; x++) {
        this._swapCoords([x, r]);
      }
    }
  }

  getValue(coords) {
    return this._matrix[coords[1]][coords[0]];
  }

  setValue(coords, val) {
    this._matrix[coords[1]][coords[0]] = val;
  }

  _rotatedCoords(coords) {
    return [(coords[1] * -1) + (this._n - 1), coords[0]];
  }

  // move a set of 4 pixels
  // for a 3 x 3 grid given 0,0:
  // 0,0 -> 2,0
  // 2,0 -> 2,2
  // 2,2 -> 0,2
  // 0,2 -> 0,0
  _swapCoords(coords) {
    var tmp = [this.getValue(coords)];
    for (let i=0; i<4; i++) {
      let rCoords = this._rotatedCoords(coords);
      tmp.push(this.getValue(rCoords));
      this.setValue(rCoords, tmp.shift());
      coords = rCoords;
    }
  }
}

function _pixel() {
  return _.padStart(Math.round(Math.random() * 10000).toString(), 4, '0');
}

module.exports = Matrix;
