const every = require('../src/every');

test('Happy cases', () => {
    expect(every([], Boolean)).toBeTruthy();
    expect(every([true, 1, null, 'yes'], Boolean)).toBeFalsy();
    expect(every([1,1,1], Number)).toBeTruthy();
    expect(every(['y', 'y'], String)).toBeTruthy();
});

test('False values for predicate', () => {
    expect(() => every([1,2,3],'asdasdas')).toThrow(TypeError);
    expect(() => every([1,2,3], null)).toThrow(TypeError);
});

test('Stops iterating once a predicate fails', () => {
    let iterations = 0;
    const countAndCheck = (value) => {
        iterations++;
        return value < 3;
    };
    expect(every([1, 2, 3, 4], countAndCheck)).toBeFalsy();
    expect(iterations).toBe(3); // Stops after 3rd element
});