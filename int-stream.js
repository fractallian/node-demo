/**
 * Thumbtack interview #1
 * Given a stream of unknown size containing random integers from 0 - 1000
 * calculate the mean and median values after each integer is encountered
 */


var index = 0; // total count

var counts = {};
var countList = [];

var totalSum = 0;

function processStream(stream) {
  index = 0;
  counts = {};
  countList = [];
  totalSum = 0;

  var result;
  for (let i of stream) {
    result = processInt(i);
  }
  return result;
}


function processInt(int) {
  index++; // total number of ints we've encountered
  totalSum += int;

  counts[int] = counts[int] || 0;
  counts[int]++;
  insertInt(int);

  //find median
  var sum = 0;
  var median;
  var stopAt = Math.floor(index / 2);
  var i = 0;

  // console.log({counts: counts, countList: countList, stopAt: stopAt});

  while (sum <= stopAt) {
    let checkInt = countList[i];
    if (!checkInt) break; // we've gone outside the bounds of the array
    i++;

    let count = counts[checkInt];
    sum += count;
    median = checkInt;

    // console.log({sum: sum, stopAt: stopAt, count: count, median: median});
  }
  var mean = totalSum / index;

  // TODO: if the stream is long enough, we will overflow the integer space for the total sum
  // we should calculate mean using the previous mean and the current integer instead

  return {median: median, mean: mean};
}

function insertInt(int) {
  for (let i=0; i<countList.length; i++) {
    if (countList[i] === int) return;
    if (countList[i] > int) {
      countList.splice(i, 0, int);
      return;
    }

  }
  countList.push(int);
}

module.exports = processStream;
