const convertToCelsius = function(farenheit) {
  celsius = (farenheit - 32) * (5/9);
  decimal = celsius.toFixed(1);
  
  return Number(decimal);
};

const convertToFahrenheit = function(celsius) {
  farenheit = (celsius * (9/5) + 32); 
  decimal = farenheit.toFixed(1);
  
  return Number(decimal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
