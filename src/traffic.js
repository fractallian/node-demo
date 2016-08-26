var pattern = [
  ['red', 'green'],
  ['red', 'yellow'],
  ['red', 'red'],
  ['green', 'red'],
  ['yellow', 'red'],
  ['red', 'red']
];

var changes = [8, 3, 2, 8, 3, 2];

class Intersection {
  constructor() {
    this.l1 = new Light('north-south');
    this.l2 = new Light('east-west');

    // index of pattern
    this.state = 0;

    this.counter = 0;
  }

  incState() {
    this.state++;
    if (this.state === 6) {
      this.state = 0;
    }
    this.counter = 0;
  }

  tick() {
    this.counter++;
    var currentChange = changes[this.state];
    if (this.counter % currentChange === 0) {
      this.incState();
    }
  }

  print() {
    var p = pattern[this.state];
    console.log({
      [this.l1.name]: p[0],
      [this.l2.name]: p[1]
    });
  }
}

class Light {
  constructor(name) {
    this.name = name;

    this.color = 'red';
  }
}

module.exports = {
  run: function() {
    var intr = new Intersection();

    var i=0;
    while(true) {
      i++;
      intr.print();
      intr.tick(i);
    }
  },
  Intersection,
  Light
}
