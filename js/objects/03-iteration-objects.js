const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
// const keys = Object.keys(feedback);

// // console.log(keys);

// for (const key of keys) {
//   console.log(key, feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// ******************************************************

const values = Object.values(feedback);

for (const value of values) {
  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);
