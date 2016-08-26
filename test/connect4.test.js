var C4 = require('../src/connect4.js');
var expect = require('chai').expect;

describe('game', () => {
  it('should init', () => {
    var game = new C4.Game();
    expect(game.p1.color).to.equal('white');
  });

  it('should take turns', () => {
    var game = new C4.Game();
    game.takeTurn(game.p1, 2);

    expect(game.board.matrix[1][0].player.color).to.equal('white');
  });

  it('should find col wins', () => {
    var game = new C4.Game();
    game.takeTurn(game.p1, 2);
    game.takeTurn(game.p1, 2);
    game.takeTurn(game.p1, 2);
    expect(game.winner).to.be.undefined;
    game.takeTurn(game.p1, 2);
    expect(game.winner).to.equal(game.p1);
  })

  it('should find row wins', () => {
    var game = new C4.Game();
    game.takeTurn(game.p1, 1);

    game.takeTurn(game.p2, 2);
    game.takeTurn(game.p1, 2);

    game.takeTurn(game.p2, 3);
    game.takeTurn(game.p2, 3);
    game.takeTurn(game.p1, 3);

    expect(game.winner).to.be.undefined;

    game.takeTurn(game.p2, 4);
    game.takeTurn(game.p2, 4);
    game.takeTurn(game.p2, 4);
    game.takeTurn(game.p1, 4);

    expect(game.winner).to.equal(game.p1);
  })

  it('should find diag wins', () => {
    var game = new C4.Game();

  })
})
