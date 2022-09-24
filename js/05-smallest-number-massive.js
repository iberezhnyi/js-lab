const numbers = [51, 18, 13, 24, 7, 85, 19, 4, 107];
let smallestNumber = numbers[0];
let biggestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {
  console.log(number);

  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);

// **********************************

for (const number of numbers) {
  console.log(number);

  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log('biggestNumber: ', biggestNumber);
