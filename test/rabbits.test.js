var expect = require('chai').expect;
var Field = require('../src/rabbits.js');

function getCarrotsEaten(matrix) {
  var field = new Field(matrix);
  return field.rabbit.carrotsEaten;
}

describe('rabbits', () => {
  it('should work', () => {
    var matrix = [
      [5, 7, 8, 6, 3],
      [0, 0, 7, 0, 4],
      [4, 6, 3, 4, 9],
      [3, 1, 0, 5, 8]
    ];
    var field = new Field(matrix);
    var carrots = field.rabbit.carrotsEaten;
    expect(carrots).to.equal(27);
  })
})
