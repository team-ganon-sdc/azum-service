// generate array of objects, each object looking as follows
// {
//   "author": String,
//   "body": String,
//   "item": Number,
//   "rating": Number,
//   "likes": Number
// }

const fs = require("fs");
const faker = require("faker");

const data = [];

const i = 10000000
while (i--) {
  const reviewCount = Math.floor(Math.random() * 16 + 5); // generate random # of reviews between 5 and 20

  while (reviewCount--) {
    data.push({
      author: ,

      body: ,
      // item id
      item: i,
      // generate rating between 1 and 10
      rating: Math.floor(Math.random() * 10 + 1),
      likes:
    });
  }
}

const jsonData = JSON.stringify(data);

// fs.writeFile("data.json", jsonData, err => {
//   if (err) {
//     console.log(err);
//   }
// });

module.exports = data;