// const fnA = function (parameter) {
//   const innerVariable = 'Inner value fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('Log innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ***************************************************

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} make ${dish}`);
// };

// makeDish('Mango', 'cake');
// makeDish('Mango', 'potato');
// makeDish('Mango', 'tea');

// makeDish('Poly', 'meat');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'coffee');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} make ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');
// // console.log(mango);

// mango('borshch');
// mango('corn');

// const poly = makeSheff('Poly');
// // console.log(poly);

// poly('fish');
// poly('water');

// ***************************************************

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (value, places) {
//   return Number(floatingPoint.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
  return function (number) {
    return Number(floatingPoint.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));
console.log(rounder2(5.1234));
console.log(rounder3(3.4567));
