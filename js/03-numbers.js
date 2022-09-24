// elementWidth

let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(typeof result);

elementWidth = Number.parseInt(elementWidth);

console.log('elementWidth: ', elementWidth);

// elementHeight

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);

console.log('elementHeight: ', elementHeight);

// toFixed

let salary = 1300.16472;

console.log(salary);

salary = Number(salary.toFixed(3));

console.log(salary);

console.log(Number(salary.toFixed(3)));

// NumberValue

let quantity = '30';
let value = '45 Эту строку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value));

// Math

// console.log(Math.PI);

const base = 2;
const power = 5;

// const result = Math.pow(base, power);

const result = base ** power;

console.log(result);

// Скрипт

// const numb = prompt('Введите число');
// const degree = prompt('Введите степень');

// numb = Number(numb);
// degree = Number(degree);

// let resDegree = Number(numb ** degree);

// console.log(resDegree);

// Random

const max = 230;
const min = 280;

let resultQ = Math.round(Math.random() * (max - min) + min);

console.log(resultQ);

// Math.random() * (max - min) + min

// Colors

const colors = ['tomato', 'teal', 'orangered', 'yellow', 'deeppink', 'skyblue'];
const maxs = colors.length - 1;
const mins = 0;

const index = Math.round(Math.random() * (maxs - mins) + mins);
const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
