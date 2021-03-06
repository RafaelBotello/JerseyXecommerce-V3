// Contacts API
require("dotenv").config();
const router = require("express").Router();
const connection = require("./SQLconnection");

router.get("/products", (req, res) => {
  connection.query(
    "SELECT pro.*, pri.prices AS price FROM products pro LEFT JOIN price pri ON pro.id_products = pri.product_id ORDER BY price ASC",
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
