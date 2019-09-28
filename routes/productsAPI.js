// Contacts API
require("dotenv").config();
const router = require("express").Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection successful API products");
});

router.get("/products", (req, res) => {
  connection.query(
    "SELECT pro.*, pri.prices AS price FROM products pro LEFT JOIN price pri ON pro.id_products = pri.product_id",
    (err, data) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        return res.json(data);
      }
    }
  );
});

module.exports = router;
