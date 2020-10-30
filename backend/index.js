const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/todona", { useNewUrlParser: true })
  .then(() => {
    console.log("📚 Database connected at mongodb://localhost:27017/todona");
  });

app.use("/api", routes);

app.listen(1000, () => {
  console.log(`🚀 Server is ready on port 1000`);
});
