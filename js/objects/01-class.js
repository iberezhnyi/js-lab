class Car {
  static description = 'Класс описывающий автомобиль';

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }

  #test = 'test';

  constructor({ brand, model, price } = {}) {
    // console.log('Выполняется constructor');
    // console.log(this);

    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  //   changePrice(newPrice) {
  //     this.price = newPrice;
  //   }

  //   setModel(newModel) {
  //     this._model = newModel;
  //   }

  //   getModel() {
  //     return this.model;
  //   }
}

const carInstance = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstance);
console.log(carInstance.model);

carInstance.model = 'Q4';

console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

// Car.logInfo(carInstance);

// carInstance.changePrice(2000);
// console.log(carInstance);

// console.log(carInstance.getModel());

// carInstance.setModel('A6');
// console.log(carInstance.getModel());

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
