// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone number test for 111-222-3333', () => {
    expect(functions.isPhoneNumber('111-222-3333')).toBe(true);
});

test('Phone number test for (610) 559-5478', () => {
    expect(functions.isPhoneNumber('(610) 559-5478')).toBe(true);
});

test('Phone number test for 14321', () => {
    expect(functions.isPhoneNumber('14321')).toBe(false);
});

test('Phone number test for wrong', () => {
    expect(functions.isPhoneNumber('wrong')).toBe(false);
});

test('Email test for mjk@ucsd.edu', () => {
    expect(functions.isEmail('mjk@ucsd.edu')).toBe(true);
});

test('Email test for this@random.com', () => {
    expect(functions.isEmail('this@random.com')).toBe(true);
});

test('Email test for @yahoo.com', () => {
    expect(functions.isEmail('@yahoo.com')).toBe(false);
});

test('Email test for wrong', () => {
    expect(functions.isEmail('wrong')).toBe(false);
});

test('Strong password test for goodpassword', () => {
    expect(functions.isStrongPassword("goodpassword")).toBe(true);
});

test('Strong password test for Another_good1', () => {
    expect(functions.isStrongPassword('Another_good1')).toBe(true);
});

test('Strong password test for 1password', () => {
    expect(functions.isStrongPassword('1password')).toBe(false);
});

test('Strong password test for no', () => {
    expect(functions.isStrongPassword('no')).toBe(false);
});

test('Date test for 05/28/2023', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

test('Date test for 5/28/2023', () => {
    expect(functions.isDate('5/28/2023')).toBe(true);
});

test('Date test for 5/28/23', () => {
    expect(functions.isDate('5/25/23')).toBe(false);
});

test('Date test for wrong', () => {
    expect(functions.isDate('wrong')).toBe(false);
});

test('Hex color test for aaa', () => {
    expect(functions.isHexColor('aaa')).toBe(true);
});

test('Hex color test for bad0b9', () => {
    expect(functions.isHexColor('bad0b9')).toBe(true);
});

test('Hex color test for ab12', () => {
    expect(functions.isHexColor('ab12')).toBe(false);
});

test('Hex color test for wrong', () => {
    expect(functions.isHexColor('wrong')).toBe(false);
});