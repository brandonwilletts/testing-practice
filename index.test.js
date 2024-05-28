const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./index.js");

//capitalize

test("word becomes Word", () => {
  expect(capitalize("word")).toBe("Word");
});

test("woRd becomes WoRd", () => {
  expect(capitalize("woRd")).toBe("WoRd");
});

test("WORD becomes WORD", () => {
  expect(capitalize("WORD")).toBe("WORD");
});

//reverseString

test("'word' becomes 'drow'", () => {
  expect(reverseString("word")).toBe("drow");
});

test("'word word' becomes 'drow drow'", () => {
  expect(reverseString("word word")).toBe("drow drow");
});

test("' word word' becomes 'drow drow '", () => {
  expect(reverseString(" word word")).toBe("drow drow ");
});

//calculator

test("Adding whole numbers", () => {
  expect(calculator.sum(4, 3)).toBe(7);
});

test("Adding floating point numbers", () => {
  expect(calculator.sum(4.2, 3.1)).toBeCloseTo(7.3);
});

test("Subtracting whole numbers", () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test("Subtracting floating point numbers", () => {
  expect(calculator.subtract(4.2, 3.1)).toBeCloseTo(1.1);
});

test("Dividing whole numbers", () => {
  expect(calculator.divide(4, 3)).toBeCloseTo(1.33);
});

test("Dividing floating point numbers", () => {
  expect(calculator.divide(4.2, 3.1)).toBeCloseTo(1.35);
});

test("Multiplying whole numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("Multiplying floating point numbers", () => {
  expect(calculator.multiply(4.2, 3.1)).toBeCloseTo(13.02);
});

//caesarCipher

test("Lowercase word with text-wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Lowercase word with text-wrapping and big shift factor", () => {
  expect(caesarCipher("xyz", 30)).toBe("bcd");
});

test("Word with capitalization", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Word with punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Word with number", () => {
  expect(caesarCipher("Hello3", 3)).toBe("Khoor3");
});

//analyzeArray

test("Average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
