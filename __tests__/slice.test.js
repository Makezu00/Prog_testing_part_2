/*The file slice.js is tested by asserting different arrays with different slicing parameters. Negative
and incorrect values will be used as well. */

const slice = require('../src/slice');

test('Happy cases', () => {

    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toStrictEqual([3, 4]);

    expect(slice(array, 1, 3)).toStrictEqual([2, 3]);
});

test('Arrays with different slicing parameters', () => {

    var array = [1, 2, 3, 4]
    expect(slice(array, 0)).toStrictEqual([1, 2, 3, 4]);

    expect(slice(array, 5)).toStrictEqual([]);

    expect(slice(array, 3, 2)).toStrictEqual([]);

    expect(slice(array, -1)).toStrictEqual([4]);

});

test('Negative and incorrect values', () => {

    var array = [true, Infinity, {}]

    expect(slice(array, 2)).toStrictEqual([{}]);

    expect(slice(array, 'i')).toStrictEqual([]);

    expect(slice(array, true)).toStrictEqual([]); //interprets true == 1 (bug?)
});