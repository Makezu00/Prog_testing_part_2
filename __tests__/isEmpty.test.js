const isEmpty = require('../src/isEmpty');

/**Testing with an empty object */
test('Happy cases', () => {
    const c = null;
    expect(isEmpty(c)).toBeTruthy();
});