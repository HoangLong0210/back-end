const { Pool } = require("pg");

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "123",
//   database: "itnews",
// });

const pool = new Pool({
  connectionString: "postgres://postgres:123@localhost:5432/itnews",
});

pool.on("error", (err) => {
  console.log("Error: " + err);
  process.exit(-1);
});

module.exports = pool;
