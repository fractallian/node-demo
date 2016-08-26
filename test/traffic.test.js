var expect = require('chai').expect;
var TL = require('../src/traffic.js');

describe('traffic light', () => {
  it('should work', () => {
    var intr = new TL.Intersection();
    // intr.tick();

    expect(intr.state).to.equal(0);

    intr.tick();
    intr.tick();
    intr.tick();
    intr.tick();
    intr.tick();
    intr.tick();
    intr.tick();
    intr.tick();

    expect(intr.state).to.equal(1);

    intr.tick();
    intr.tick();
    intr.tick();

    expect(intr.state).to.equal(2);

    intr.tick();
    intr.tick();

    expect(intr.state).to.equal(3);
  })

  it('should print', () => {
    TL.run();
  })
})
