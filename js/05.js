let price;
let message = '';
let state = prompt('Введите страну доставки');

state = state[0].toUpperCase() + state.slice(1).toLowerCase();

switch (state) {
  case 'Китай':
    price = 100;
    message = `Доставка в ${state} будет стоить ${price} кредитов`;
    break;

  case 'Чили':
    price = 250;
    message = `Доставка в ${state} будет стоить ${price} кредитов`;
    break;

  case 'Австралия':
    price = 170;
    message = `Доставка в ${state} будет стоить ${price} кредитов`;
    break;

  case 'Индия':
    price = 80;
    message = `Доставка в ${state} будет стоить ${price} кредитов`;
    break;

  case 'Ямайка':
    price = 120;
    message = `Доставка в ${state} будет стоить ${price} кредитов`;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);
