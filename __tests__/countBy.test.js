const countBy = require('../src/countBy');

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
];

test ('Happy cases', () => {
    expect(countBy(users,value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
    expect(countBy(users,value => value.user)).toStrictEqual({ 'barney': 1, 'betty': 1, 'fred': 1 });
});

test('Iteratee is a value that does not exist in the object and trying an empty array', () => {
    const empty_array = [];
    expect(countBy(users,value => value.workplace)).toStrictEqual({'workplace': 0});
    expect(countBy(empty_array,value => value.workplace)).toStrictEqual({'workplace': 0});
});

test('Iteratee is null', () => {
    expect(() => countBy(users, null)).toThrow(TypeError);
});
