const isEmpty = require('../src/isEmpty');

test('Happy cases', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(1)).toBeTruthy();
    expect(isEmpty(true)).toBeTruthy();
    expect(isEmpty('aasdasdasd')).toBeFalsy();
    expect(isEmpty([2,2,4,5])).toBeFalsy();
    expect(isEmpty({'asdasd' : 2245})).toBeFalsy();
});

test('Returns true for objects with only non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false });
    expect(isEmpty(obj)).toBeTruthy();
});

test('Prototype', () => {
    expect(isEmpty(Boolean.prototype)).toBeTruthy();
});

test('Maps and sets', () => {
    expect(isEmpty(new Map())).toBeTruthy();
    expect(isEmpty(new Set())).toBeTruthy();
});
