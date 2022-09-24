// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);
//   console.log(friend.online);

//   friend.newprop = 555;
// }

// console.table(friends);

// *************************************************

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     const friendValues = Object.values(friend);

//     for (const value of friendValues) {
//       //   console.log(value);

//       if (value === name) {
//         return `${name} нашли!`;
//       }
//     }
//   }

//   return `${name} нету!!!`;
// };

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `${name} нашли!`;
//     }
//   }

//   return `${name} нету!!!`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// *************************************************

// const friendNamesList = function (allFriends) {
//   const friendNames = [];

//   for (const friend of allFriends) {
//     friendNames.push(friend.name);
//   }
//   return friendNames;
// };

// console.log(friendNamesList(friends));

// *************************************************

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// *************************************************

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// *************************************************

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByOnlineStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByOnlineStatus.online.push(friend);
//       continue;
//     }

//     friendsByOnlineStatus.offline.push(friend);
//   }

//   return friendsByOnlineStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

// *************************************************

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).length);
