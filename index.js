function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(string.charAt(i));
  }
  return reversedString;
}

const calculator = {
  sum(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function wrapIndex(index, arrayLength) {
  return ((index % arrayLength) + arrayLength) % arrayLength;
}

function caesarCipher(string, shiftFactor) {
  let cipher = "";
  let lowerCaseLetters = [];
  for (let i = 97; i <= 122; i++) {
    lowerCaseLetters.push(String.fromCharCode(i));
  }
  let upperCaseLetters = [];
  for (let i = 65; i <= 90; i++) {
    upperCaseLetters.push(String.fromCharCode(i));
  }

  for (let i = 0; i < string.length; i++) {
    if (lowerCaseLetters.some((letter) => letter === string.charAt(i))) {
      let index = lowerCaseLetters.indexOf(string.charAt(i)) + shiftFactor;
      let wrappedIndex = wrapIndex(index, lowerCaseLetters.length);
      cipher = cipher.concat(lowerCaseLetters[wrappedIndex]);
    } else if (upperCaseLetters.some((letter) => letter === string.charAt(i))) {
      let index = upperCaseLetters.indexOf(string.charAt(i)) + shiftFactor;
      let wrappedIndex = wrapIndex(index, upperCaseLetters.length);
      cipher = cipher.concat(upperCaseLetters[wrappedIndex]);
    } else {
      cipher = cipher.concat(string.charAt(i));
    }
  }
  return cipher;
}

function analyzeArray(array) {
  const sortedArray = array.sort((a, b) => (a > b ? 1 : -1));
  const average = array.reduce((total, item) => (total += item)) / array.length;
  const min = sortedArray[0];
  const max = sortedArray[sortedArray.length - 1];
  const length = array.length;

  const result = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
