/*The file slice.js is tested by asserting different arrays with different slicing parameters. Negative
and incorrect values will be used as well. */

const slice = require('../src/slice');

describe('Happy cases', () => {

    test('Arrays with normal slicing parameters', () => {

        var array = [1, 2, 3, 4]
        expect(slice(array, 2)).toStrictEqual([3, 4]);

        expect(slice(array, 1, 3)).toStrictEqual([2, 3]);

        expect(slice(array, 0)).toStrictEqual([1, 2, 3, 4]);
    });

    test('function exception handling', () => {

        var array = [1, 2, 3, 4]
        
        expect(slice(null, 2)).toStrictEqual([]);

        expect(slice(array, 1, -2)).toStrictEqual([2]);

        expect(slice(array, -1, 2)).toStrictEqual([4, 1, 2, 3]); //bug? putputs "[]"
    });
});

describe('Incorrect input values (Expected to fail)', () => {

    test('Arrays with incorrect slicing parameters', () => {

        var array = [1, 2, 3, 4]

        expect(slice(array, 5)).toStrictEqual([]);
        
        expect(slice(array, 'i')).toStrictEqual([]);

        expect(slice(array, null)).toStrictEqual([1, 2, 3, 4]);

        expect(slice(array, 3, 2)).toStrictEqual([]);

        expect(slice(array, true)).toStrictEqual([]); //interprets true == 1 (bug?)
    });

    test('Incorrect array values', () => {

        var array = [true, Infinity, {}]

        expect(slice(array, 0)).toStrictEqual([true, Infinity, {}]);

        expect(slice(array, 'i')).toStrictEqual([]);
    });
});