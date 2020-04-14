require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Review = require('../database/Review.js');
const bodyParser = require('body-parser');
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "reviews"
});

const connect = async () => {
  try {
    await client.connect();
    console.log("Connected to database...");
  }
  catch (e) {
    console.log(`Database connection error: ${e}`);
  }
}
connect();

const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/reviews/:appid', async (req, res) => {
  try {
    const appId = req.params.appid;
    const { rows } = await client.query(`SELECT * FROM Review WHERE item = $1`, [appId]);
    res.json(rows);
  }
  catch (e) {
    console.log(`Error fetching reviews: ${e}`);
    res.json(e);
  }
});

app.post('/reviews', async (req, res) => {
  try {
    const { item, author, body, rating, likes } = req.body;
    const result = await client.query(`INSERT INTO Review (item, author, body, rating, likes) VALUES ($1, $2, $3, $4, $5)`, [item, author, body, rating, likes]);
    res.json(result);
  }
  catch (e) {
    console.log(`Error posting review: ${e}`);
    res.json(e);
  }
});

app.put('/reviews/:reviewId', async (req, res) => {
  try {
    const { item, author, body, rating, likes } = req.body;
    const result = await client.query(`UPDATE Review SET item = $1, author = $2, body = $3, rating = $4, likes = $5 WHERE id = $6`, [item, author, body, rating, likes, req.params.reviewId]);
    res.json(result);
  }
  catch (e) {
    console.log(e);
    res.json(e);
  }
});

app.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const result = await client.query("DELETE FROM Review WHERE id = $1", [req.params.reviewId]);
    res.json(result);
  }
  catch (e) {
    console.log(`Error deleting review: ${e}`);
    res.json(e);
  }
});

app.post('/likes/:reviewId', async (req, res) => {
  try {
    const result = await client.query("UPDATE Review SET likes = likes + 1 WHERE id = $1", [req.params.reviewId]);
    res.json(result);
  }
  catch {
    console.log(`Error updating likes: ${e}`);
    res.json(e);
  }
});

const server = app.listen(port, () => console.log(`Review component running on port ${port}!`));

module.exports = server;