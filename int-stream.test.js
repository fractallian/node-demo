var expect = require('chai').expect;
var processStream = require('./int-stream.js');

describe('integer-stream', () => {
  it('should calculate the median', () => {
    expect(processStream([1 ,2, 10, 20, 5, 19]).median).to.equal(10);
    expect(processStream([100, 5, 1]).median).to.equal(5);
    expect(processStream([1,2,3,4,5,6,7,8,9,10]).median).to.equal(6);
    expect(processStream([5]).median).to.equal(5);
    expect(processStream([2,2,5,8,8]).median).to.equal(5);
  });

  it('should calculate the mean', () => {
    expect(processStream([1 ,2, 10, 20, 5, 19]).mean).to.equal(57 / 6);
    expect(processStream([100, 5, 1]).mean).to.equal(106 / 3);
    expect(processStream([1,2,3,4,5,6,7,8,9,10]).mean).to.equal(55 / 10);
    expect(processStream([5]).mean).to.equal(5);
    expect(processStream([2,2,5,8,8]).mean).to.equal(25 / 5);
  });

});
