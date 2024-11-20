/* The file memoize.js is tested by asserting the values in the cache with a map that has the
expected results. Incorrect inputs are also tested to prove that the error handling works as
intended. */

const memoize = require('../src/memoize');

describe('Value assertion in the cache', () => {
    const vals = new Map
    
    const object = { 'a': 1, 'b': 2 };
    const other = { 'c': 3, 'd': 4 };

    const mockfunc = jest.fn((n) => n * n);
    const values = memoize(mockfunc);

    it('Manual cache modifications', () => {

        values.cache = new Map(Object.entries(object));

        expect(values('a')).toBe(1);
        expect(values('b')).toBe(2);

        expect(mockfunc).not.toHaveBeenCalled(); //no unnecessary function calls

        object.a = 2;
        expect(values('a')).toBe(1); //object modification to have no effect on cache

        values.cache.set(object, ['a', 'b'])
        expect(values(object)).toStrictEqual(['a', 'b']);
    });

});

describe('Incorrect inputs error handling', () => {
    it('TypeError: "Expected a function"', () => {

        expect(() => {memoize(square, null);}).not.toThrow('Expected a function'); //should work without errors

        expect(() => {memoize(null, null);}).toThrow('Expected a function');

        expect(() => {memoize(square, i);}).not.toThrow('Expected a function');
    });

    it('Definition errors', () => {

        expect(() => {memoize(i, null);}).toThrow('i is not defined'); 
    });
});