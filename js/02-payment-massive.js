const cart = [54, 28, 105, 70, 92, 17, 120];
let totalPayment = 0;

// for (const pay of cart) {
//   console.log(pay);
//   totalPayment += pay;
// }

// **************************

for (let i = 0; i < cart.length; i += 1) {
  console.log('****************');

  console.log(cart[i]);

  cart[i] = Math.round(cart[i] * 1.2);

  console.log('+20% будет - ', cart[i]);

  totalPayment += cart[i];

  console.log('Сумма на каждой итерации с налогом = ', totalPayment);
}

console.log('totalPayment - ', totalPayment);
