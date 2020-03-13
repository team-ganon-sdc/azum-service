const request = require('supertest');
const server = require('../server/index.js');

describe('jest is testing written code', () => {

  test('that jest is working', () => {
    expect(2 + 1).toBe(3);
  });

});

describe('the express server is functioning properly', () => {

  afterAll(function (done) {
    mongoose.connection.close(() =>
      server.close(done)
    );
  });

  test('It should response the GET method', done => {
    request(server)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It shouldn\'t get something that doesn\'t extist', done => {
    request(server)
      .get('/nothing')
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test('It should get data from the reviews', done => {
    request(server)
      .get('/reviews/45')
      .then(response => {
        // there are 6 items with the id of 45
        // if the database is filles this needs to be changed
        expect(response.body.length).toBe(6);
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('The server shopuld get post requests', done => {
    request(server)
      .post('/reviews')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It should recieve a review', done => {
    request(server)
      .post('/reviews')
      .then(response => {
        console.log(response.body);
        expect(response.body).toBe('sent');
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});