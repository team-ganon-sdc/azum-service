// generate array of objects, with each object having the following structure:
// {
//   "author": String,
//   "body": String,
//   "item": Number,
//   "rating": Number,
//   "likes": Number
// }

const fs = require("fs");
const faker = require("faker");

let data = "author, body, item, rating, likes\n";

const writeReviews = fs.createWriteStream("reviews.csv");
writeReviews.write("author,body,item,rating,likes\n", "utf8")

const writeAllReviews = (writer, encoding, callback) => {
  let i = 10000000;

  const write = () => {
    let ok = true;
    while (i-- && ok) {
      let reviewCount = Math.floor(Math.random() * 4) + 2; // generate random # of reviews between 2 and 5
      while (reviewCount--) {
        const data = `${faker.name.firstName()}, ${faker.lorem.paragraph()}, ${i + 1}, ${Math.floor(Math.random() * 10) + 1}, ${Math.floor(Math.random() * 490 + 1) + 10}\n`
        if (i === 0 && reviewCount === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    }
    if (i > 0) {
      writer.once("drain", write);
    }
  }
  write();
}

writeAllReviews(writeReviews, "utf-8", () => {
  writeReviews.end();
});