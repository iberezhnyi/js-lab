const title = 'Top 10 benefits of React framework';
const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(' ');
const slug = words.join('-');

// console.log(title);
// console.log(normalizedTitle);
// console.log(words);
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);
