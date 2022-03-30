const {add, subtract, divide, multiply, calculate} = require('../public/operations');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});