require('./index.js');
var expect = require('chai').expect;

var createDictionary = require('./index.js').createDictionary;
var getWords = require('./index.js').getWords;

describe('typeahead', () => {
  it('should store an array into a dictonary', () => {
    var arr = ['new york', 'new jersey', 'new', 'never', 'noodle', 'foo'];

    var store = createDictionary(arr);

    expect(getWords('n')).to.deep.equal(['new york', 'new jersey', 'new', 'never', 'noodle']);
    expect(getWords('ne')).to.deep.equal(['new york', 'new jersey', 'new', 'never']);
    expect(getWords('new')).to.deep.equal(['new york', 'new jersey', 'new']);
    expect(getWords('never')).to.deep.equal(['never']);
    expect(getWords('fo')).to.deep.equal(['foo']);
  })
})
