const total = 100;
const ordered = 50;

if (total < ordered) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// ***************

const message =
  total < ordered ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);
