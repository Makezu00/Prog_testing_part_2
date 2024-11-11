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