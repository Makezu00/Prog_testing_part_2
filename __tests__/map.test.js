//The file map.js is tested by simply comparing generated outputs with expected outputs.

const map = require('../src/map');

function square(n) {return n * n};

test('Happy cases', () => {

  expect(map([4,6], square)).toStrictEqual([16,36]);

  expect(map([-4,6], square)).toStrictEqual([16,36]);

  expect(map([4,0], square)).toStrictEqual([16,0]);

});

test('Array is NULL or of wrong form', () => {

    expect(map(null, square)).toEqual([]);

    expect(map(['bob', 5, [], null, true, Infinity], square)).toEqual([NaN, 25, 0, 0, 1, Infinity]);

});