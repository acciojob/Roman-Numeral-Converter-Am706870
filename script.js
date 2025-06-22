function convertToRoman(num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let res = "";

  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      res += symbol;
      num -= value;
    }
  }

  return res;
}

// Test the function
console.log(convertToRoman(36));  

// Do not edit below this line
module.exports = convertToRoman;

