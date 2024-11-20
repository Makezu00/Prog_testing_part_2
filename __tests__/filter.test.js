const filter = require('../src/filter');

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
    ];

test('Happy cases', () => {
    expect(filter(users, ({active}) => active))
    .toStrictEqual([{ 'user': 'barney', 'active': true }]);
});

test('False values for predicate', () => {
    expect(() => (filter(users, null))).toThrow(TypeError);
    expect(() => (filter(users, 123))).toThrow(TypeError);
});