const {add, subtract, divide, multiply, calculate} = require('../public/operations');

/*/////////////////
    Addition
/////////////////*/

//Standard
test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
});

//Zero
test('0 + 6 = 6', () => {
    expect(add(0, 6)).toBe(6);
});

//Negative
test('-3 + 6 = 3', () => {
    expect(add(-3, 6)).toBe(3);
});

//Strings
test('1 + 6 = 7', () => {
    expect(add("1", "6")).toBe(7);
});

//Decimal
test('1.5 + 5 = 6.5', () => {
    expect(add(1.5, "5")).toBe(6.5);
});


/*/////////////////
    Subtraction
/////////////////*/

//Standard
test('5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

//Zero
test('0 - 6 = -6', () => {
    expect(subtract(0, 6)).toBe(-6);
});

//Negative
test('-3 - 6 = 3', () => {
    expect(subtract(-3, 6)).toBe(-9);
});

//Strings
test('6 - 1 = 5', () => {
    expect(subtract("6", "1")).toBe(5);
});

//Decimal
test('5.5 + 2.25 = 3.25', () => {
    expect(subtract(5.5, 2.25)).toBe(3.25);
});



/*/////////////////
  Multiplication
/////////////////*/

//Standard
test('5 * 2 = 10', () => {
    expect(multiply(5, 2)).toBe(10);
});

//Zero
test('0 * 6 = 0', () => {
    expect(multiply(0, 6)).toBe(0);
});

//Negative
test('-3 * 6 = -18', () => {
    expect(multiply(-3, 6)).toBe(-18);
});

//Strings
test('6 * 1 = 6', () => {
    expect(multiply("6", "1")).toBe(6);
});

//Decimal
test('1.5 + 3 = 4.5', () => {
    expect(multiply(1.5, 3)).toBe(4.5);
});




/*/////////////////
     Division
/////////////////*/

//Standard
test('6 / 2 = 3', () => {
    expect(divide(6, 2)).toBe(3);
});

//Zero
test('0 / 6 = 0', () => {
    expect(divide(0, 6)).toBe(0);
});

//Negative
test('-6 / 2 = -3', () => {
    expect(divide(-6, 2)).toBe(-3);
});

//Strings
test('12 / 2 = 6', () => {
    expect(divide("12", "2")).toBe(6);
});

//Decimal
test('5 / 2 = 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
});