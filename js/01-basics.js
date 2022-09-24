const add = function (x, y) {
  console.log(x);
  console.log(y);

  //   console.log('result: ', result);
  console.log('Выполняется функция add');

  return x + y;
};

const r1 = add(5, 3);
console.log('r1 - ', r1);
add(2, 3);
add(10, 13);
add(20, 33);

// *************************************

const fn = function () {
  console.log(1);

  console.log(2);

  console.log(3);
};

console.log(fn());
