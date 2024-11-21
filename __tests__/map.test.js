//The file map.js is tested by simply comparing generated outputs with expected outputs.

const map = require('../src/map');

function square(n) {return n * n};

describe('Happy cases', () => {

  test('Generated outputs compares with expected outputs', () => {

    expect(map([4,6], square)).toStrictEqual([16,36]);
  
    expect(map([-4,6], square)).toStrictEqual([16,36]);
  
    expect(map([4,0], square)).toStrictEqual([16,0]);  
  });
});

describe('Input array is with wrong items or is not an array', () => {

  test('Array is with eccentric items', () => {

    expect(map(['bob', 5, [4], null, true, Infinity], square)).toEqual([NaN, 25, 16, 0, 1, Infinity]);

  });

  test('Array input is not an array', () => {

    expect(map(null, null)).toEqual([]);

    expect(map(new Map(), null)).toEqual([]);

    expect(map(4, square)).toEqual([undefined]);

  });
});

