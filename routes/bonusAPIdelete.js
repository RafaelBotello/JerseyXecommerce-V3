require("dotenv").config();
const router = require("express").Router();
const connection = require("./SQLconnection");

router.get("/productDelete/:id", (req, res) => {
  let query = `DELETE FROM contacts WHERE id_users=?`;
  connection.query(query[req.params.id], (err, data) => {
    if (err) {
      console.log(err);
      console.log(query);
      return res.send(err);
    } else {
      return res.json("Product deleted correctly.");
    }
  });
});

module.exports = router;
