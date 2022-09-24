// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   getName(a) {
//     console.log('Ага, это getName :)', a);
//   },
// };

// console.log(playlist);

// playlist.getName(5);

// ****************************************************

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return `Track count: ${this.tracks.length}`;
  },
};

playlist.changeName('New name!');
playlist.addTrack('New трек');
// playlist.addTrack('New трек 2');
playlist.updateRating(50);

console.log(playlist);

console.log(playlist.getTrackCount());
