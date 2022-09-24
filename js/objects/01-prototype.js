// const objC = {
//   z: 5,
// };

// console.log('objC', objC);

// // console.log(objC.hasOwnProperty('t'));

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB', objB);

// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA', objA);

// console.log('objA.z', objA.z);
// console.log("objA.hasOwnProperty('z')", objA.hasOwnProperty('z'));

// ************************************************************************************

// const dummyObj = {
//   message: 'Это собственное свойство объекта',
// };

const dummyObj = Object.create({ message: 'Это собственное свойство объекта прототипа' });
dummyObj.message = 'Это собственное свойство объекта';

console.log('dummyObj', dummyObj);

console.log(dummyObj.message);
