let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнёр, скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Серебрянный партнёр, скидка 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Золотой партнёр, скидка 10%');
  discount = 0.1;
} else {
  console.log('Не партнёр, скидка 0%');
}

payment -= payment * discount;
// payment = payment - payment * discount;

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;
// totalSpent = totalSpent + payment;

console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
