// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль
// сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1.
// К примеру для первого элемента массива['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function (array) {
//   // твой код
//   for (let i = 1; i <= array.length; i += 1) {
//     console.log(`${i} - ${array[i - 1]}`);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// **************************************************************************************

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую
// строку(в строке будут только слова и пробелы) и цену гравировки одного слова,
// и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   // твой код

//   // return message.split(' ').length * pricePerWord; - 1 рішення

//   // 2 рішення:
//   const wordsOfString = message.split(' ');

//   let totalPrice = 0;

//   for (const word of wordsOfString) {
//     totalPrice += pricePerWord;
//   }
//   return totalPrice;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// **************************************************************************************

// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   // твой код
//   const arrayOfString = string.split(' ');
//   let longestWord = '';
//   let lengthOfElement = 0;

//   for (const element of arrayOfString) {
//     if (lengthOfElement < element.length) {
//       lengthOfElement = element.length;
//       longestWord = element;
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// **************************************************************************************

// Напиши функцию formatString(string) которая принимает строку
// и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов,
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов
// и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   // твой код
//   if (string.length >= 40) {
//     return string.slice(0, 40) + '...';
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка

// **************************************************************************************

// Напиши функцию checkForSpam(message),
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   // твой код
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     return true;
//   }
//   return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// **************************************************************************************

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log(user);

// user.mood = 'happy';
// console.log(user);

// user.hobby = 'skydiving';
// console.log(user);

// user.premium = false;
// console.log(user);

// const userKeys = Object.keys(user);
// console.log(userKeys);

// console.log(user);

// for (const element of userKeys) {
//   console.log(`${element}: ${user[element]}`);
// }

// **************************************************************************************

// Напиши функцию countProps(obj),
// считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//   // твой код
//   return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// **************************************************************************************

// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач).Сотрудники и кол - во выполненых задач
// содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   // твой код

//   let theBestEmployee;
//   let maxScore = 0;

//   for (const employee in employees) {
//     if (employees[employee] > maxScore) {
//       maxScore = employees[employee];
//       theBestEmployee = employee;
//     }
//   }
//   return theBestEmployee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// **************************************************************************************

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   // твой код
//   const salaries = Object.values(employees);
//   let totalSalary = 0;

//   for (const salary of salaries) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// **************************************************************************************

// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твой код
  const names = [];

  for (const element of arr) {
    // console.log(element[prop]);
      names.push(element[prop]);
      if () {
          
      }
  }
  return names;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// **************************************************************************************

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   // твой код

//   for (const product of allProdcuts) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
