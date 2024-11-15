const filter = require('../src/filter');

test('Happy cases', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
        ];
    expect(filter(users, ({active}) => active))
    .toStrictEqual([{ 'user': 'barney', 'active': true }]);
});