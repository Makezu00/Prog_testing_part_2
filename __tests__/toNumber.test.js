/* The file toNumber.js is tested by giving the function different types of objects. Values that
cannot be presented as a number will be tested. */

const toNumber = require('../src/toNumber.js');

test('Happy cases with different types of objects', () => {

    expect(toNumber(3.2)).toStrictEqual(3.2);

    expect(toNumber(Number.MIN_VALUE)).toStrictEqual(5e-324);

    expect(toNumber(Infinity)).toStrictEqual(Infinity);

    expect(toNumber('3.2')).toStrictEqual(3.2);
});

test('Input Values that cannot be presented as a number', () => {

    expect(toNumber(null)).toStrictEqual(0);

    expect(toNumber(true)).toStrictEqual(1);

    expect(toNumber('bob')).toStrictEqual(NaN);

    expect(toNumber({})).toStrictEqual(NaN);
});