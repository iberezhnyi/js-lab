// Цикл for

// for (инициализация; условие; пост - выражение) {
//     тело цикла
// }

// for (let i = 50; i >= 0; i -= 5) {
//   console.log(i);
// }

// console.log('adfasdf');

// Pre-increment и Post-increment

// let a = 10;
// const b = a++;
// console.log(a);
// console.log(b);

// **********************

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//   console.log(`ЗП работника номер ${i} - ${salary}`);
//   totalSalary += salary;
// }

// console.log('totalSalary - ', totalSalary);

// // **************************

const min = 9;
const max = 17;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log('Не чётное - ', i);
    continue;
  }

  console.log('Чётное - ', i);
  total += i;
}

console.log('total - ', total);
