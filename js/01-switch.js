const stars = 2;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет');
}

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log('Такого количества звезд нет');
}

console.log(price);

// ************************
// Скрипт для выбора отеля по количеству звезд.
// 1, 2 - 20, 3,4 - 40, 5 - 120.

const stars1 = 2;
let price1;

if (stars1 === 1 || stars1 === 2) {
  price1 = 20;
} else if (stars === 2 || stars1 === 3) {
  price1 = 40;
} else if (stars === 5) {
  price1 = 120;
} else {
  console.log('Такого количества звезд нет');
}

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;

  case 3:
  case 4:
    price = 50;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log('Такого количества звезд нет');
}

console.log(price1);

// ************************

const option = 2;
let message = '';

switch (option) {
  case 1:
    message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 09:00 до 18:00';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;

  default:
    message = 'Вам перезвонит менеджер';
}

console.log(message);
