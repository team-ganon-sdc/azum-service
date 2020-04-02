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

let i = 100000
while (i--) {
  let reviewCount = Math.floor(Math.random() * 4) + 2; // generate random # of reviews between 2 and 5

  while (reviewCount--) {
    data.push({
      author: faker.name.firstName(),

      body: faker.lorem.paragraph(),
      // item id
      item: i + 1,
      // generate rating between 1 and 10
      rating: Math.floor(Math.random() * 10) + 1,
      likes: Math.floor(Math.random() * 490 + 1) + 10
    });
  }
}

const jsonData = JSON.stringify(data);

fs.writeFile("database/data2.json", jsonData, err => {
  if (err) {
    console.log(err);
  }
});
