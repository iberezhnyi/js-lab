// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);

//   callback(100);
// };

// const fnB = function (number) {
//   console.log('log function B', number);
// };

// fnA('qweqwr', fnB);

// ****************************************************

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// ****************************************************

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });

// ****************************************************

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//   console.log('Click on button' + Date.now());
// });

// function addEventListener(eventType, cvallback) {
//   if (eventType === event) {
//     cvallback();
//   }
// }

// ****************************************************

// const onGetPositionSuccess = function (position) {
//   console.log('Это вызов onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// ****************************************************

// const callback = function () {
//   console.log('Через 3 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// setTimeout(callback, 3000);

// console.log('В коде после таймаута');

// ****************************************************

const filter = function (array, test) {
  const filteredArray = [];

  for (const element of array) {
    // console.log(element);
    const passed = test(element);

    if (passed) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

// const callback1 = function (value) {
//   return value >= 3;
// };

// const result1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(result1);

// const result2 = filter([1, 2, 3, 4, 5], function (value) {
//   return value <= 4;
// });
// console.log(result2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 150;
};

const result3 = filter(fruits, getFruitsWithQuantity);
console.log(result3);

// ****************************************************
