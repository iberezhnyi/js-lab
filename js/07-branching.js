// Оператор ветвления if

if (6 > 8) {
  //тело
  console.log('qweqwe');
}

console.log('дальше');

// Оператор ветвления if else

if (6 > 7) {
  //тело
  console.log('x > y');
} else {
  console.log('sdfsf');
}

// Оператор ветвления if else

const salary = 2000;

if (salary < 500) {
  console.log('Level 1');
} else if (salary > 500 && salary < 2000) {
  console.log('Level 2');
} else if (salary > 2000 && salary <= 5000) {
  console.log('Level 3');
} else {
  console.log('Level 4');
}

// Тернарный оператор

const balance = 1000;
let message;

if (balance >= 0) {
  message = 'Позитивный баланс';
} else {
  message = 'Негативный баланс';
}

console.log(message);

// const message = условие ? выражение1 : выражение2;

const message2 = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message2);

// Блочная область видимости переменных

const b = 10;

if (true) {
  console.log(b);

  const a = 5;

  console.log(a);
}

console.log(b);
console.log(a);
