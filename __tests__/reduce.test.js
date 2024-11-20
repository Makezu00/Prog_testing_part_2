const reduce = require('../src/reduce');

test('Happy case', () => {
  const array = [1, 2, 3, 4];
  const result = reduce(array, (sum, n) => sum + n, 0);
  expect(result).toBe(10);
});

test('Uses the first element as accumulator when none is provided', () => {
  const array = [1, 2, 3, 4];
  const result = reduce(array, (sum, n) => sum + n);
  expect(result).toBe(10);
});

test('Reduces an object into an accumulated value', () => {
  const object = { a: 1, b: 2, c: 1 };
  const result = reduce(
    object,
    (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    },
    {}
  );
  expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
});

test('Returns undefined when reducing an empty array without an accumulator', () => {
  const array = [];
  const result = reduce(array, (sum, n) => sum + n);
  expect(result).toBeUndefined();
});

test('Throws an error if the iteratee is not a function', () => {
  const array = [1, 2, 3];
  expect(() => reduce(array, null)).toThrow(TypeError);
});
