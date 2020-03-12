const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Review = require('../database/Review.js');

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/reviews/:appid', (req, res) => {
  Review.find({ item: req.params.appid }, (err, reviews) => {
    if (err) {
      return console.log(err);
    }
    res.json(reviews);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));