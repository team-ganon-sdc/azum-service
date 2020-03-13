const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Review = require('../database/Review.js');

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/reviews/:appid', (req, res) => {
  const appId = req.params.appid;
  Review.find({ item: appId }, (err, reviews) => {
    if (err) {
      return console.log(err);
    }
    res.json(reviews);
  });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;