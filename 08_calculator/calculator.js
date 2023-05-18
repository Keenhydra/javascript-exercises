const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(myNums) {
  total = 0;
  for (let i = 0; i < myNums.length; i++) {
    total += myNums[i];
  }
  return total;
};

const multiply = function(myNums) {
    total = 1;
    for (let i = 0; i < myNums.length; i++) {
      total *= myNums[i];
    }
    return total;
  };

const power = function(num, level) {
	return total = num ** level;
};

const factorial = function(num) {
  total = 1;
	for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
