// const Car = function (value) {
//   console.log(this);

//   this.a = value;
// };

// const myCar = new Car(5);
// console.log(myCar);

// const myCar2 = new Car(10);
// console.log(myCar2);

// ******************************************************************************

// const Car = function ({ brand, model, price } = {}) {
//   //   console.log(config);
//   //   const { brand, model, price } = config;

//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   //   this.changePrice = function (newPrice) {
//   //     this.price = newPrice;
//   //   };
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.changePrice(10000);
// console.log(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: 65000,
// });
// console.log(myCar3);

// ******************************************************************************

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: 'mango@mail.com', password: 'qwqwre' });

mango.changeEmail('mangogogo@gmail.com');
console.log(mango);

User.message = 'Я статическое свойство, меня нету на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log(obj);
  console.log('Почта ', obj.email);
  console.log('Пароль ', obj.password);
};

User.logInfo(mango);

console.dir(User);

console.log(
  Object.values({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
  })
);
