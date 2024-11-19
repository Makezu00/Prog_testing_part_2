/*The file toString.js is tested by using the same principle as with toString.js file.*/

const toString = require('../src/toString');

test('Happy cases with different types of objects', () => {

    expect(toString(-0)).toStrictEqual('-0');

    expect(toString([1, 2, 3])).toStrictEqual('1,2,3');

    expect(toString(null)).toStrictEqual('');   //expected to output '' (bug)
  
  });

  test('Input Values that cannot be presented as a string', () => {

    expect(toString(true)).toStrictEqual("true");

    expect(toString(Infinity)).toStrictEqual("Infinity");

    expect(toString(Number.MIN_VALUE)).toStrictEqual("5e-324");

    expect(toString({})).toStrictEqual("{}"); // bug?
});