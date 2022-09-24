const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден';

// `Пользователь ${loginToFind} не найден`;
// `Пользователь ${loginToFind} Есть!!!!!!`;

// for (let i = 0; i < logins.length; i += 1) {
//   //   console.log(logins[i]);
//   const login = logins[i];

//   console.log('Login: ', login);

//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!!');

//     message = `Пользователь ${loginToFind} Есть!!!!!!`;
//     break;
//   }

//   // *******************************************

//   //   if (login !== loginToFind) {
//   //     message = `Пользователь ${loginToFind} не найден`;
//   //   } else {
//   //     message = `Пользователь ${loginToFind} Есть!!!!!!`;
//   //     break;
//   //   }
// }
// console.log(message);

// *******************************************

// for (const login of logins) {
// }

// *******************************************

// for (const login of logins) {
//   console.log('Login: ', login);

//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!!');

//     message = `Пользователь ${loginToFind} Есть!!!!!!`;
//     break;
//   }
// }

// console.log(message);

// console.log(logins.includes(loginToFind));

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} Есть!!!!!!`
  : `Пользователь ${loginToFind} не найден`;

console.log(message);
