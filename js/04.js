const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let quantity = prompt('Сколько дроидов желаете?');

if (quantity === null) {
  console.log('Отменено пользователем!');
} else if (quantity > 0) {
  totalPrice = Number.parseInt(quantity) * pricePerDroid;

  console.log(
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${Number.parseInt(quantity)} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`
  );
} else {
  console.log('Не шали! :)');
}
