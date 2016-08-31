var assert   = require('assert');
var register = require('./index').register;
var using    = require('./index').using;

describe('Needed tests', () => {
  it('should register objects and use them', done => {
    var alfa  = { a: 1 };
    var bravo = { b: 1 };

    register('alfa', alfa);
    register('bravo', bravo);

    using([ 'alfa', 'bravo' ], (a, b) => {
      assert.equal(a, alfa);
      assert.equal(b, bravo);
      done();
    });
  })
});