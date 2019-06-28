const index = require('../palindrome');
const test = require('tape');

test('should equal', function (t) {
  t.equal(index.palindrome('ababa'), true);
  t.end();
})

test('should not equal', function (t) {
  t.equal(index.palindrome('string'), false);
  t.end();
})

test('should equal', function (t) {
  t.equal(index.palindrome('Sator Arepo Tenet Opera Rotas'), true);
  t.end();
})