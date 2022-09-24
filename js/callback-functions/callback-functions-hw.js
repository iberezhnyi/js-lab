// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//         return console.log(onSuccess(pizzaName));
//       }
//     }

//     return console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// *****************************************************************************

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function callback(num) {
//     totalPrice += num;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// const result = calculateTotalPrice([12, 85, 37, 4]);
// console.log(result);

// *****************************************************************************

function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];

  numbers.forEach(num => {
    if (num % 2 === 0) {
      const newNum = num + value;

      newArray.push(newNum);
    } else {
      newArray.push(num);
    }
  });

  return newArray;
  // Change code above this line
}

const result = changeEven([2, 8, 3, 7, 4, 6], 10); // [12, 18, 3, 7, 14, 16]
console.log(result);
