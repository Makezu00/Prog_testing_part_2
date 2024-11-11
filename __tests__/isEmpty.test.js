const isEmpty = require('../src/isEmpty');

/**Testing with an empty object */
test('null object', () => {
    const c = null;
    result = isEmpty(c);
    expect(result).toBeTruthy();
});