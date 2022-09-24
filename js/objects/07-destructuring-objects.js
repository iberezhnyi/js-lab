// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   author: 'Mango',
// };

// const {
//   rating,
//   tracks,
//   name,
//   string,
//   trackCount: numberOfTracks = 0,
//   author = 555,
//   song,
// } = playlist;

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);

// console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);

// console.log(playlist);

// console.log(name, string, rating, tracks, numberOfTracks, author, song);

// ********************************************************************************

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 1,
//       c: 2,
//       d: 3,
//     },
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: {
//     followers: myFollowers = 58,
//     views,
//     likes,
//     a: { b, c, d },
//   },
// } = profile;

// // const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, myFollowers, views, likes, b, c, d);

// // ********************************************************************************

// const rgb = [255, 100, 80];

// const [red, , blue] = rgb;

// console.log(red, blue);

// ********************************************************************************

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);
// // console.log(entries);

// for (const [name, rating] of entries) {
//   //   console.log(entry);

//   //   const [name, rating] = entry;

//   //   const name = entry[0];
//   //   const rating = entry[1];
//   console.log(name, rating);
// }

// console.log(keys);

// const ratings = Object.values(authors);

// console.log(Math.max(...ratings));

// ********************************************************************************

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// const restProps = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };

// console.log(name, tag, location);
// console.log(restProps);

// ********************************************************************************

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(name, tag, location, avatar, followers, views, likes);
// };

const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
