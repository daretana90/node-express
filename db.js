// Configuration for SQL SERVER
const sql = require("mssql/msnodesqlv8");
require("dotenv").config();

const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
  port: parseInt(process.env.DB_PORT),
};

// Connection
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Data base connection SUCCESS!");
    // console.log(pool);
    return pool;
  })
  .catch((err) => {
    console.log("Data base connection faild" + err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
