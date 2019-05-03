const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const GoogleApiKey = "AIzaSyCsJFGi3_Ouj4HLOTzcIAR45OJeM0kAths";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);


// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});









