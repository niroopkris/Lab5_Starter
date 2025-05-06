// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber Tests (first 2 are TRUE, last 2 are FALSE)
test('check correct phone number with parentheses', () => {
  expect(isPhoneNumber("(123) 456-7899")).toBe(true);
});

test('check correct number with dashes', () => {
  expect(isPhoneNumber("123-456-7899")).toBe(true);
});

test('check incorrect number too few numbers', () => {
  expect(isPhoneNumber("56-7899")).toBe(false);
});

test('check incorrect number with invalid format', () => {
  expect(isPhoneNumber("123 456 7899")).toBe(false);
});



// isEmail
test('check correct standard email', () => {
  expect(isEmail("batman@gmail.com")).toBe(true);
});

test('check correct email with underscore in username', () => {
  expect(isEmail("bat_man@gmail.com")).toBe(true);
});

test('check number with a invalid character in username', () => {
  expect(isEmail("bat.man@gmail.com")).toBe(false);
});

test('check number with incomplete domain', () => {
  expect(isEmail("batman@gmail")).toBe(false);
});



// isStrongPassword
test('check a basic strong password', () => {
  expect(isStrongPassword("password789")).toBe(true);
});

test('check password with an underscore ', () => {
  expect(isStrongPassword("pass_word789")).toBe(true);
});

test('check invalid password starting with a number', () => {
  expect(isStrongPassword("789password")).toBe(false);
});

test('check password with invalid special characters', () => {
  expect(isStrongPassword("pass!word.789")).toBe(false);
});



// isDate
test('check date in MM/DD/YYYY format', () => {
  expect(isDate("10/10/2000")).toBe(true);
});

test('check date in M/D/YYYY format', () => {
  expect(isDate("1/1/2000")).toBe(true);
});

test('check invalid date with a year that is not 4 digits', () => {
  expect(isDate("1/1/20")).toBe(false);
});

test('check invalid date with improper / format', () => {
  expect(isDate("10-10-2000")).toBe(false);
});


// isHexColor
test('check valid 6 character hex code without hash', () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});

test('check valid 3 character hex code with hash', () => {
  expect(isHexColor("000")).toBe(true);
});

test('check hex code with invalid characters', () => {
  expect(isHexColor("#FFFFFG")).toBe(false);
});

test('check hex code with invalid length', () => {
  expect(isHexColor("FF")).toBe(false);
});