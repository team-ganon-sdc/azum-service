const Review = require('../database/Review.js');

test('the seed script adds to the database', () => {
  Review.find({ item: 1 }, (err, items) => {
    expect(item.length).toBe(3);
  });
});