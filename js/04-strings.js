// Длина строки length

const message = 'В этой строке 26 символов.';

console.log(message.length);

// Конкатенация строк

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// Скрипт пример

const room = 716;
const type = 'VIP';

// Олдскулл
// const welcomeMsg =
//   'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}.`;

console.log(welcomeMsg);

// Template strings

const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;

console.log(orderMsg);

// Нормализация с методом toLowerCase()

const brand = 'SaMSuNg';
const normalizedBrand = brand.toLowerCase();
console.log(brand);
console.log(normalizedBrand);

let brands = 'SaMSuNg';
console.log(brands);
console.log(brands[0]);
console.log(brands.slice(1));
brands = brand[0] + brands.slice(1).toLowerCase();
console.log(brands);

// Поиск в строке с методом includes()

const blackListedWord1 = 'спам';
const blackListedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blackListedWord1));
console.log(string1.includes(blackListedWord2));

console.log(string2.includes(blackListedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blackListedWord2));

console.log(string3.includes(blackListedWord1));
console.log(string3.includes(blackListedWord2));
