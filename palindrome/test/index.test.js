const index = require('../scripts');
const test = require('tape');

test('should return equal', function (t) {
  t.equal(index.palindrome('a'), true);
  t.end();
})

test('should return equal', function (t) {
  t.equal(index.palindrome('Able was I ere I saw Elba'), true);
  t.end();
})

test('should return not equal', function (t) {
  t.equal(index.palindrome('string'), false);
  t.end();
})