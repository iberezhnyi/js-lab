// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [0, 5, 10, ...[1, 2, 3, 500, 459], 4, 5];

// const numbers = [...[4, 5, 6], ...[1, 2, 3, 500, 459], ...[7, 8, 9]];

// console.log(numbers);

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 2, 17, 5, 6));

// console.log(Math.min(temps));
// console.log(Math.min(...temps));

// const a = [1, 2, 3];

// const b = [...a];

// console.log(b === a);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log(a[0] === b[0]);

// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);

// console.log('b: ', b);

// **********************************************

const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

console.log(Math.max(...allTemps));

// **********************************************

const a = { x: 1, y: 2, g: { hello: 'World!' } };
const b = { x: 0, z: 3 };

// const c = {};

// Object.assign(c, a, b);

const c = {
  ...a,
  name: 'Mango',
  ...b,
};

console.log(c);

const h = {
  ...a,
  x: 10,
  ...b,
  y: 20,
};

console.log(h);

// **********************************************

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
