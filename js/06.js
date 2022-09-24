// let input;
let total = 0;

// while (input !== null) {
//   input = prompt('Введите число');

//   if (input !== null) {
//     input = Number(input);
//     total += input;
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);

let input = prompt('Введите число');

while (input) {
  // input = prompt('Введите число');

  //   if (input !== null) {
  input = Number(input);
  total += input;
  //   }
}
alert(`Общая сумма чисел равна ${total}`);
