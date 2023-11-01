const { Pool } = require("pg");

// const pool = new Pool({
//   host: "localhost",
//   database: "itnews",
//   user: "postgres",
//   password: "123",
//   port: 5432,
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

pool.on("error", (err) => {
  console.log("Error: " + err);
  process.exit(-1);
});

module.exports = pool;
