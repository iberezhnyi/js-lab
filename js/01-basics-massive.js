// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// console.log(friends[1]);

// console.log(['Mango', 'Kiwi', 'Poly', 'Ajax'][3]);

// console.log(friends[4]);

// friends[1] = 'qweqweqw';

// console.table(friends);

// *************************************************

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const c = [1, 2, 3, 4, 5];
// const d = c;

// console.log('c', c);
// console.log('d', d);

// c[0] = 43;

// console.log('c', c);
// console.log('d', d);

// console.log(c === d);
// console.log([1, 2, 3, 4, 5] === [1, 2, 3, 4, 5]);

// *************************************************

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

const lastIndex = friends.length - 1;

for (let i = 0; i <= lastIndex; i += 1) {
  // console.log(i);

  // console.log(friends[i]);

  friends[i] += `-${i}`;
  console.log(friends[i]);
}

// for (const friend of friends) {
//   console.log(friend);
// }

// console.table(friends);
