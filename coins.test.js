var expect = require('chai').expect;
var coinCombos = require('./coins.js');

describe('coinCombos', () => {
  it('should return possible coin combos given n cents', () => {
    expect(coinCombos(1)).to.deep.equal([{p: 1, n: 0, d: 0, q: 0}]);
    expect(coinCombos(5)).to.deep.equal([{p: 5, n: 0, d: 0, q: 0}, {p: 0, n: 1, d: 0, q: 0}]);
    expect(coinCombos(10)).to.deep.equal([
      {p: 10, n: 0, d: 0, q: 0},
      {p: 5,  n: 1, d: 0, q: 0},
      {p: 0,  n: 2, d: 0, q: 0},
      {p: 0,  n: 0, d: 1, q: 0}
    ]);
    expect(coinCombos(25)).to.deep.equal([
      {p: 25, n: 0, d: 0, q: 0},
      {p: 20, n: 1, d: 0, q: 0},
      {p: 15, n: 2, d: 0, q: 0},
      {p: 10, n: 3, d: 0, q: 0},
      {p: 5,  n: 4, d: 0, q: 0},
      {p: 0,  n: 5, d: 0, q: 0},
      {p: 15, n: 0, d: 1, q: 0},
      {p: 10, n: 1, d: 1, q: 0},
      {p: 5,  n: 2, d: 1, q: 0},
      {p: 0,  n: 3, d: 1, q: 0},
      {p: 5,  n: 0, d: 2, q: 0},
      {p: 0,  n: 1, d: 2, q: 0},
      {p: 0,  n: 0, d: 0, q: 1}
    ]);

  });
});


