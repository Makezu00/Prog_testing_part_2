/* The file toNumber.js is tested by giving the function different types of objects. Values that
cannot be presented as a number will be tested. */

const toNumber = require('../src/toNumber.js');

describe('Happy cases', () => {
    test('Different types of objects as input', () => {

        expect(toNumber(3.2)).toStrictEqual(3.2);

        expect(toNumber(Number.MIN_VALUE)).toStrictEqual(5e-324);

        expect(toNumber(Infinity)).toStrictEqual(Infinity);

        expect(toNumber('3.2')).toStrictEqual(3.2);
    });
});

describe('Expected to fail', () => {
    test('Input Values that cannot be presented as a number', () => {

        expect(toNumber(null)).toStrictEqual(0);

        expect(toNumber(true)).toStrictEqual(1);

        expect(toNumber('bob')).toStrictEqual(NaN);

        expect(toNumber({})).toStrictEqual(NaN);
    });

    /*
    test('Regex exceptions', () => {

        expect(toString(" 0 ")).toStrictEqual(0);   //leading and trailing whitespace.
    
        expect(toString(0x2)).toStrictEqual(2);     //hexadecimal
    
        expect(toString(0b10)).toStrictEqual(2);    //binary
    
        expect(toString(0O2)).toStrictEqual(2);     //octal
    
        expect(toString(root)).toStrictEqual("");   // 'root'
      });
    */
});