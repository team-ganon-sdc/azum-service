const faker = require("faker");

const generateRandomData = (userContext, events, done) => {
  const id = Math.floor(Math.random() * 30000000) + 1;
  const item = Math.floor(Math.random() * 10000000) + 1;
  const author = faker.name.firstName();
  const body = faker.lorem.paragraph();
  const rating = Math.floor(Math.random() * 10) + 1;
  const likes = Math.floor(Math.random() * 490 + 1) + 10;

  userContext.vars.id = id;
  userContext.vars.item = item;
  userContext.vars.author = author;
  userContext.vars.body = body;
  userContext.vars.rating = rating;
  userContext.vars.likes = likes;

  return done();
}

module.exports = {
  generateRandomData
};