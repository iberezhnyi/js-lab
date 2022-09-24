// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//     console.log('number: ', number);

// });

// console.log(numbers);

// **********************************************************************

// const doubledNums = numbers.map(number => {
//   console.log('number: ', number);

//   return number * 2;
// });

// console.log(numbers);
// console.log(doubledNums);

// **********************************************************************

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(({ title }) => title);

// console.log(titles);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(({ genres }) => genres);

// console.log(genres);

// **********************************************************************

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = function (allUsers) {
//   const names = allUsers.map(({ name }) => name);
//   return names;
// };

// // const getUserNames = users.map(({ name }) => name);

// // const getUserNames = users.map(users => {
// //   return users.name;
// // });

// const res = getUserNames(users);
// console.log(res);

// const getUserEmails = users => users.map(({ email }) => email);
// const res1 = getUserEmails(users);
// console.log(res1);

// **********************************************************************

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(function (number) {
//   if (number % 2 === 0) {
//     return [number];
//   }
// });

// const oddNumbers = numbers.filter((number) => {
//   if (number % 2 !== 0) {
//     return [number];
//   }
// });

// console.log(evenNumbers);
// console.log(oddNumbers);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// // Change code below this line

// const allGenres = books.flatMap(({ genres }) => genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(uniqueGenres);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// console.table(topRatedBooks);

// // const booksByAuthor = books.filter(function (book) {
// //   return book.author === AUTHOR;
// // });
// // console.log(booksByAuthor);

// **********************************************************************

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
// // Change code above this line

// const res = getUsersWithEyeColor(users, 'brown');
// console.log(res);

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
// // Change code above this line

// const res = getUsersWithFriend(users, 'Goldie Gentry');
// console.log(res);

// **********************************************************************

// Варіант запису 1:

// Change code below this line
// const getFriends = users => {

//   const allFriends = users.flatMap(user => {
//     return user.friends;
//   });

//   return allFriends.filter(function (friend, index, array) {
//     return array.indexOf(friend) === index;

//   });
// };
// // Change code above this line

// const res = getFriends(users);
// console.log(res);

// Варіант запису 2:

// Change code below this line
// const getFriends = users => {
//   const allFriends = users.flatMap(({ friends }) => friends);

//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Change code above this line

// const res = getFriends(users);
// console.log(res);

// Варіант запису 3:

// Change code below this line
// const getFriends = users =>
//   users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);

// // Change code above this line

// const res = getFriends(users);
// console.log(res);

// **********************************************************************

// Варіант запису 1:

// const getActiveUsers = users => {
//   return users.filter(user => {
//     if (user.isActive) {
//       return user;
//     }
//   });
// };

// const res = getActiveUsers(users);
// console.log(res);

// Варіант запису 2:

// const getActiveUsers = users =>
//   users.filter(user => {
//     if (user.isActive) {
//       return user;
//     }
//   });

// const res = getActiveUsers(users);
// console.log(res);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// console.log(bookWithTitle);

// const bookByAuthor = books.find(({ author }) => author === AUTHOR);
// console.log(bookByAuthor);

// **********************************************************************

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
//   // user.email === email;
//   // console.log(user.email === email);
//   // });
// };
// // Change code above this line

// const res = getUserWithEmail(users, 'elmahead@omatom.com');
// console.log(res);

// **********************************************************************

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(elem => elem % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(elem => elem % 2 !== 0);

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

// console.log(eachElementInFirstIsEven);

// **********************************************************************

// const isEveryUserActive = users => users.every(({ isActive }) => isActive);

// **********************************************************************

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, { playtime, gamesPlayed }) => acc + playtime / gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame);

// **********************************************************************

// // Change code below this line
// const getTotalFriendCount = users => {
//   const allFriends = [];
//   users.reduce((acc, user) => {
//     allFriends.push(...user.friends);
//   }, []);
//   return allFriends.length;
// };
// // Change code above this line

// const res = getTotalFriendCount(users);
// console.log(res);

// **********************************************************************

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// **********************************************************************

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((prevBook, nextBook) => nextBook - prevBook);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((prevAuthor, nextAuthor) =>
//   prevAuthor.author.localeCompare(nextAuthor.author)
// );

// const sortedByReversedAuthorName = [...books].sort((prevAuthor, nextAuthor) =>
//   nextAuthor.author.localeCompare(prevAuthor.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (prevRating, nextRating) => prevRating.rating - nextRating.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (prevRating, nextRating) => nextRating.rating - prevRating.rating
// );

// **********************************************************************

// Change code below this line
// const sortByAscendingBalance = users =>
//   [...users].sort((prevBalance, nextBalance) => prevBalance.balance - nextBalance.balance);
// // Change code above this line
// // console.table(users);

// const res = sortByAscendingBalance(users);
// console.table(res);

// **********************************************************************

// Change code below this line
// const sortByDescendingFriendCount = users =>
//   [...users].sort((prevUser, nextUser) => {
//     // console.log(nextUser.length);
//     return nextUser.friends.length - prevUser.friends.length;
//   });
// // Change code above this line

// const res = sortByDescendingFriendCount(users);
// console.table(res);

// **********************************************************************

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .sort((prevBook, nextBook) => prevBook.author.localeCompare(nextBook.author))
//   .map(({ author }) => author);

// console.table(names);

// **********************************************************************

// Change code below this line
// const getSortedFriends = users =>
//   [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort();
// // Change code above this line

// // const getSortedFriends = users => [...users].flatMap((user) => user.friends).filter((user, index, array) => array.indexOf(friend) === index.sort((prevFriend, nextFriend) => prevFriend.localeCompare(nextFriend));

// const res = getSortedFriends(users);
// console.table(res);

// **********************************************************************

// Change code below this line
const getTotalBalanceByGender = (users, gender) =>
  [...users]
    .filter(user => {
      if (user.gender === gender) {
        return [user];
      }
    })
    .reduce((acc, user) => acc + user.balance, 0);
// Change code above this line

const res = getTotalBalanceByGender(users, 'female');
console.table(res);
console.log(res);
