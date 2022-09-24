// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const elem in object) {
//     // console.log(elem);
//     if (object.hasOwnProperty(elem)) {
//       propCount += 1;
//     }
//   }

//   //   return Object.values(object).length;
//   // Change code above this line
//   return propCount;
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// *******************************************************************************************

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const values = [];

// // Change code below this line

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// *******************************************************************************************

// function countProps(object) {
// Change code below this line
//   let propCount = 0;

//   Object.keys(object);

//   for (const key of Object.keys(object)) {
//     propCount += 1;
//   }

//   return Object.keys(object).length;
// Change code above this line
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// *******************************************************************************************

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// // console.log(colors);

// console.log(hexColors);
// console.log(rgbColors);

// *******************************************************************************************

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice('Engine'));

// *******************************************************************************************

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям
// з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості з таким ім'ям,
// функція повинна повернути порожній масив.

//   const priceOfProducts = [];
//   const quantityOfProducts = [];

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   let propValueOfProducts = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       propValueOfProducts.push(product[propName]);
//     } else {
//       propValueOfProducts = [];
//     }
//   }

//   return propValueOfProducts;

//   // Change code above this line
// }

// console.log(getAllPropValues('wqer'));

// *******************************************************************************************

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (Object.values(product).includes(productName)) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Change code above this line
// }

// console.log(calculateTotalPrice('Raddar'));

// *******************************************************************************************

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ************************************************************

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   const newDefaultObject = {
//     completed,
//     category,
//     priority,
//   };
//   const newDataObject = { ...newDefaultObject, ...data };

//   return newDataObject;
//   // Change code above this line
// }

// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));

// ************************************************************

// Change code below this line
// function add(...args) {
//   let res = 0;
//   for (const arg of args) {
//     res += arg;
//   }
//   return res;
//   // Change code above this line
// }

// const result = add(12, 4, 11, 48);
// console.log(result);

// ************************************************************

// // Change code below this line
// function findMatches(numbersArray, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     for (const number of numbersArray) {
//       if (number === arg) {
//         matches.push(arg);
//       }
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// const result = findMatches([4, 89, 17, 36, 2, 50, 43, 38], 8, 17, 89, 27, 2, 38);
// console.log(result);

// ************************************************************

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (Object.values(potion).includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (Object.values(potion).includes(potionName)) {
//         const potionIndex = this.potions.indexOf(potion);

//         return this.potions.splice(potionIndex, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (Object.values(this.potions[i]).includes(oldName)) {
//         return (this.potions[i].name = newName);
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// const resultAddPotion = atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// console.log(resultAddPotion);

// const resultremovePotion = atTheOldToad.removePotion('Speed potion');
// console.log(resultremovePotion);

// const resultOfChangeName = atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(resultOfChangeName);

// const resultOfAllPotions = atTheOldToad.getPotions();
// console.log(resultOfAllPotions);

// ************************************************************

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const indexOfItemToRemove = this.items.indexOf(itemToRemove);
//     return this.items.splice(indexOfItemToRemove, 1);
//   }
// }
// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const indexOfItemToRemove1 = ['Nanitoids', 'Antigravitator', 'Droid'].indexOf('Droid');
// console.log(indexOfItemToRemove1);

// const res = ['Nanitoids', 'Antigravitator', 'Droid'].slice(indexOfItemToRemove1, 1);
// console.log(res);

// ************************************************************

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     return (this.value += str);
//   }

//   padStart(str) {
//     return (this.value = str + this.value);
//   }

//   padBoth(str) {
//     return (this.value = str + this.value + str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// ************************************************************

// class Car {
//   // Change code below this line
//   #brand = '';

//   constructor({ brand, model, price }) {
//     this.model = model;
//     this.price = price;
//     this.#brand = brand;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));

// ************************************************************

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return;
//     }
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ************************************************************

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super();
//     this.email = email;
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ************************************************************

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
