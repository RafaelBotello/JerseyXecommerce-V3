require("dotenv").config();
const router = require("express").Router();
const connection = require("./SQLconnection");

router.get("/addUser/:query", (req, res) => {
  let query = req.params.query;
  console.log(query);
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      return res.redirect("/users");
    }
  });
});

module.exports = router;
