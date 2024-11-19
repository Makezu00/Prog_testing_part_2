/* The file memoize.js is tested by asserting the values in the cache with a map that has the
expected results. Incorrect inputs are also tested to prove that the error handling works as
intended. */

const memoize = require('../src/memoize');

describe('memoize', () => {
    it('Happy cases without resolver', () => {

    const vals = new Map
    
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };

    const mockfunc = jest.fn((n) => n * n);
    const values = memoize(mockfunc);

    values.cache = new Map(Object.entries(object));

    expect(values('a')).toBe(1);
    expect(values('b')).toBe(2);

    expect(mockfunc).not.toHaveBeenCalled();

    object.a = 2;
    expect(values('a')).toBe(2);

    values.cache.set(object, ['a', 'b'])
    expect(memoize(object)).toStrictEqual(['a', 'b']);

    it('should throw an error if the key set is not valid for cache retrieval', () => {

        const mockFunc = jest.fn((n) => n * n);
    
        const memoizedFunc = memoize(mockFunc);
    
        memoizedFunc.cache = new Map();
    
        expect(() => memoizedFunc.cache.set(['a', 'b'], 10)).not.toThrow(); // Setting an array key (allowed in Map)
    
        expect(memoizedFunc.cache.get(['a', 'b'])).toBe(undefined); // Arrays are not equal by reference
    });
});

test('memoize', () => {

    // Mock function to simulate an expensive computation
    const mockFunc = jest.fn((x) => x * 2);

    // Memoize the mock function
    const memoizedFunc = memoize(mockFunc);

    
})


test('TypeError: "Expected a function"', () => {

    expect(() => {memoize(square, null);}).not.toThrow('Expected a function'); //should work without errors

    expect(() => {memoize(null, null);}).toThrow('Expected a function');

    expect(() => {memoize(square, i);}).not.toThrow('Expected a function');

    expect(() => {memoize(i, i);}).toThrow('i is not defined');
});