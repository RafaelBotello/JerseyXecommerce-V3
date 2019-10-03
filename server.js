// Define dependencies here

require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

// Imported API's
const usersAPI = require("./routes/usersAPI");
const productFilterAPI = require("./routes/productFilterAPI");
const productsAPI = require("./routes/productsAPI");
const deleteAPI = require("./routes/bonusAPIdelete");

// Define middleware here
app.use(morgan()); //logs every request
app.use(helmet()); //security
app.use(express.urlencoded({ extended: true })); //Setting it to utf-8
app.use(express.json());

// Use apiRoutes
app.use("/api", productsAPI);
app.use("/api", productFilterAPI);
app.use("/api", usersAPI);
app.use("/api", deleteAPI);

// Send every request to the React app
// Define any API routes before this runs
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.listen(PORT, function() {
  console.log(`Hello worldd ==> API server now on port ${PORT}!`);
});
