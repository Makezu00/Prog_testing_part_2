const map = require('../src/map');

function square(n) {return n * n};

test('Happy cases', () => {

  expect(map([4,6], square)).toStrictEqual([16,36]);

});

test('Array is NULL', () => {

    expect(map(null, square)).toEqual([]);
  
  });