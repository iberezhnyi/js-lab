const cart = {
  items: [],
  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      console.log(item);

      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log('Нашли: ', productName);
        console.log('Индекс: ', i);

        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;

    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grass', price: 70 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.remove('lime');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
