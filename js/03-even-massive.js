const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];

let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];

//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('Четное - ', number);

//     total += number;

//     console.log('Сумма четных - ', total);
//   }
// }

// *****************************************

// for (const number of numbers) {
//   //   console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное`);

//     total += number;

//     console.log('Сумма четных - ', total);
//   }
// }

// ******************************************

for (const number of numbers) {
  //   console.log(number);

  if (number % 2 !== 0) {
    continue;
  }

  console.log(`${number} - четное`);

  total += number;
}

console.log('total четных - ', total);
