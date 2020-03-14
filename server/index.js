const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Review = require('../database/Review.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/reviews/:appid', (req, res) => {
  const appId = req.params.appid;
  Review.find({ item: appId }, (err, reviews) => {
    if (err) {
      return console.log(err);
    }
    res.json(reviews);
  });
});

app.post('/reviews', (req, res) => {
  const review = req.body;
  Review.create(review, (err, response) => {
    if (err) {
      return console.log(err);
    }
    res.json('sent');
  });
});

const server = app.listen(port, () => console.log(`Review component running on port ${port}!`));

module.exports = server;