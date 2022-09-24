// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));

console.log(slugify('Azure Static Web Apps are Awesome'));

console.log(slugify('Technical writing tips for non-native English speakers'));
