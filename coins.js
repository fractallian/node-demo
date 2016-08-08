/*
  Given an infinite number of quaters, dimes nickels and pennies,
  output all the possible ways of representing n cents
 */

var coins = {
  p: 1,
  n: 5,
  d: 10,
  q: 25
};

var coinList = ['q', 'd', 'n', 'p'];

function _getCombos(cents, index) {
  var key = coinList[index];
  var denom = coins[key];
  var max = Math.floor(cents / denom);
  if (denom === 1) {
    return [{p: cents}];
  }
  var combos = [];

  for (let i=0; i<=max; i++) {
    var remainder = cents - (denom * i);
    var lower = _getCombos(remainder, index+1);
    for (let cmb of lower) {
      cmb[key] = i;
    }
    combos = combos.concat(lower);
  }
  return combos;
}

function coinCombos(cents) {
  return _getCombos(cents, 0);
}

module.exports = coinCombos;
