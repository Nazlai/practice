const R = require('ramda');

const mock = 'ababa';

const split = R.split("");
const sanatize = R.compose(split, R.toLower)
const reversed = R.compose(R.reverse, sanatize);

// const reverse = reversed(mock)
// const straight = split(mock);

const palindrome = string => {
  return R.equals(reversed(string), sanatize(string))
}


module.exports = {
  palindrome: palindrome
}
