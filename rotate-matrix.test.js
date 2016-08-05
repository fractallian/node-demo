var expect = require('chai').expect;
var Matrix = require('./rotate-matrix.js');

describe('Matrix', () => {
  it('should rotate coords', () => {
    var matrix = new Matrix(3);
    expect(matrix._rotatedCoords([0,1])).to.deep.equal([1,0]);
    expect(matrix._rotatedCoords([1,1])).to.deep.equal([1,1]);
    expect(matrix._rotatedCoords([0,0])).to.deep.equal([2,0]);
    expect(matrix._rotatedCoords([2,0])).to.deep.equal([2,2]);
  });

  it('should swap coords', () => {
    var matrix = new Matrix(3);
    var a = matrix.getValue([0,0]);
    var c = matrix.getValue([2,0]);
    var i = matrix.getValue([2,2]);
    var g = matrix.getValue([0,2]);

    matrix._swapCoords([0,0]);
    expect(matrix.getValue([0,0])).to.equal(g);
    expect(matrix.getValue([2,0])).to.equal(a);
    expect(matrix.getValue([2,2])).to.equal(c);
    expect(matrix.getValue([0,2])).to.equal(i);
  })

  it('should rotate the matrix', () => {
    var matrix = new Matrix(3);
    var a = matrix.getValue([0,0]);
    var e = matrix.getValue([1,1]);
    var i = matrix.getValue([2,2]);
    matrix.rotate();
    expect(matrix.getValue([2,0])).to.deep.equal(a);
    expect(matrix.getValue([1,1])).to.deep.equal(e);
    expect(matrix.getValue([0,2])).to.deep.equal(i);
  })
})
