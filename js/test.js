// let input = prompt('Введите число');
// console.log(input);
// let validNum = Number(input);
// console.log(validNum);

// console.log(Number.isNaN(validNum));

// ***********************************************

// let message = 'Vestibulum facilisis purus nec';
// const maxLength = 30;
// let result;

// if (message.length <= maxLength) {
//   result = message;
// } else if (message.length > maxLength) {
//   result = message.slice(0, maxLength) + '...';
// }

// console.log(result);

// *******************************************

// let message = 'Latest technology news';
// let result;
// // Change code below this line
// message = message.toLowerCase();
// if (message.includes('spam') || message.includes('sale')) {
//   result = true;
// } else {
//   result = false;
// }

// console.log(result);

// **********************************************

// let array = ['Earth', 'Mars', 'Venus'];
// console.log(array);

// array = array[0].concat(', ', array[array.length - 1]);

// console.log(array);

// const firstElem = array.shift();
// const lastElem = array.pop();

// const newArray = firstElem.concat(lastElem);

// console.log(firstElem);
// console.log(lastElem);

// console.log(newArray);

// *********************************************

// function calculateEngravingPrice(message, pricePerWord) {
//   let total = message.split(' ').length * pricePerWord;
//   return total;
// }

// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// *********************************************

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage('Mango', ''));

// *****************************************

// function calculateTotal(number) {
//   let total = 0;
//   for (const numb of number) {
//     total += numb;
//   }

//   return total;
// }

// console.log(calculateTotal(18));

// *****************************************

// function findLongestWord(string) {
//   // Change code below this line

//     let longestWord = 0;

//     const arrayString = string.split(' ');

//     for (let i = 0; i < arrayString.length; i += 1) {

//     }

//   const arrayWord = arrayString.split('');

//   return arrayWord;

//   // Change code above this line
// }

// console.log(findLongestWord('May the force be with you'));

// *****************************************

// const string = 'The quick brown fox jumped over the lazy dog'; // строка

// const arrayString = string.split(' '); // розбили на масив

// let wordLength = 0; // довжина кожного слова
// let largestWord = '';

// for (const arrayWord of arrayString) {
//   if (arrayWord.length > largestWord.length) {
//     largestWord = arrayWord;
//   }
// }

// console.log(largestWord);

// *****************************************

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));

// *****************************************

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   //   for (const number of numbers) {
//   //     if (number > value) {
//   //       newArray.push(number);
//   //     }
//   //   }

//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

// *****************************************

// function getCommonElements(array1, array2) {
//   const commonElem = [];

//   for (const array1Elem of array1) {
//     if (array2.includes(array1Elem)) {
//       commonElem.push(array1Elem);
//     }
//   }

//   return commonElem;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// *****************************************

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const evenNumbersArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
//   }
//   return evenNumbersArray;

//   // Change code above this line
// }

// console.log(getEvenNumbers(7, 7));

// *****************************************
