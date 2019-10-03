require("dotenv").config();
const router = require("express").Router();
const connection = require("./SQLconnection");

router.get("/productDelete/:id", (req, res) => {
  let query = `DELETE FROM products WHERE id_products=?`;
  let product = req.params.id;
  connection.query(query, [product], (err, data) => {
    if (err) {
      console.log(err);
      console.log(query);
      return res.send(err);
    } else {
      return res.redirect("/product");
    }
  });
});

module.exports = router;
