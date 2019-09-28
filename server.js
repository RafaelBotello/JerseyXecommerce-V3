require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;
const app = express();

const usersAPI = require("./routes/usersAPI");
const productFilterAPI = require("./routes/productFilterAPI");
const productsAPI = require("./routes/productsAPI");

// Define middleware here
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use apiRoutes
app.use("/api", productsAPI);
app.use("/api", productFilterAPI);
app.use("/api", usersAPI);

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
  console.log(`Hello 🌎 ==> API server now on port ${PORT}!`);
});
