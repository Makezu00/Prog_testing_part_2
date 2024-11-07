/* The file memoize.js is tested by asserting the values in the cache with a map that has the
expected results. Incorrect inputs are also tested to prove that the error handling works as
intended. */

const memoize = require('../src/memoize');

test('Happy cases', () => {

    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };

    //const values = memoize(values); mitä?

    
    expect(values(object)).toStrictEqual([1, 2]);

    expect(values(other)).toStrictEqual([3, 4]);

    object.a = 2;
    expect(values(object)).toStrictEqual([1, 2]);

    values.cache.set(object, ['a', 'b'])
    expect(values(object)).toStrictEqual(['a', 'b']);

});

test('TypeError "Expected a function"', () => {

    expect(memoize(null, null)).toThrow(TypeError);

    expect(memoize(func, null)).toThrow('Expected a function');

});