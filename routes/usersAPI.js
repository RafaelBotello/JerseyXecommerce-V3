// Contacts API
require("dotenv").config();
const router = require("express").Router();
const connection = require("./SQLconnection");

router.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, data) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      return res.json(data);
    }
  });
});

module.exports = router;
