// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   const result = a + b;
//   //   console.log('a + b: ', result);
//   console.log('Выпоняется функция add');

//   return result;
// };

// const r1 = add(2, 3);
// console.log('r1: ', r1);
// add(24, 33);
// add(50, 25);

// **************************************************

// const fn = function (value) {
//   console.log(1);

//   console.log(2);

//   if (value < 50) {
//     return 'Меньше чем 50';
//   }

//   return 'Больше чем 50';
// };

// console.log('Результат функции: ', fn(10));

// console.log('Результат функции: ', fn(1000));

// **************************************************

const fnA = function () {
  console.log('Выполняется функция A');

  fnB();
};

const fnB = function () {
  console.log('Выполняется функция B');

  //   console.log(value);

  fnC();
};

const fnC = function () {
  console.log('Выполняется функция C');

  console.log(value);
};

// console.log('Лог перед вызовом функции A');
fnA();
// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');
