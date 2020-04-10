const { performance } = require("perf_hooks");
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
      CREATE TABLE Review (
        id BIGSERIAL PRIMARY KEY,
        item INT NOT NULL,
        author VARCHAR(50) NOT NULL,
        body VARCHAR(500) NOT NULL,
        rating INT NOT NULL,
        likes INT NOT NULL
    )`);
    await client.query(`
      COPY Review (item, author, body, rating, likes)
      FROM '/Users/azumbeg/Desktop/Hack Reactor/azum-service-sdc/reviews.csv' DELIMITER ',' CSV HEADER
    `);
  }
  catch (e) {
    console.log(e);
  }
  finally {
    await client.end();
    // performance measurement
    const t1 = performance.now();
    console.log(`Execution time: ${t1 - t0}ms`);
  }
}

const t0 = performance.now();
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
