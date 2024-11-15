const every = require('../src/every');

test('Happy cases', () => {
    expect(every([], Boolean)).toBeTruthy();
    expect(every([true, 1, null, 'yes'], Boolean)).toBeFalsy();
    expect(every([1,1,1], Number)).toBeTruthy();
    expect(every(['y', 'y'], String)).toBeTruthy();
});