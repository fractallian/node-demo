/**
 * Thumbtack interview #2
 * Write a data structure and search algorithm to perform type-ahead searches optimized for lookup speed
 */

class DictNode {
  constructor() {
    this.dict = {};
    this.values = [];
  }

  getNode(key) {
    var node = this.dict[key];
    if (!node) this.dict[key] = new DictNode();
    return this.dict[key];
  }
}

var store = new DictNode();

function createDictionary(strArray) {
  for (let item of strArray) {
    addIndex(store, item, item);
  }
  return store;
}

function addIndex(dict, prefix, item) {
  var key = prefix.substr(0,1);
  var node = dict.getNode(key);
  prefix = prefix.slice(1); // from char 1 to the end

  node.values.push(item);

  if (prefix.length > 0) {
    addIndex(node, prefix, item);
  }
}

function getWords(prefix, dict = store) {
  var node = dict.getNode(prefix.substr(0,1));
  if (prefix.length === 1) return node.values;
  prefix = prefix.slice(1);
  return getWords(prefix, node);
}

function findInArray(str, array) {
  return _.findWhere(array, function(item) {
    return new RegExp("^"+str).match(item);
  });
}


module.exports = {createDictionary, getWords};
