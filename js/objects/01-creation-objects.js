// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   a: 5,
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const nrjfm = function () {
//   return { a: 5 };
// };

// console.log(nrjfm());

// ***********************************************

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;
// playlist.rating = 10;

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// ***********************************************

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// ***********************************************

// const a = { x: 1, y: 2 };
// const b = a;

// a.hello = 100;

// b.c = 800;

// console.log(b === a);

// console.log('a: ', a);
// console.log('b: ', b);

// console.log({ x: 1, y: 2 } === { x: 1, y: 2 });

// ***********************************************

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

const fn = function () {
  console.log('hello');
};

fn.hello = ':)';

console.dir(fn.hello);
