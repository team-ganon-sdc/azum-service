const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "reviews"
});

// IMPLEMENTATION WITH ASYNC / AWAIT
const execute =  async () => {
  try {
    await client.connect();
    console.log("Connected successfully!");
    await client.query(`
      CREATE TABLE review (
        id BIGSERIAL PRIMARY KEY,
        author VARCHAR(50) NOT NULL,
        body VARCHAR(500) NOT NULL,
        item INT NOT NULL,
        rating INT NOT NULL,
        likes INT NOT NULL
    )`);
    await client.query(`
      COPY review(author, body, item, rating, likes)
      FROM '/Users/azumbeg/Desktop/Hack Reactor/azum-service-sdc/reviews.csv' DELIMITER ',' CSV HEADER
    `);
  }
  catch (e) {
    console.log(e);
  }
  finally {
    await client.end();
  }
}

execute();

// IMPLEMENTATION WITH PROMISES

// client.connect()
//   .then(() => console.log("Connected successfully"))
//   .then(() => client.query("SELECT * FROM person LIMIT 10"))
//   .then(results => console.table(results.rows))
//   .catch(e => console.log(e))
//   .finally(() => {
//     client.end()
//   });
